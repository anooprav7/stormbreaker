import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { space } from 'styled-system';

const DURATION_IN_SECONDS = 0.6;

const spin = keyframes`
    to { transform: rotate(360deg); }
`;

const sizes = {
	small: 16,
	medium: 24,
	large: 36
};

// https://codepen.io/bernethe/pen/dorozd/
const StyledSpinner = styled.div`
	display: inline-block;
	width: ${props => sizes[props.size] || sizes.medium}px;
	height: ${props => sizes[props.size] || sizes.medium}px;
	border: 2px solid #d0d0d0;
	border-radius: 50%;
	border-top-color: #414a4c;
	animation: ${spin} 1s linear infinite;
`;

export default function Spinner(props) {
	return <StyledSpinner {...props} />;
}

Spinner.propTypes = {
	/** Size of the loader */
	size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Spinner.defaultProps = {
	size: 'medium'
};
