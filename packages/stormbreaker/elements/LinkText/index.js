import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
	font-size: 14px;
	text-decoration: none;
`;

function LinkText(props) {
	const { newTab, children, ...remainingProps } = props;
	if (newTab && !remainingProps.target) remainingProps.target = '_blank';
	return <StyledLink {...remainingProps}>{children}</StyledLink>;
}

LinkText.propTypes = {
	/** Standard anchor tag href */
	href: PropTypes.string.isRequired,

	/** Open the href link in a new tab or not */
	newTab: PropTypes.bool
};

LinkText.defaultProps = {
	newTab: false
};

export default LinkText;
