import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { space } from 'styled-system';

const DURATION_IN_SECONDS = 1;

const spin = keyframes`
    to { transform: rotate(360deg); }
`;

const sizes = {
	small: 14,
	medium: 24,
	large: 36
};
const colorState = {
	dark: {
		primary: 'rgba(0, 0, 0, 0.4);',
		secondary: 'rgba(0, 0, 0, 0.8);'
	},
	light: {
		primary: '#414a4c',
		secondary: '#d0d0d0'
	}
};

// https://codepen.io/bernethe/pen/dorozd/
const StyledSpinner = styled.div`
	display: inline-block;
	width: ${props => props.size || sizes.medium};
	height: ${props => props.size || sizes.medium};
	border: 2px solid #d0d0d0;
	border-radius: 50%;
	border-top-color: #414a4c;
	animation: ${spin} ${DURATION_IN_SECONDS}s linear infinite;
	box-sizing: border-box;
	${space}
`;

export default function Spinner(props) {
	return <StyledSpinner {...props} />;
}

Spinner.propTypes = {
	/** Size of the loader */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/** Color of the Ripple lines */
	colorState: PropTypes.oneOf(['dark', 'light'])
};

Spinner.defaultProps = {
	size: 'medium',
	colorState: 'dark'
};
