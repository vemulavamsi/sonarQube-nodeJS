const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
	serverUrl: 'http://54.164.176.191:9000/projects',
	options: {
		'sonar.projectDescription': 'This is a Node JS application',
		'sonar.projectName': 'Node-Js-Sonar',
		'sonar.projectKey': 'Node-Js-Sonar',
		'sonar.login': '8188f26f73fc6de2a054b2a090a3cfd49e3622f4',
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
