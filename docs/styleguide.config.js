// https://github.com/everydayhero/constructicon/blob/master/styleguide.config.js

const path = require('path');
const { styles, theme } = require('./styleguide.styles');
const { version } = require('./package.json');

const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectoriesAndAddIndex = source =>
	readdirSync(source)
		.map(name => join(source, name))
		.filter(isDirectory)
		.map(dir => `${dir}/index.js`);

const masterPath = path.dirname(require.resolve('stormbreaker'));
// console.log('docs path - ', path.dirname(require.resolve('stormbreaker')));
// const masterPath = `../core/components`;
// const masterPath = `${process.cwd()}/stormbreakerBuild`;

const elementDirs = getDirectoriesAndAddIndex(`${masterPath}/elements`);
const compoundDirs = getDirectoriesAndAddIndex(`${masterPath}/compounds`);

module.exports = {
	title: `Stormbreaker ${version}`,
	editorConfig: { theme: 'cobalt' },
	template: { filename: './styleguide.template.html', favicon: './images/favicon.ico' },
	serverPort: 7007,
	usageMode: 'expand',
	styles,
	theme,
	pagePerSection: true,
	getComponentPathLine(componentPath) {
		const name = path.dirname(componentPath).split('/');
		const lastName = name[name.length - 1];
		// const dir = path.dirname(componentPath);
		return `import { ${lastName} } from 'stormbreaker'`;
	},
	styleguideComponents: {
		Logo: path.join(__dirname, './styleguide/helperComponents/LibraryLogo'),
		Wrapper: path.join(__dirname, './styleguide/helperComponents/ThemeWrapper')
	},
	sections: [
		{
			name: 'Guides',
			sections: [
				{
					name: 'Getting Started',
					content: path.resolve(__dirname, './styleguide/pages', 'getting-started.md')
				}
			]
		},
		{
			name: 'Elements',
			description: 'Elemental Components',
			sectionDepth: 1,
			components: () => {
				return [...elementDirs];
			}
		},
		{
			name: 'Compounds',
			description: 'Compound Components',
			sectionDepth: 1,
			components: () => {
				return [...compoundDirs];
			}
		}
	],
	webpackConfig: require('./config/webpack.config.js')('development')
};
