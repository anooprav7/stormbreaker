// Use && (double ampersand) for sequential execution.
// Use & (single ampersand) for parallel execution.

module.exports = {
	scripts: {
		docs: {
			default: {
				script: 'cd docs && yarn start',
				description: 'Run styleguidist server docs'
			},
			build: {
				script: 'cd docs && yarn build',
				description: 'Run styleguidist server docs'
			}
		},
		play: {
			script: 'cd docs && yarn start',
			description: 'Run playground from docs'
		},
		status: {
			default: {
				script: 'cd tools && node checkPackageVersionsWithNPM.js'
			}
		},
		publish: {
			stormbreaker: {
				script: 'cd tools && node publishToNPM.js',
				description: 'Publish stormbreaker to npm'
			},
			tokens: {}
		},
		clean: {
			stormbreaker: {
				script: 'cd packages/stormbreaker && rm -rf publishBuild',
				description: 'Remove stormbreaker publishBuild folder'
			}
		},
		build: {
			stormbreaker: {
				script:
					'nps clean.stormbreaker && node tools/preparePackagesForPublishing.js && cd packages/stormbreaker && yarn babel:build',
				description: 'Build stormbreaker ready to publish'
			},
			token: {
				script: 'node tools/createModulesForPublishing.js',
				description: 'Build @anooprav7/token to npm'
			},
			docs: {
				script: 'cd docs && yarn build',
				description: 'Build styleguidist server docs to host somewhere'
			}
		},
		check: {
			default: 'cd tools && node checkPackageVersionsWithNPM.js'
		}
	}
};
