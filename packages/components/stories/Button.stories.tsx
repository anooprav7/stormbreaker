import * as React from "react"
import { Button } from "../src";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "Components/Button",
  component: Button,
  // decorators: [
  //   (Story: any) => (
  //     <div>
  //       <Story />
  //     </div>
  //   ),
  // ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: "Click Me"
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   children: "Click Me"
// };

export const Sizes = () => (
  <React.Fragment>
    <Button>Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </React.Fragment>
)

// export const basic = () => (
//     <React.Fragment>
//     <Button>Button</Button>
//     <Button size="large">Button</Button>
//     </React.Fragment>
// )



