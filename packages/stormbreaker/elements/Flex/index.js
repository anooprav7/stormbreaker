import React from 'react';
import Box from '../Box';
import { flexWrap, flexDirection, alignItems, justifyContent, alignContent } from 'styled-system';
import styled from 'styled-components';

const StyledFlex = styled(Box)(
	{
		display: 'flex'
	},
	flexWrap,
	flexDirection,
	alignItems,
	alignContent,
	justifyContent
);

function Flex(props) {
	const { children, remainingProps } = props;
	return <StyledFlex {...remainingProps}>{children}</StyledFlex>;
}

export default Flex;

Flex.propTypes = {
	...flexWrap.propTypes,
	...flexDirection.propTypes,
	...alignItems.propTypes,
	...justifyContent.propTypes,
	...alignContent.propTypes
};
