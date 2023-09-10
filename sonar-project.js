const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
	serverUrl: 'http://100.26.252.128:9000/',
	options: {
		'sonar.projectDescription': 'This is a Node JS application',
		'sonar.projectName': 'sonarQube-nodeJS',
		'sonar.projectKey': 'sonarQube-nodeJS',
		'sonar.login': 'ac69ef0b19d06686033671097ea61ceced87dfce',
		//'sonar.login': 'admin',
		//'sonar.password': 'admin',
		'sonar.projectVersion': '1.0',
		'sonar.language': 'js',
		'sonar.sourceEncoding': 'UTF-8',
		'sonar.sources': '.',
		//'sonar.tests': 'specs',
		//'sonar.inclusions' : 'src/**'
	},
}, () => { });
