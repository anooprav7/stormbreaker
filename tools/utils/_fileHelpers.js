const fs = require('fs');

module.exports = {
	copyFile: function copyFile(source, target, callBackOnSuccess) {
		var cbCalled = false;

		var rd = fs.createReadStream(source);
		rd.on('error', function(err) {
			done(err);
		});
		var wr = fs.createWriteStream(target);
		wr.on('error', function(err) {
			done(err);
		});
		wr.on('close', function(ex) {
			done();
		});
		rd.pipe(wr);

		function done(err) {
			if (!cbCalled) {
				callBackOnSuccess(err);
				cbCalled = true;
			}
		}
	}
};
