import React from 'react';
import styled from 'styled-components';
import { icons } from './icons.json';
import PropTypes from 'prop-types';

export default function Icon(props) {
	// If the icon name isn't found, show a question mark instead.
	const icon = icons[props.name] || icons.home;

	// Use an icon name from tokens, fallback to hexcode (without validation)
	const color = props.color;

	return (
		<Icon.Element {...props}>
			<Image
				width={props.size}
				height={props.size}
				viewBox={`0 0 ${icon.width} ${icon.height}`}
				color={color}
			>
				{icon.paths.map((path, index) => (
					<path key={index} d={path} />
				))}
			</Image>
		</Icon.Element>
	);
}

Icon.Element = styled.i`
	display: inline-block;
	line-height: 1;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
`;

const Image = styled.svg`
	display: inline-block;
	vertical-align: middle;
	line-height: 1;
	width: ${imageProps => imageProps.width}px;
	height: ${imageProps => imageProps.height}px;
	path {
		fill: ${imageProps => imageProps.color};
	}
`;

const ICON_NAMES = Object.keys(icons);

Icon.propTypes = {
	/** Icon name */
	name: PropTypes.oneOf(ICON_NAMES).isRequired,
	/** Icon size */
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/** Icon foreground color */
	color: PropTypes.string
};

Icon.defaultProps = {
	size: 20,
	color: '#000'
};
