pipeline {
    agent any
    tools {nodejs "node"}
    environment {
    registry = "div450/jenkinsapp"
    dockerImage = ''
    registryCredential = 'docker_hub_cred'
  }
    stages{
        stage("fetching"){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/divyanshu450/CI-CD-Pipeline']]])
            }
        }
        stage("build"){
            steps{
                bat "npm install"
            }
        }
        stage('image') {
      steps {
        script {
          dockerImage = docker.build registry
          docker.withRegistry('', registryCredential) {
            dockerImage.push()
          }
          }
      }
        }
          stage('run') {
      steps {
        script {
          dockerImage = docker.image('div450/jenkinsapp')
          dockerImage.run("-p 3000:3000 --rm --name jenkins_container")
        }
      }
    }
    }
    
}