pipeline {
    agent { label "linux" }
    stages {
        stage('Build') {
            steps { echo 'build' }
        }
        stage('Test') {
            steps { echo 'build' }
        }        
        stage('Deploy') {
            agent { label "rdok.dev" }
            steps { echo 'deploy' }
        }
    }
}
