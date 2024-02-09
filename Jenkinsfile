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
    stage("buildImage"){
      steps{
         script{
           BUILD_NUMBER += 1
         }
         sh 'docker build -t my-node-app:v${BUILD_NUMBER} .'
      }
    }
    stage("runcontainer"){
      steps{
         sh 'docker run -d -p 8000:8000 my-node-app:v${BUILD_NUMBER}'
      }
    }
  }
}
