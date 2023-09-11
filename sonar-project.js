const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
	serverUrl: 'http://54.164.176.191:9000',
	options: {
		'sonar.projectDescription': 'This is a Node JS application',
		'sonar.projectName': 'sonar',
		'sonar.projectKey': 'sonarnode',
		'sonar.login': '7fc1a4429d99d52a0e78a9f2120388a7b7643288',
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
