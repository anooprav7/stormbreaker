const {
	series: { nps: series },
	concurrent: { nps: parallel }
} = require('nps-utils');

module.exports = {
	scripts: {
		default: {
			script: 'cd docs && yarn sss',
			description: 'Run docs in dev'
		},
		play: {
			script: 'cd playground && yarn start',
			description: 'Run playground in dev'
		},
		test: {
			default: {
				script: 'yarn start',
				description: 'Check if applications build + Run visual tests + Run unit and integration tests'
			}
		},
		publish: {
			stormbreaker: {
				script: 'npm publish',
				description: 'Publish stormbreaker to npm'
			},
			tokens: {}
		},
		docs: {
			dev: {
				script: 'cd docs && yarn sss',
				description: 'Run docs in dev'
			},
			build: {}
		}
	}
};
