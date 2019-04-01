// Use && (double ampersand) for sequential execution.
// Use & (single ampersand) for parallel execution.

module.exports = {
	scripts: {
		server: {
			default: {
				script: 'cd docs && yarn docs:server',
				description: 'Run styleguidist server docs'
			}
		},
		play: {
			script: 'cd docs && yarn start',
			description: 'Run playground from docs'
		},
		publish: {
			stormbreaker: {
				script: 'cd core/components && npm publish',
				description: 'Publish stormbreaker to npm'
			},
			tokens: {}
		},
		build: {
			stormbreaker: {
				script: 'node tools/publishHelper.js',
				description: 'Publish stormbreaker to npm'
			},
			token: {
				script: 'node tools/createModulesForPublishing.js',
				description: 'Publish stormbreaker to npm'
			},
			docs: {
				script: 'cd docs && yarn docs:build',
				description: 'Run styleguidist server docs'
			}
		},
		clean: {
			stormbreaker: {
				script: 'cd core/components && rm -rf build',
				description: 'Delete build folder'
			}
		},
		check: {
			default: 'nps build.stormbreaker && nps build.token'
		},
		help: {
			default: 'nps clean.stormbreaker && nps build.stormbreaker'
		}
	}
};
