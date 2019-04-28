import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../RippleLoader';
import { ICON_NAMES } from '../Icon';
import { space, width, fontSize } from 'styled-system';
import Icon from '../Icon';
const sizes = {
	small: {
		minWidth: '36px',
		minHeight: '24px',
		padding: '0px 8px',
		fontSize: '10px'
	},
	medium: {
		minWidth: '96px',
		minHeight: '40px',
		padding: '0px 16px',
		fontSize: '12px'
	},
	large: {
		minWidth: '96px',
		minHeight: '56px',
		padding: '0px 32px',
		fontSize: '16px'
	}
};
const styles = {
	width(props) {
		if (props.block) return '100%';
		return 'auto';
	},
	minWidth(props) {
		return sizes[props.size].minWidth || sizes['medium'].minWidth;
	},
	minHeight(props) {
		return sizes[props.size].minHeight || sizes['medium'].minHeight;
	},
	fontSize(props) {
		return sizes[props.size].fontSize || sizes['medium'].fontSize;
	},
	color(props) {
		if (props.variant === 'outline') return props.theme.colors[props.colorState].main;
		return props.theme.colors[props.colorState].contrastText || 'rgb(68, 199, 244)';
	},
	opacity(props) {
		return props.loading ? '0.6' : '1';
	},
	background(props) {
		if (props.variant === 'outline') return '#fff';
		return props.theme.colors[props.colorState].main || '#fff';
	},
	borderColor(props) {
		if (props.variant === 'outline') return props.theme.colors[props.colorState].main || rgb(68, 199, 244);
		return 'transparent';
	},
	borderRadius(props) {
		switch (props.shape) {
			case 'sharp':
				return '0px';
			case 'capsule':
				return '80px';
			default:
				return '4px';
		}
	},
	padding(props) {
		return sizes[props.size].padding || sizes['medium'].padding;
	},
	hover: {
		background(props) {
			if (props.variant === 'outline')
				// return !props.loading && (props.theme.colors[props.colorState].light || '#fff');
				return !props.loading && 'rgba(0, 0, 0, 0.04)';
			return !props.loading && (props.theme.colors[props.colorState].dark || '#fff');
		},
		color(props) {
			//if (props.variant === 'outline') return props.theme.colors[props.colorState].contrastText || '#fff';
		},
		borderColor(props) {
			if (props.variant === 'outline') return props.theme.colors[props.colorState].light || rgb(68, 199, 244);
			return 'transparent';
		}
	}
};
//min-width: ${styles.minWidth};
const StyledButton = styled(
	({ colorState, size, variant, shape, block, icon, iconAlign, href, disabled, loading, type, ...props }) => (
		<button {...props} />
	)
)`
	background: #fff;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
    width: ${styles.width};

    min-width: ${styles.minWidth};
	min-height: ${styles.minHeight};

	text-transform: uppercase;

	letter-spacing: 1px;
	font-size: ${styles.fontSize};
	font-weight: 500;
	color: ${styles.color};

	opacity: ${styles.opacity};
	cursor: pointer;
	background: ${styles.background};
	border-width: 1px;
	border-style: solid;
	border-color: ${styles.borderColor} };

	border-radius: ${styles.borderRadius};
	padding: ${styles.padding};
	${space}
	&:focus {
		outline: none;
    }
    &:hover {
        background: ${styles.hover.background};
        transition: background .6s ease;
        color: ${styles.hover.color}
        border-color: ${styles.hover.borderColor} };
    }
`;

export default function Button(props) {
	const { loading, icon, iconAlign, children, colorState, variant, href, disabled } = props;
	let content = [];
	if (loading) {
		content.push(<Loader size='medium' color='#fff' mr={2} />);
	} else if (icon) {
		let iconColorStateInvert = false;
		if (variant === 'outline') iconColorStateInvert = true;
		if (iconAlign === 'right') {
			content.push(<span>{children}</span>);
			content.push(<Icon colorState={colorState} invert={iconColorStateInvert} ml={2} name={icon} />);
		} else {
			content.push(<Icon colorState={colorState} invert={iconColorStateInvert} name={icon} mr={2} />);
			content.push(<span>{children}</span>);
		}
	} else {
		content.push(<span>{children}</span>);
	}
	return <StyledButton {...props}>{content}</StyledButton>;
}

/** TODOS
 *      Remove opacity problem while loading not disabled
 *      While Loading show text
 *      Link button
 *      Sizes implementation
 */

Button.propTypes = {
	/** Purpose of the button so that the correct color scheme can be applied  */
	colorState: PropTypes.oneOf(['primary', 'secondary', 'error']),

	/** The size of the button */
	size: PropTypes.oneOf(['small', 'medium', 'large']),

	/** Kind of Button */
	variant: PropTypes.oneOf(['fill', 'outline']),

	/** Shape of button */
	shape: PropTypes.oneOf(['capsule', 'sharp', 'round']),

	/** Fill to the whole width of the container */
	block: PropTypes.bool,

	/** icon to be used  */
	icon: PropTypes.oneOf(ICON_NAMES), //  TODO : add the array of icons supported here

	/** Which side of the Button Text should be the icon horizontally */
	iconAlign: PropTypes.oneOf(['left', 'right']),

	/** The URL to navigate to when the button is clicked */
	href: PropTypes.string,

	/** Disables the button, reduces the opacity  */
	disabled: PropTypes.bool,

	/** Loading state when in pending state */
	loading: PropTypes.bool,

	/** Type of button */
	type: PropTypes.oneOf(['submit', 'button', 'reset'])

	/** Handler to be called when the button is clicked */
	// onClick: PropTypes.func
};

Button.defaultProps = {
	size: 'medium',
	variant: 'fill',
	shape: 'round',
	block: false,
	icon: null,
	iconAlign: 'left',
	disabled: false,
	loading: false,
	type: 'button',
	colorState: 'primary'
	// success: false
};
