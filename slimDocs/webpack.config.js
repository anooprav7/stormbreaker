const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(webpackEnviornment) {
	const isEnvDevelopment = webpackEnviornment === 'development';
	const isEnvProduction = webpackEnviornment === 'production';

	return {
		mode: webpackEnviornment || 'production',
		entry: './index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: '[name].[chunkhash:8].js'
		},
		module: {
			strictExportPresence: true,
			rules: [
				// Disable require.ensure as it's not a standard language feature.
				{ parser: { requireEnsure: false } },
				{
					// "oneOf" will traverse all following loaders until one will
					// match the requirements. When no loader matches it will fall
					// back to the "file" loader at the end of the loader list.
					oneOf: [
						// "url" loader works like "file" loader except that it embeds assets
						// smaller than specified limit in bytes as data URLs to avoid requests.
						// A missing `test` is equivalent to a match.
						{
							test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
							loader: require.resolve('url-loader'),
							options: {
								limit: 10000,
								name: 'static/media/[name].[hash:8].[ext]'
							}
						},
						// Process application JS with Babel.
						// The preset includes JSX, Flow, TypeScript, and some ESnext features.
						{
							test: /\.(js|mjs|jsx)$/,
							exclude: /node_modules/,

							// include: [
							// 	paths.appSrc,
							// 	paths.styleguide,
							// ],

							loader: require.resolve('babel-loader'),
							options: {
								customize: require.resolve('babel-preset-react-app/webpack-overrides'),
								rootMode: 'upward',
								plugins: [
									[
										require.resolve('babel-plugin-named-asset-import'),
										{
											loaderMap: {
												svg: {
													ReactComponent: '@svgr/webpack?-svgo![path]'
												}
											}
										}
									]
								],
								// This is a feature of `babel-loader` for webpack (not Babel itself).
								// It enables caching results in ./node_modules/.cache/babel-loader/
								// directory for faster rebuilds.
								cacheDirectory: true,
								cacheCompression: isEnvProduction,
								compact: isEnvProduction
							}
						},

						// "file" loader makes sure those assets get served by WebpackDevServer.
						// When you `import` an asset, you get its (virtual) filename.
						// In production, they would get copied to the `build` folder.
						// This loader doesn't use a "test" so it will catch all modules
						// that fall through the other loaders.
						{
							loader: require.resolve('file-loader'),
							// Exclude `js` files to keep "css" loader working as it injects
							// its runtime that would otherwise be processed through "file" loader.
							// Also exclude `html` and `json` extensions so they get processed
							// by webpacks internal loaders.
							exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
							options: {
								name: 'static/media/[name].[hash:8].[ext]'
							}
						}
						// ** STOP ** Are you adding a new loader?
						// Make sure to add the new loader(s) before the "file" loader.
					]
				}
			]
		},
		plugins: [
			// Generates an `index.html` file with the <script> injected.
			new HtmlWebpackPlugin(
				Object.assign(
					{},
					{
						inject: true,
						template: 'styleguide.template.html'
					},
					isEnvProduction
						? {
								minify: {
									removeComments: true,
									collapseWhitespace: true,
									removeRedundantAttributes: true,
									useShortDoctype: true,
									removeEmptyAttributes: true,
									removeStyleLinkTypeAttributes: true,
									keepClosingSlash: true,
									minifyJS: true,
									minifyCSS: true,
									minifyURLs: true
								}
						  }
						: undefined
				)
			)
		]
	};
};
