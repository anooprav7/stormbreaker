import { ThemeProvider } from '@emotion/react'
// import { withThemes } from "@react-theming/storybook-addon"

import { theme } from "../packages/components/src/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

// export const decorators = [
//   withThemes(ThemeProvider, theme),
// ]