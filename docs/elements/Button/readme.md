`import { Button } from 'stormbreaker'`

## Examples

### Basic button

```js
<Button>Save</Button>
```

### Button appearance

The `appearance` prop defines the overall visual style of the Button. You can use
this prop to indicate to the user the purpose or importance of the button, or call
their attention to it.

-   **Primary buttons** can be used to indicate an important action (for example, submitting a form).
-   **Secondary buttons** can be used for actions which are less important, an usually follow a Primary button.
-   **Success buttons** can be used to draw attention to the main call-to-action on a page.
-   **Info buttons** are used for providing addtional information about the steps or the flow of the product
-   **Danger buttons** indicate that the user should be cautious when triggering it, for example, when deleting content.
-   **Warning buttons** purpose is to inform the User about any incomplete part of the step without stopping the user from proceeding. Eg. Deficiency in questions from a subject while creating an exam

```js
<ButtonGroup>
	<Button appearance='primary'>primary</Button>
	<Button appearance='secondary'>secondary</Button>
	<Button appearance='success'>success</Button>
	<Button appearance='warning'>warning</Button>
	<Button appearance='danger'>Danger</Button>
	<Button appearance='info'>info</Button>
</ButtonGroup>
```

### Button sizes

You can create buttons of various sizes.

-   Large buttons are used for calls to action and in empty page states.
-   Medium-sized buttons are used in most situations, like in Form Actions and Dialogs.
-   Small buttons are used inside tables: in editable rows, or row actions.

```js
<ButtonGroup>
	<Button size='large'>large</Button>
	<Button>medium</Button>
	<Button size='small'>small</Button>
</ButtonGroup>
```

### Button states

You can disable a button if you don't want the user to be able to click it. You can also add a spinner
to indicate that data is loading, or a success checkmark to indicate (for example) that data has been
saved successfully. (success theme + tick icon)

```js
<ButtonGroup>
	<Button disabled>Disabled</Button>
	<Button loading>Loading</Button>
</ButtonGroup>
```

### Icon buttons

Icon buttons work well in compact spaces. You can pick name of `icon` from [Components/Icon](#/Components/Icon)

```js
<ButtonGroup>
	<Button variant='link' icon='copy' />
	<Button icon='copy' />
</ButtonGroup>
```

### Button variants

You can set the `variant` property to change the style of the button. This can be used to set the mood to a more gleeful feel as opposed to a strict high intensity mood.

```js
<ButtonGroup>
	<Button variant='link'>Link</Button>
	<Button variant='outline'>Outline</Button>
	<Button variant='fill'>Fill</Button>
</ButtonGroup>
```
