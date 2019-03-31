const {
	series: { nps: series },
	concurrent: { nps: parallel }
} = require('nps-utils');

module.exports = {
	scripts: {
		docs: {
			default: {
				script: 'cd docs && yarn docs:server',
				description: 'Run styleguidist server docs'
			},
			build: {
				script: 'cd docs && yarn docs:build',
				description: 'Run styleguidist server docs'
			}
		},
		play: {
			script: 'cd docs && yarn start',
			description: 'Run playground from docs'
		},
		test: {
			default: {
				script: 'yarn start',
				description:
					'Check if applications build + Run visual tests + Run unit and integration tests'
			}
		},
		publish: {
			stormbreaker: {
				script: 'cd core/components && npm publish',
				description: 'Publish stormbreaker to npm'
			},
			tokens: {}
		}
	}
};
