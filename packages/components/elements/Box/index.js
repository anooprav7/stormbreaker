import React from 'react';
import styled from 'styled-components';
import { space, color, width, flex, order, alignSelf, fontSize } from 'styled-system';

const Box = styled('div')(
	{
		boxSizing: 'border-box'
	},
	space,
	width,
	fontSize,
	color,
	flex,
	order,
	alignSelf
);

Box.propTypes = {
	...space.propTypes,
	...width.propTypes,
	...fontSize.propTypes,
	...color.propTypes,
	...flex.propTypes,
	...order.propTypes,
	...alignSelf.propTypes
};

export default Box;
