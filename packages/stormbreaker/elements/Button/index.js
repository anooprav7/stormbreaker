import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../RippleLoader';
import { ICON_NAMES } from '../Icon';
import { space } from 'styled-system';

const StyledButton = styled.button`
	background: #fff;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	min-width: 110px;
	min-height: 40px;

	text-transform: uppercase;

	letter-spacing: 1px;
	font-size: 12px;
	font-weight: 500;
	color: rgb(250, 250, 250);

	opacity: ${props => (props.loading ? '0.6' : '1')};
	cursor: pointer;
	background: rgb(68, 199, 244);
	border-width: 1px;
	border-style: solid;
	border-color: rgb(68, 199, 244);
	border-image: initial;
	border-radius: 3px;
	padding: 0px 16px;
	${space}
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
	type: 'button'
	// success: false
};
