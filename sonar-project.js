const scanner = require('sonarqube-scanner');
sonarqubeScanner({
	serverUrl: 'http://54.164.176.191:9000/',
	options: {
		'sonar.projectDescription': 'This is a Node JS application',
		'sonar.projectName': 'Node-Js-Sonar',
		'sonar.projectKey': 'Node-Js-Sonar',
		'sonar.login': 'a9098da303a9278e513bff033bb30ff7b6009465',
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
