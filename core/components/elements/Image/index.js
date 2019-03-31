import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, space, width } from 'styled-system';

export default function Image(props) {
	return <div>I am Image</div>;
}

const Image = styled.img`
	${space}
	${width}
`;

Image.propTypes = {
	/** URL of the image */
	src: PropTypes.string,
	/** Alt text is mandatory, please read the accessibility section */
	alt: PropTypes.string,
	/** Image height, can be any length unit, absolute or relative */
	height: PropTypes.string,
	/** Image width, can be any length unit, absolute or relative */
	width: PropTypes.string,
	/** Sets how the content of the image is been resized to fit its container. */
	fit: PropTypes.oneOf(['none', 'contain', 'cover', 'scale-down']),
	/** Sets the image width to auto */
	disableResponsive: PropTypes.bool
};
Image.defaultProps = {
	alt: null,
	width: null,
	height: null,
	fit: 'none'
};
