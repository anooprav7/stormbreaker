const latestVersion = require('latest-version');
const path = require('path');
const readPkg = require('read-pkg');
const { info, warn, log, error, indent } = require('themed-cli');

const MODULE_NAMES = require('./utils/constants').MODULE_NAMES;

const stormbreakerBasePath = path.dirname(require.resolve(MODULE_NAMES.stormbreaker));
const anooprav7TokenBasePath = path.dirname(require.resolve(MODULE_NAMES.tokens.anooprav7));

const stormbreakerPackageJSONVersion = readPkg.sync({ cwd: stormbreakerBasePath }).version;
const anooprav7TokenPackageJSONVersion = readPkg.sync({ cwd: anooprav7TokenBasePath }).version;

latestVersion(MODULE_NAMES.stormbreaker).then(publishedVersion => {
	displayVersions(MODULE_NAMES.stormbreaker, publishedVersion, stormbreakerPackageJSONVersion);
});
latestVersion(MODULE_NAMES.tokens.anooprav7).then(publishedVersion => {
	displayVersions(MODULE_NAMES.tokens.anooprav7, publishedVersion, anooprav7TokenPackageJSONVersion);
});

function displayVersions(packageName, npmVersion, localVersion) {
	indent.nl(1).tab(2);
	warn('PACKAGE', `${packageName} `);
	log.m(`npm ${npmVersion}`);
	log.m(`Local ${localVersion}`);
	if (npmVersion === localVersion) {
		error('STATUS', 'FAILED');
	} else {
		info('STATUS', 'PASS');
	}
	indent.nl(1);
}
