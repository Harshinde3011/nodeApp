pipeline{
  agent any
  environment{
    BUILD_NUMBER = 1
  }
  stages{
    stage("checkoutstage"){
      steps{
        checkout scm
      }
    }
    stage("build Image"){
      steps{
         script{
           BUILD_NUMBER += 1
         }
         sh 'docker build -t my-node-app:v${BUILD_NUMBER} .'
      }
    }
    stage("run container from image"){
      steps{
         sh 'docker run -d -p 8000:8000 my-node-app:v${BUILD_NUMBER}'
      }
    }
    stage("Push dockerImage dockerHub"){
      steps{
         withCredentials([usernamePassword(credentialsId:'docker_cred',passwordVariable:"DOCKERHUB_PASSWORD",usernameVariable:"DOCKERHUB_USERNAME")]){
        sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
        sh 'docker push myrepo1922/my-node-app:v${BUILD_NUMBER}'
        sh 'docker logout'
      }
      }
    }
  }
}
