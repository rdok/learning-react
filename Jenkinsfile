pipeline {
    triggers { cron('H H(18-19) * * *') }
    options { buildDiscarder(logRotator(daysToKeepStr: '30', numToKeepStr: '100') ) }
    environment {
        VIRTUAL_HOST = 'learning-react.rdok.dev'
        VIRTUAL_PORT = 3002
        LETSENCRYPT_HOST = 'learning-react.rdok.dev'
        LETSENCRYPT_EMAIL = 'r.dokollari@gmail.com'
        DEFAULT_EMAIL = 'r.dokollari@gmail.com'
    }
    agent { label 'linux' }
    stages {
        stage('Test') {
            steps { echo 'test' }
        }        
        stage('Deploy') {
            agent { label 'rdok.dev' }
            steps { sh '''
                docker run --volumes-from jenkins.rdok.dev -w $(pwd) --rm node npm install
                docker run --volumes-from jenkins.rdok.dev -w $(pwd) --rm node npm run build
                docker-compose build --pull 
                docker-compose down
                docker-compose up -d
            ''' }
        }
    }
}
