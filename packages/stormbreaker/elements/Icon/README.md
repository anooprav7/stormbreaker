```js
<Icon name='star' />
```

### Available Icons

```js noeditor
const iconJSON = require('./icons.json').icons;

<div style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center' }}>
	{' '}
	{Object.keys(iconJSON).map(item => (
		<div
			key={item}
			style={{
				width: '150px',
				display: 'inline-flex',
				margin: 5,
				textAlign: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			{' '}
			<Icon name={item} /> <span>{item}</span>{' '}
		</div>
	))}{' '}
</div>;
```
