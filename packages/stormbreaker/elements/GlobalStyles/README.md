### GlobalStyles

```md
<pre>
	<ThemeProvider theme={theme}>
		<Fragment>
			<GlobalStyles />
			{this.props.children}
		</Fragment>
	</ThemeProvider>
</pre>
```

```jsx noeditor
const k = `{body { font-family: ${props => props.theme.fonts.normal}} }`;
<div>{k}</div>;
```
