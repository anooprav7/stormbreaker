const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const MODULE_NAMES = require('./utils/constants').MODULE_NAMES;
const copyFile = require('./utils/_fileHelpers').copyFile;

// Make a new folder and put a copy of package.json there

const stormbreakerBasePath = path.dirname(require.resolve(MODULE_NAMES.stormbreaker));
const stormbreakerPackageJSON = `${stormbreakerBasePath}/package.json`;

console.log('Stormbreaker build');

mkdirp(`${stormbreakerBasePath}/build`, function(err) {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log('build folder created');

	copyFile(stormbreakerPackageJSON, `${stormbreakerBasePath}/build/package.json`, () => {
		console.log('Success copy');
	});

	/*
	fs.createReadStream(stormbreakerPackageJSON).pipe(
		fs.createWriteStream(`${stormbreakerBasePath}/build/package.json`)
    );
    */
});

const anooprav7Token = path.dirname(require.resolve(MODULE_NAMES.tokens.anooprav7));
