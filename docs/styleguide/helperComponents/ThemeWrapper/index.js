import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colors, spacing } from '@anooprav7/tokens';
// import theme from 'where/your/theme/lives'

const theme = {
	baseColor: '#9f9f9f'
};

export default class ThemeWrapper extends Component {
	render() {
		return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
	}
}
