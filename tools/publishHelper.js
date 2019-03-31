const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

// Make a new folder and put a copy of package.json there

const stormbreakerBasePath = path.dirname(require.resolve('stormbreaker'));

console.log('Here');
/*
mkdirp(`${stormbreakerBasePath}/build`, function(err) {
	if (err) console.error(err);
	else console.log('pow!');
});
*/
