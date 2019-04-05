import React from 'react';
import Box from '../Box';
import { flexWrap, flexDirection, alignItems, justifyContent } from 'styled-system';
import styled from 'styled-components';

const Flex = styled(Box)(
	{
		display: 'flex'
	},
	flexWrap,
	flexDirection,
	alignItems,
	justifyContent
);

export default Flex;

Flex.propTypes = {
	...flexWrap.propTypes,
	...flexDirection.propTypes,
	...alignItems.propTypes,
	...justifyContent.propTypes
};
