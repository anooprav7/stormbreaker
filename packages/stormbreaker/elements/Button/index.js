import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../RippleLoader';
import { ICON_NAMES } from '../Icon';
import { space } from 'styled-system';

const styles = {
	width(props) {
		if (props.block) return '100%';
		return 'auto';
	},
	color(props) {
		if (props.variant === 'outline') return props.theme.colors[props.colorState].light;
		return props.theme.colors[props.colorState].contrastText || 'rgb(68, 199, 244)';
	},
	opacity(props) {
		return props.loading ? '0.6' : '1';
	},
	background(props) {
		if (props.variant === 'outline') return '#fff';
		return props.theme.colors[props.colorState].light || '#fff';
	},
	borderColor(props) {
		return props.theme.colors[props.colorState].light || rgb(68, 199, 244);
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
	}
};

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

	min-width: 110px;
	min-height: 40px;

	text-transform: uppercase;

	letter-spacing: 1px;
	font-size: 12px;
	font-weight: 500;
	color: ${styles.color};

	opacity: ${styles.opacity};
	cursor: pointer;
	background: ${styles.background};
	border-width: 1px;
	border-style: solid;
	border-color: ${styles.borderColor} };

	border-radius: ${styles.borderRadius};
	padding: 0px 21px;
	${space}
	&:focus {
		outline: none;
	}
`;

export default function Button(props) {
	const { loading } = props;
	//console.log(ICON_NAMES);
	return (
		<StyledButton {...props}>
			{loading ? <Loader size='medium' color='#fff' mr={2} /> : <span>{props.children}</span>}
		</StyledButton>
	);
}

Button.propTypes = {
	/** Purpose of the button so that the correct color scheme can be applied  */
	colorState: PropTypes.oneOf(['primary', 'secondary']),

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
