import * as React from "react";
import { Button } from "../src";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "@emotion/styled";

export default {
  title: "Components/Button",
  component: Button
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
  size: "medium",
  children: "DELETE"
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   children: "Click Me"
// };

const SizesContainer = styled.div`
  display: inline-flex;
  /* flex-direction: column; */
  width: 300px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Sizes = () => (
  <SizesContainer>
    <Button size="small">Small</Button>
    <Button size="medium">MEDIUM</Button>
    <Button size="large">Large</Button>
  </SizesContainer>
);

// export const basic = () => (
//     <React.Fragment>
//     <Button>Button</Button>
//     <Button size="large">Button</Button>
//     </React.Fragment>
// )
