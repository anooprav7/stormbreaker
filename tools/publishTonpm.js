const latestVersion = require('latest-version');
const path = require('path');
const readPkg = require('read-pkg');
const semver = require('semver');
const { execSync } = require('child_process');
const { info, warn, log, error, indent } = require('pretty-console-logs');
const fs = require('fs-extra');

const MODULE_NAMES = require('./utils/constants').MODULE_NAMES;
const PRODUCTION_BUILD_FOLDER_NAME = 'publishBuild';

// const packagesToDeploy = [MODULE_NAMES.stormbreaker, MODULE_NAMES.tokens.anooprav7];

const packageToDeploy = MODULE_NAMES.stormbreaker;
console.clear();
/*
packagesToDeploy.map(packageName => {
	const basePath = path.dirname(require.resolve(packageName));
    const packageJSONVersion = readPkg.sync({ cwd: basePath }).version;
    
});
*/
const basePath = path.dirname(require.resolve(packageToDeploy));
const packageJSONVersion = readPkg.sync({ cwd: basePath }).version;

latestVersion(packageToDeploy).then(publishedVersion =>
	CheckVersions(packageToDeploy, publishedVersion, packageJSONVersion, finallyPublishToNPM)
);

function CheckVersions(packageName, npmVersion, localVersion, callbackWhenValid) {
	indent.nl(1).tab(2);
	warn('PACKAGE', `${packageName} `);
	log.m(`npm ${npmVersion}`);
	log.m(`Local ${localVersion}`);
	if (semver.lt(semver.clean(npmVersion), semver.clean(localVersion))) {
		success.bm('STATUS', 'PASS');
		callbackWhenValid(packageName);
	} else {
		error.bm('STATUS', 'FAIL');
	}
	indent.nl(1);
}

function finallyPublishToNPM(packageName) {
	info('SUCCESS', `Publishing Started`);

	const basePath = path.dirname(require.resolve(packageName));
	fs.pathExists(`${basePath}/${PRODUCTION_BUILD_FOLDER_NAME}`, (err, exists) => {
		if (exists) {
			let publishBasePath = `${basePath}/${PRODUCTION_BUILD_FOLDER_NAME}`;
			//process.chdir(publishBasePath);
			try {
				//execa.shellSync('ls');
				// execSync(`npm publish --access public`, { stdio: 'inherit' });
				execSync(`npm publish --access=public`, {
					cwd: publishBasePath,
					detached: true,
					killSignal: 'SIGTERM',
					stdio: 'inherit'
				});
				info(`${packageName} publishing to npm Complete`);
			} catch (err) {
				error(err);
			}
		} else {
			error(`'${PRODUCTION_BUILD_FOLDER_NAME}' folder not found. Please build`);
		}
	});
	//execSync(`npm publish --access public`, { stdio: 'inherit' });
}
