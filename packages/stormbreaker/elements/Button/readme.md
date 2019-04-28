## Examples

### Basic button

```jsx
<Button>Simple</Button>
```

### Button Color States

```jsx
<div style={{ display: 'flex', alignItems: 'center' }}>
	<Button>Primary</Button>
	<Button colorState='secondary' ml={2}>
		Secondary
	</Button>
	<Button colorState='error' ml={2}>
		Error
	</Button>
	<Button loading ml={2}>
		Loading
	</Button>
</div>
```

### Block Button

```jsx
<Button block>Block</Button>
```

### Button Variants

```jsx
<Button variant='outline'>Outline</Button>
<Button variant='outline' ml={2} colorState="secondary">Outline</Button>
<Button variant='outline' ml={2} colorState="error">Outline</Button>
```

### Button Shape

```jsx
<Button shape='round' >Round</Button>
<Button shape='capsule' ml={2}>Capsule</Button>
<Button shape='sharp' ml={2}>Sharp</Button>
```

### Button Sizes

```jsx
<Button size='small' >Small</Button>
<Button ml={2}>Medium</Button>
<Button size='large' ml={2}>Large</Button>
```

### Icon Button

```jsx
<div style={{ display: 'flex', alignItems: 'center' }}>
	<Button icon='settings'>Icon Left</Button>
	<Button icon='settings' iconAlign='right' ml={2}>
		Icon right
	</Button>
	<Button icon='delete' colorState='error' ml={2}>
		Delete
	</Button>
	<Button icon='delete' colorState='error' variant='outline' ml={2}>
		Delete
	</Button>
	<Button icon='download' colorState='primary' variant='outline' ml={2}>
		Download
	</Button>
</div>
```
