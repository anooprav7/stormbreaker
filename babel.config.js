// https://github.com/dan-kez/lerna-webpack-example/blob/master/babel.config.js
// https://babeljs.io/docs/en/options

module.exports = function babelConfig(api) {
	api.cache(false);
	return {
		presets: ['react-app']
	};
};

/*
module.exports = {
	presets: ['react-app']
};
*/
