const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const ncp = require('ncp').ncp;

const readPkg = require('read-pkg');
const latestVersion = require('latest-version');

const { info, warn, log, error, indent } = require('themed-cli');

const MODULE_NAMES = require('./utils/constants').MODULE_NAMES;
const copyFile = require('./utils/_fileHelpers').copyFile;

const PRODUCTION_BUILD_FOLDER_NAME = 'publishBuild';

const stormbreakerBasePath = path.dirname(require.resolve(MODULE_NAMES.stormbreaker));
const filesToCopyToBuildFolder = ['aggregator.js', 'index.js', 'package.json'];
const directoriesToCopyToBuildFolder = ['compounds', 'elements'];

const { version } = readPkg.sync({ cwd: stormbreakerBasePath });
/**
 *
 */
indent.nl(1).tab(2);
warn.b(' Stormbreaker build ');
indent.nl(1);

latestVersion('stormbreaker').then(publishedVersion => {
	/* if the latest version is already published, skip this entire script */
	log(`Published Version ${publishedVersion} === Current version ${version}`);
	if (publishedVersion === version) {
		// console.log(`This version (${version}) is already published.`);
		error(`This version (${version}) is already published.`);
		process.exit(0);
	}

	mkdirp(`${stormbreakerBasePath}/${PRODUCTION_BUILD_FOLDER_NAME}`, function(err) {
		if (err) {
			error(err);
			process.exit(1);
		}
		info('SUCCESS', `'${PRODUCTION_BUILD_FOLDER_NAME}' folder created`);

		// Copying required Files
		filesToCopyToBuildFolder.forEach(fileName => {
			copyFile(
				`${stormbreakerBasePath}/${fileName}`,
				`${stormbreakerBasePath}/${PRODUCTION_BUILD_FOLDER_NAME}/${fileName}`,
				() => {
					info('SUCCESS', `File ${fileName} copy Successful`);
				}
			);
		});

		// Copying required folders
		directoriesToCopyToBuildFolder.forEach((folderName, index, array) => {
			ncp(
				`${stormbreakerBasePath}/${folderName}`,
				`${stormbreakerBasePath}/${PRODUCTION_BUILD_FOLDER_NAME}/${folderName}`,
				function(err) {
					if (err) {
						error(err);
						process.exit(1);
					}
					info('SUCCESS', `Folder ${folderName} copy Successful`);
				}
			);
		});
	});
});
// const anooprav7Token = path.dirname(require.resolve(MODULE_NAMES.tokens.anooprav7));
