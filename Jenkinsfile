pipeline{
  agent any
  stages{
    stage("checkoutstage"){
      steps{
        checkout scm
      }
    }
    stage("buildImage"){
      steps{
         sh 'docker build -t my-node-app:1.0 .'
      }
    }
    stage("runcontainer"){
      steps{
         sh 'docker run -d -p 8000:8000 my-node-app:1.0'
      }
    }
  }
}
