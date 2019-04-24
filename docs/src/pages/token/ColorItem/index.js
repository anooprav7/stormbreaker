import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	width: 200px;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
`;

const ColoredCircle = styled.div`
	width: 125px;
	height: 125px;
	background: ${props => {
		if (!props.color && !props.gradient) return 'violet';
		return props.color ? props.color : props.gradient;
	}};
	border-radius: ${props => (props.gradient ? '0%' : '50%')};
	margin: 16px;
`;
const Title = styled.strong`
	display: block;
	text-align: center;
`;
const SubTitle = styled.span`
	color: #6e767f;
`;

export default function ColorTile(props) {
	return (
		<Wrapper>
			<ColoredCircle color={props.color} gradient={props.gradient} />
			<Title>{props.name}</Title>
			<SubTitle>{props.color ? props.color : props.gradient}</SubTitle>
		</Wrapper>
	);
}

ColorTile.propTypes = {
	color: PropTypes.string,
	gradient: PropTypes.string,
	name: PropTypes.string
};
