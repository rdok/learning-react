# Learning React

[![Build Status](https://jenkins.rdok.dev/buildStatus/icon?job=learning-react)](https://jenkins.rdok.dev/job/learning-react/)

## Local Dev
- `cp .env.local .env`
- `echo '127.0.0.1 learning-react.rdok.local' | sudo tee -a /etc/hosts`
- `docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d`
