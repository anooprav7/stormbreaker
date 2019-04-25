import React from 'react';
import styled from 'styled-components';
import { icons } from './icons.json';
import PropTypes from 'prop-types';
import { space } from 'styled-system';

const styles = {
	color(props) {
		if (props.colorState) {
			console.log(props.theme.colors[props.colorState].contrastText);
			return props.theme.colors[props.colorState].contrastText || 'rgb(68, 199, 244)';
		} else if (props.color) {
			return props.color;
		} else return '#FFFFFF';
	}
};

export default function Icon(props) {
	// If the icon name isn't found, show a question mark instead.
	const icon = icons[props.name] || icons.home;

	// Use an icon name from tokens, fallback to hexcode (without validation)
	const { colorState, color } = props;

	return (
		<Icon.Element {...props}>
			<Image
				width={props.size}
				height={props.size}
				viewBox={`0 0 ${icon.width} ${icon.height}`}
				color={color}
				colorState={colorState}
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
	${space}
`;

const Image = styled.svg`
	display: inline-block;
	vertical-align: middle;
	line-height: 1;
	width: ${imageProps => imageProps.width}px;
	height: ${imageProps => imageProps.height}px;
	path {
		fill: ${styles.color};
	}
`;

const ICON_NAMES = Object.keys(icons);
export { ICON_NAMES };
Icon.propTypes = {
	/** Icon name */
	name: PropTypes.oneOf(ICON_NAMES).isRequired,
	/** Icon size */
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/** Icon foreground color */
	color: PropTypes.string,

	/** Color state - Priority over color */
	colorState: PropTypes.string
};

Icon.defaultProps = {
	size: 20,
	color: '#000'
};
