pipeline {
    agent any
    tools {
        nodejs "NodeJs 20.6.1"
    }
    stages {
        stage ('remove npm package'){
            steps{
                sh "rm -rf package-lock.json"
                sh "npm cache clean --force"
                sh "npm uninstall -g global-package"
            }
        }
        stage('Build') {
            steps {
                // Your build steps here
                sh 'npm install -g'
            }
        }
        // stage('sonar'){
        //     steps{
        //         //sh 'npm run sonar'
        //         sh 'node sonar-project.js'
        //     }
        // }
        // stage('Configure npm credentials') {
        //     steps {
        //         script {
        //             // Set the registry URL
        //             sh 'npm config set registry http://100.26.159.217:8081/repository/sonarQube-nodeJS/'

        //             // Use the npm token credential
        //             withCredentials([string(credentialsId: 'nexustoken-npmrc', variable: 'npmtoken')]) {
        //             sh 'echo "//registry.npmjs.org/:_authToken=$npmtoken" > ~/.npmrc'
        //             }
        //         }
        //     }
        // }

        // 

           stage('Build and Publish') {
               steps {
                   // Build your Node.js project (if needed)
                //    sh 'npm publish'

                   // Publish the Node.js package to Nexus Repository
                   sh 'npm publish --registry http://100.26.159.217:8081/repository/sonarQube-nodeJS/'
               }
           }
    }
}
