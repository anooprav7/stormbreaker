// https://github.com/everydayhero/constructicon/blob/master/styleguide.config.js

const path = require('path');
const { styles, theme } = require('./styleguide.styles');
// const { version } = require('stormbreaker/package.json');

const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const FAVICON_URL = `https://firebasestorage.googleapis.com/v0/b/mycdn-anooprav7.appspot.com/o/stormbreaker.png?alt=media&token=79cd08e5-ecbf-44cb-8b3b-38a63fddfb13`;

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

// template: { filename: './styleguide.template.html', favicon: FAVICON_URL },

module.exports = {
	title: `Stormbreaker`,
	editorConfig: { theme: 'cobalt' },
	template: { favicon: FAVICON_URL },
	serverPort: 7007,
	usageMode: 'expand',
	styles,
	theme,
	skipComponentsWithoutExample: true,
	pagePerSection: true,
	getComponentPathLine(componentPath) {
		const name = path.dirname(componentPath).split('/');
		const lastName = name[name.length - 1];
		// const dir = path.dirname(componentPath);
		return `import { ${lastName} } from 'stormbreaker'`;
	},
	styleguideComponents: {
		Logo: path.join(__dirname, './src/helperComponents/LibraryLogo'),
		Wrapper: path.join(__dirname, './src/helperComponents/ThemeWrapper')
	},
	sections: [
		{
			name: 'Guides',
			sections: [
				{
					name: 'Getting Started',
					content: path.resolve(__dirname, './src/pages', 'getting-started.md')
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
		},
		{
			name: 'Design Tokens',
			sections: [
				{
					name: '@anooprav7/token',
					content: path.resolve(__dirname, './src/pages/token', 'README.md')
				}
			]
		}
	],
	webpackConfig: require('./webpack.config.js')
};
