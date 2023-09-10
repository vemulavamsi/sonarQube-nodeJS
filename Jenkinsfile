pipeline {
    agent any
    tools {
        nodejs "Node.js 16.15.1"
    }
    stages {
        stage('Build') {
            steps {
                // Your build steps here
                sh 'npm install'
            }
        }
    }
}