import React from 'react';
import { colors, theme } from '@anooprav7/token';
import ColorItem from './ColorItem';
import styled from 'styled-components';

const Title = styled.h4`
	font-size: 25px;
	font-weight: 300;
`;

const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export default function ColorRow(props) {
	const finalScreen = Object.keys(colors).map(item => {
		return (
			<OuterContainer key={`${item}`}>
				<Title>{item}</Title>
				<div>
					{Object.keys(colors[item]).map(colorHex => {
						// return <span>{`${colorHex} - ${colors[item][colorHex]}`}</span>;
						return <ColorItem key={`${colorHex}`} color={colors[item][colorHex]} name={colorHex} />;
					})}
				</div>
			</OuterContainer>
		);
	});
	return finalScreen;
}
