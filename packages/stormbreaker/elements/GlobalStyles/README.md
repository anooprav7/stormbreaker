### GlobalStyles

```jsx static
<ThemeProvider theme={theme}>
	<Fragment>
		<GlobalStyles />
		<Navigation />
	</Fragment>
</ThemeProvider>
```

```html static
<pre>
{
    body {
        font-family: $ {
            props => props.theme.fonts.normal
        }
    }
}
</pre>
```
