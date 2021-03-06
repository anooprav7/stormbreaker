const React = require('react');
// const { name, version } = require('../../../package.json');
const { version } = require('stormbreaker/package.json');

const capitalize = string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const Logo = () =>
	React.createElement(
		'a',
		{
			className: 'rsg-logo',
			href: 'https://github.com/anooprav7',
			target: '_blank'
		},
		React.createElement('span', { className: 'rsg-logo-name' }, 'Stormbreaker'),
		React.createElement('em', { className: 'rsg-logo-version' }, `v${version}`)
	);

module.exports = Logo;
