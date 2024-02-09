pipeline{
  agent any
  stages{
    stage{"checkoutstage"}{
      steps{
        checkout scm
      }
    }
    stage{"buildImage"}{
      steps{
         sh 'docker build -t my-node-app:1.0 .'
      }
    }
  }
}
