pipeline{
  agent any
  stages{
    stage{"checkout stage"}{
      steps{
        checkout scm
      }
    }
    satge{"build Image"}{
      steps{
         sh `docker build -t my-node-app:1.0 .`
      }
    }
  }
}
