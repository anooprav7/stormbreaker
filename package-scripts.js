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
				script: 'cd core/components/build && npm publish',
				description: 'Publish stormbreaker to npm'
			},
			tokens: {}
		},
		clean: {
			stormbreaker: {
				script: 'cd core/components && rm -rf build',
				description: 'Delete build folder'
			}
		},
		build: {
			stormbreaker: {
				script:
					'nps clean.stormbreaker && node tools/prepareBuildForPublishing.js && cd core/components && yarn babel:build',
				description: 'Build stormbreaker ready to publish'
			},
			token: {
				script: 'node tools/createModulesForPublishing.js',
				description: 'Publish stormbreaker to npm'
			},
			docs: {
				script: 'cd docs && yarn docs:build',
				description: 'Build styleguidist server docs to host somewhere'
			}
		},
		check: {
			default: 'nps build.stormbreaker && cd core/components && yarn babel:build'
		}
	}
};
