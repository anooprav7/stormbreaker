### What ? Why ?

##### What better way to learn than to create one ? With this thought, i started building a component library.

Objectives

1. To analyse how some of the most famous component libraries are made
2. To understand the stack used for creating them and trying to undetstand why ?
3. Maintaining a high degree of reusability, but keeping in mind not to be too generalised.
4. Theme based, but UI appearence to be controlled by a centralised config. (Eg. Company theme)
5. Responsive
6. Simple to read and understand
7. Automate as much as possible (Docs generation). More Dev.

Ultimate test will be when i will be using it in my personal projects 😄

### Installation

Using yarn

```md
yarn add stormbreaker
```

Using npm

```md
npm install --save stormbreaker
```

### My design token

Using yarn

```md
yarn add @anooprav7/token
```

Using npm

```md
npm install --save @anooprav7/token
```

### Notes (How?)

1. Monorepo using yarn workspaces
2. [styled-components](https://www.styled-components.com/) for styling
3. Theme injection (ThemeProvider) for behaviour & responsiveness (similar to [primer](https://primer.style/components/docs/primer-theme) using [styled-system](https://styled-system.com/getting-started/))
4. Documentation using [react-styleguidist](https://react-styleguidist.js.org/)
5. Docs hosted on [netlify](https://www.netlify.com/)
6. @anooprav7/token

### Inspiration

1. [primer](https://github.com/primer/components) => Majorly for the structure and idea of usage of styled-system
2. [cosmos](https://github.com/auth0/cosmos) => Documentation style , props inspiration, Icons etc
3. [leafui](https://github.com/treebohotels/leaf-ui) => Coding style for calculating style attributes according to props
4. [rebass](https://rebassjs.org/) => Flex and Box methadology
