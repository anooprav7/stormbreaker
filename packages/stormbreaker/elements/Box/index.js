import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space, color, width, flex, order, alignSelf, fontSize } from 'styled-system';

const StyledBox = styled('div')(
	{
		boxSizing: 'border-box'
	},
	space,
	width,
	order,
	alignSelf,
	flex
);

function Box(props) {
	const { children, remainingProps } = props;
	console.log('box - ', space.propTypes);
	return <StyledBox {...remainingProps}>{children}</StyledBox>;
}

Box.propTypes = {
	/** One of the space properties of styled-system */
	...space.propTypes,

	/** One of the width properties of styled-system */
	...width.propTypes,

	order: PropTypes.number,
	alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
	flex: PropTypes.string
};
Box.defaultProps = {
	order: 0
};

export default Box;
