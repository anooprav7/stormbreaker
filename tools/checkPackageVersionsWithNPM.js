const latestVersion = require('latest-version');
const path = require('path');
const readPkg = require('read-pkg');
const semver = require('semver');
const { info, warn, log, error, indent } = require('themed-cli');

const MODULE_NAMES = require('./utils/constants').MODULE_NAMES;

const packagesToDeploy = [MODULE_NAMES.stormbreaker, MODULE_NAMES.tokens.anooprav7];

const totalPackageCount = packagesToDeploy.length;
let packageProcessCompletedCount = 0;
let packageProcessFailCount = 0;

console.clear();
indent.nl(1).tab(2);
warn.m('NPM Packages');
indent.nl(1);

packagesToDeploy.map(packageName => {
	const basePath = path.dirname(require.resolve(packageName));
	const packageJSONVersion = readPkg.sync({ cwd: basePath }).version;
	latestVersion(packageName).then(publishedVersion =>
		CheckVersions(packageName, publishedVersion, packageJSONVersion, finallyPublishToNPM)
	);
});

function CheckVersions(packageName, npmVersion, localVersion, callback) {
	//indent.tab(2);
	warn('PACKAGE', `${packageName} `);
	log.m(`NPM     v${npmVersion}`);
	log.m(`Current v${localVersion}`);
	if (semver.lt(semver.clean(npmVersion), semver.clean(localVersion))) {
		error('STATUS', 'OUTDATED');
		packageProcessFailCount++;
	} else {
		info('STATUS', 'CURRENT');
	}
	indent.nl(2);
	callback();
}

function finallyPublishToNPM() {
	packageProcessCompletedCount++;
	if (packageProcessCompletedCount === totalPackageCount) {
		if (packageProcessFailCount > 0) {
			error('FAIL', `${packageProcessFailCount} outdated package(s). Please publish latest packages to npm`);
		} else {
			info('SUCCESS', `All packages are up to date with npm`);
		}
		indent.nl(2);
	}
}
