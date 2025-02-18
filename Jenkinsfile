pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "trainin123/node-express"
        DOCKER_CREDENTIALS_ID = "docker cred"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/akash-kumar-s0/jenkins-training.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE:latest ."
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "docker login -u "$DOCKER_USER" -p "$DOCKER_PASS"
                    }
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                sh "docker push $DOCKER_IMAGE:latest"
            }
        }

        stage('Cleanup') {
            steps {
                sh "docker rmi $DOCKER_IMAGE:latest"
            }
        }
    }

    post {
        success {
            echo "🎉 Docker image pushed successfully to Docker Hub!"
        }
        failure {
            echo "❌ Build failed!"
        }
    }
}