// https://in-your-saas.github.io/material-ui-theme-editor/
// https://building.coursera.org/coursera-ui/?selectedKind=UI.all&selectedStory=Theme&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
/*
	default: {
		main: '#e0e0e0;',
		light: '',
		dark: '',
		constrastText: '#000'
    },
    
    -   #60b246
-   font
    -   #7e808c
    -   #3d4152
    -   #282c3f
*/

const colors = {
	common: {
		black: '#000000',
		white: '#FFFFFF'
	},
	primary: {
		main: '#44c7f4',
		light: '#64b5f6',
		dark: '#0096c1',
		contrastText: '#FFFFFF'
	},
	secondary: {
		main: '#13ce66',
		light: '#81c784',
		dark: '#009c39',
		contrastText: '#FFFFFF'
	},
	disabled: {
		opacity: 0.25
	},
	background: {
		light: '#FFFFFF',
		default: '#FAFAFA', // paper
		dark: '#323639'
	},
	error: {
		main: '#eb5424',
		light: '#ff8651',
		dark: '#b11d00',
		contrastText: '#FFFFFF'
	},
	text: {
		primary: '#000',
		secondary: '#000',
		disabled: '#000'
	}
};

const Oldcolors = {
	base: {
		white: '#FFF',
		black: '#000',
		default: '#333',
		gray: '#979797',
		grayDarkest: '#676767',
		grayDark: '#636363',
		grayMedium: '#A8A8A8'
	}
};

const github = {
	bodytext: '#24292e',
	black: '#1b1f23',
	white: '#fff',
	gray: [
		'#fafbfc',
		'#f6f8fa',
		'#e1e4e8',
		'#d1d5da',
		'#959da5',
		'#6a737d',
		'#586069',
		'#444d56',
		'#2f363d',
		'#24292e'
	],
	blue: [
		'#f1f8ff',
		'#dbedff',
		'#c8e1ff',
		'#79b8ff',
		'#2188ff',
		'#0366d6',
		'#005cc5',
		'#044289',
		'#032f62',
		'#05264c'
	],
	green: [
		'#f0fff4',
		'#dcffe4',
		'#bef5cb',
		'#85e89d',
		'#34d058',
		'#28a745',
		'#22863a',
		'#176f2c',
		'#165c26',
		'#144620'
	],
	orange: [
		'#fff8f2',
		'#ffebda',
		'#ffd1ac',
		'#ffab70',
		'#fb8532',
		'#f66a0a',
		'#e36209',
		'#d15704',
		'#c24e00',
		'#a04100'
	],
	purple: [
		'#f5f0ff',
		'#e6dcfd',
		'#d1bcf9',
		'#b392f0',
		'#8a63d2',
		'#6f42c1',
		'#5a32a3',
		'#4c2889',
		'#3a1d6e',
		'#29134e'
	],
	red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
	yellow: [
		'#fffdef',
		'#fffbdd',
		'#fff5b1',
		'#ffea7f',
		'#ffdf5d',
		'#ffd33d',
		'#f9c513',
		'#dbab09',
		'#b08800',
		'#735c0f'
	],
	blackfade15: 'rgba(27, 31, 35, 0.15)',
	blackfade20: 'rgba(27, 31, 35, 0.20)',
	blackfade35: 'rgba(27, 31, 35, 0.35)',
	blackfade50: 'rgba(27, 31, 35, 0.5)',
	whitefade15: 'rgba(255, 255, 255, 0.15)',
	state: {
		error: '#d73a49',
		failure: '#d73a49',
		pending: '#dbab09',
		queued: '#dbab09',
		success: '#28a745',
		unknown: '#959da5'
	},
	button: {
		disabledColor: 'rgba(36, 41, 46, 0.4)',
		bg2: 'rgb(239, 243, 246)',
		border: 'rgba(27, 31, 35, 0.2)',
		focusShadow: 'rgba(3, 102, 214, 0.3)',
		activeBg: 'rgb(233, 236, 239)',
		hoverBg: 'rgb(230, 235, 241)',
		dangerActiveBg: 'rgb(181, 32, 44)',
		dangerFocusShadow: 'rgba(203, 36, 49, 0.4)',
		dangerHoverBgImage: 'rgb(222, 68, 80)',
		white: 'rgb(255, 255, 255)',
		outlineBlue: 'rgb(3, 102, 214)',
		outlineShadow: 'rgba(3, 102, 214, 0.4)',
		primaryBg: 'rgb(40, 167, 69)',
		primaryBgImage: 'rgb(52, 208, 88)',
		primaryHoverBg: 'rgb(38, 159, 66)',
		primaryHoverBgImage: 'rgb(47, 203, 83)',
		primaryBorder: 'rgba(27, 31, 35, 0.5)',
		primaryActiveBg: 'rgb(39, 159, 67)',
		primaryActiveShadow: 'rgba(27, 31, 35, 0.15)',
		primaryFocusShadow: 'rgba(52, 208, 88, 0.4)'
	},
	counter: {
		bg: 'rgba(27, 31, 35, 0.08)'
	},
	filterList: {
		hoverBg: '#eaecef'
	}
};

export default colors;
