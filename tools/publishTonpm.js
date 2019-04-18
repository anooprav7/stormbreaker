const latestVersion = require('latest-version');
const path = require('path');
const readPkg = require('read-pkg');
const semver = require('semver');
const { exec } = require('child_process');
const { info, warn, log, error, indent } = require('themed-cli');
const fs = require('fs-extra');
const execa = require('execa');

const MODULE_NAMES = require('./utils/constants').MODULE_NAMES;
const PRODUCTION_BUILD_FOLDER_NAME = 'publishBuild';

const packagesToDeploy = [MODULE_NAMES.stormbreaker, MODULE_NAMES.tokens.anooprav7];

const totalPackageCount = packagesToDeploy.length;
let packageProcessCompletedCount = 0;
let packageProcessFailCount = 0;

packagesToDeploy.map(packageName => {
	const basePath = path.dirname(require.resolve(packageName));
	const packageJSONVersion = readPkg.sync({ cwd: basePath }).version;
	latestVersion(packageName).then(publishedVersion =>
		CheckVersions(packageName, publishedVersion, packageJSONVersion, finallyPublishToNPM)
	);
});

function CheckVersions(packageName, npmVersion, localVersion, callback) {
	indent.nl(1).tab(2);
	warn('PACKAGE', `${packageName} `);
	log.m(`npm ${npmVersion}`);
	log.m(`Local ${localVersion}`);
	if (semver.lt(semver.clean(npmVersion), semver.clean(localVersion))) {
		info('STATUS', 'PASS');
	} else {
		error('STATUS', 'FAIL');
		packageProcessFailCount++;
	}
	indent.nl(1);
	callback();
}

function finallyPublishToNPM() {
	packageProcessCompletedCount++;
	if (packageProcessCompletedCount === totalPackageCount) {
		if (packageProcessFailCount > 0) {
			error('FAIL', `${packageProcessFailCount} package(s) failed. Please update version`);
		} else {
			info('SUCCESS', `Publishing Started`);
			packagesToDeploy.map(packageName => {
				const basePath = path.dirname(require.resolve(packageName));
				fs.pathExists(`${basePath}/${PRODUCTION_BUILD_FOLDER_NAME}`, (err, exists) => {
					//console.log(err); // => null
					// log.m(`${packageName} folder - ${exists}`); // => false
					let publishBasePath = basePath;
					if (exists) {
						publishBasePath = `${basePath}/${PRODUCTION_BUILD_FOLDER_NAME}`;
					}
					process.chdir(publishBasePath);
					try {
						execa.shellSync('ls');
						// execSync(`npm publish --access public`, { stdio: 'inherit' });
					} catch (err) {
						error(err);
					}
				});
				//execSync(`npm publish --access public`, { stdio: 'inherit' });
			});
		}
	}
}
