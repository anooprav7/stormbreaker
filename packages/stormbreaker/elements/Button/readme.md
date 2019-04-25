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
```

### Button Shape

```jsx
<Button shape='round' >Round</Button>
<Button shape='capsule' ml={2}>Capsule</Button>
<Button shape='sharp' ml={2}>Sharp</Button>
```
