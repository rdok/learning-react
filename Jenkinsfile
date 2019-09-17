pipeline {
    environment {
        VIRTUAL_HOST = 'learning-react.rdok.dev'
        VIRTUAL_PORT = 3002
        LETSENCRYPT_HOST = 'learning-react.rdok.dev'
        LETSENCRYPT_EMAIL = 'r.dokollari@gmail.com'
        DEFAULT_EMAIL = 'r.dokollari@gmail.com'
    }
    agent { label "linux" }
    stages {
        stage('Build') {
            steps {
                sh './npm install' 
                sh './npm run build' 
            }
        }
        stage('Test') {
            steps { echo 'test' }
        }        
        stage('Deploy') {
            agent { label "rdok.dev" }
            steps { sh '''
                docker-compose build --pull 
                docker-compose down
                docker-compose up -d
            ''' }
        }
    }
}
