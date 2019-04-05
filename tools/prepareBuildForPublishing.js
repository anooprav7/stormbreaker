const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const ncp = require('ncp').ncp;

const readPkg = require('read-pkg');
const latestVersion = require('latest-version');

const MODULE_NAMES = require('./utils/constants').MODULE_NAMES;
const copyFile = require('./utils/_fileHelpers').copyFile;

const stormbreakerBasePath = path.dirname(require.resolve(MODULE_NAMES.stormbreaker));
const filesToCopyToBuildFolder = ['aggregator.js', 'index.js', 'package.json'];
const directoriesToCopyToBuildFolder = ['compounds', 'elements'];

const { version } = readPkg.sync({ cwd: stormbreakerBasePath });

latestVersion('stormbreaker').then(publishedVersion => {
	/* if the latest version is already published, skip this entire script */
	console.log(`Published Version ${publishedVersion} === version ${version}`);
	if (publishedVersion === version) {
		console.log(`This version (${version}) is already published.`);
		process.exit(0);
	}

	console.log('Stormbreaker build');

	mkdirp(`${stormbreakerBasePath}/build`, function(err) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		console.log('build folder created');

		// Copying required Files
		filesToCopyToBuildFolder.forEach(fileName => {
			copyFile(
				`${stormbreakerBasePath}/${fileName}`,
				`${stormbreakerBasePath}/build/${fileName}`,
				() => {
					console.log(`File ${fileName} copy Successful`);
				}
			);
		});

		// Copying required folders
		directoriesToCopyToBuildFolder.forEach(folderName => {
			ncp(
				`${stormbreakerBasePath}/${folderName}`,
				`${stormbreakerBasePath}/build/${folderName}`,
				function(err) {
					if (err) {
						console.error(err);
						process.exit(1);
					}
					console.log(`Folder ${folderName} copy Successful`);
				}
			);
		});
	});
});
// const anooprav7Token = path.dirname(require.resolve(MODULE_NAMES.tokens.anooprav7));
