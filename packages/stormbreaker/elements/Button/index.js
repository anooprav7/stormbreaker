import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../Loader';

const StyledButton = styled.button`
	background: #fff;
	padding: 10px 25px;
`;

export default function Button(props) {
	const { loading } = props;
	return <StyledButton>{loading ? <Loader size='small' /> : props.children}</StyledButton>;
}

Button.propTypes = {
	/** The size of the button */
	size: PropTypes.oneOf(['default', 'large', 'small']),

	/** Kind of Button */
	variant: PropTypes.oneOf(['fill', 'outline']),

	/** Shape of button */
	shape: PropTypes.oneOf(['capsule', 'sharp', 'round']),

	/** Fill to the whole width of the container */
	block: PropTypes.bool,

	/** icon to be used  */
	icon: PropTypes.string, //  TODO : add the array of icons supported here

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
	size: 'default',
	appearance: 'default',
	variant: 'fill',
	icon: null,
	iconAlign: 'left',
	disabled: false,
	loading: false
	// success: false
};
