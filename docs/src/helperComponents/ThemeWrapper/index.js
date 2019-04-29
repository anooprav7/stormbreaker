import React, { Fragment, Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '@anooprav7/token';
import { GlobalStyles } from 'stormbreaker';

export default class ThemeWrapper extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Fragment>
					<GlobalStyles />
					{this.props.children}
				</Fragment>
			</ThemeProvider>
		);
	}
}
