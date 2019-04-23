import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../RippleLoader';
import { ICON_NAMES } from '../Icon';

const StyledButton = styled.button`
	background: #fff;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	min-width: 140px;
	border-radius: 3px;
	padding: 12px 0px;
`;

export default function Button(props) {
	const { loading } = props;
	//console.log(ICON_NAMES);
	return (
		<StyledButton>
			{loading && <Loader size='small' mr={2} />} <span>{props.children}</span>
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
