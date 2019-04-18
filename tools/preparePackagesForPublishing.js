const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const ncp = require('ncp').ncp;
// const fs = require('fs-extra');

const { info, warn, log, error, indent } = require('themed-cli');

const copyFile = require('./utils/_fileHelpers').copyFile;

const MODULE_NAMES = require('./utils/constants').MODULE_NAMES;
const PRODUCTION_BUILD_FOLDER_NAME = 'publishBuild';

const stormbreakerBasePath = path.dirname(require.resolve(MODULE_NAMES.stormbreaker));
const filesToCopyToBuildFolder = ['aggregator.js', 'index.js', 'package.json'];
const directoriesToCopyToBuildFolder = ['compounds', 'elements'];

console.clear();
indent.nl(1).tab(2);
warn.b(' Stormbreaker build ');
indent.nl(1);

// fs.remove('/tmp/myFolder', callback);

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

// const anooprav7Token = path.dirname(require.resolve(MODULE_NAMES.tokens.anooprav7));
