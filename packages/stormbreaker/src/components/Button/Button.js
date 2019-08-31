import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
	return <div>Button Component here</div>;
}

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
	icon: PropTypes.oneOf(['button']), //  TODO : add the array of icons supported here

	/** Which side of the Button Text should be the icon horizontally */
	iconAlign: PropTypes.oneOf(['left', 'right']),

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
