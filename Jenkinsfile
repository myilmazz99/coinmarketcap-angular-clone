pipeline{
    agent any
    environment{
        VERSION='1.0.2'
        REGISTRY_CREDENTIAL = 'bootcamp devops'
    }
    stages{
        stage('Npm build'){
            steps{
                script{
                    sh '''
                    npm install
                    npm run build
                    '''
              }
          }
       }
        stage('Build Docker image'){
            steps{
                script{
                    docker.build("galaksiyait/bootcamp2021-helm-charts/frontend:${env.VERSION}", '.')
              }
          }
       }
        stage('Push Docker image') {
            steps{
                script {
                    docker.withRegistry('https://docker.pkg.github.com', REGISTRY_CREDENTIAL) {
                        def image = docker.image("galaksiyait/bootcamp2021-helm-charts/frontend:${env.VERSION}")
                        image.push()
                    }
                }
            }
         }
     }
}
