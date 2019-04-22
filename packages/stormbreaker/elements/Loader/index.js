import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const spWaveAf = keyframes` 
	from { transform: scale(0.25,0.25); opacity: 0; }
	to { transform: scale(0.5,0.5); opacity: 1; }
`;

const spWaveBe = keyframes`
	from { transform: scale(0.5,0.5); opacity: 1; }
	to { transform: scale(1,1); opacity: 0; }
`;

const sizes = {
	small: 16,
	medium: 32,
	large: 64
};

// https://codepen.io/bernethe/pen/dorozd/
const StyledLoader = styled.div`
	width: ${props => sizes[props.size] || 32}px;
	height: ${props => sizes[props.size] || 32}px;
	position: relative;
	&:before {
		transform: scale(1, 1);
		opacity: 1;
		animation: ${spWaveBe} 0.6s infinite linear;
	}
	&:after {
		transform: scale(0, 0);
		opacity: 0;
		animation: ${spWaveAf} 0.6s infinite linear;
	}
	&:before,
	&:after {
		content: '';
		border: 1px #333 solid;
		border-radius: 50%;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0px;
	}
`;

export default function Loader(props) {
	return <StyledLoader {...props} />;
}

Loader.propTypes = {
	/** Size of the loader */
	size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Loader.defaultProps = {
	size: 'medium'
};

/*
const spin = keyframes` 
    from {
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
  }`;
// https://codepen.io/DanGasson/pen/KEgNqy?page=5
const Loader = styled.div`
	position: relative;
	width: 79px;
	height: 79px;
	border-top: 5px solid rgba(0, 0, 0, 1);
	border-right: 5px solid transparent;
	border-radius: 50%;
	animation: ${spin} 1s linear 0s infinite;
`;
*/
