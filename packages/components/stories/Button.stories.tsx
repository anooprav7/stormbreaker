/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
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
  //       <Story />X
  //     </div>
  //   ),
  // ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "medium",
  children: "Search"
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   children: "Click Me"
// };

const SizesContainer = styled.div`
  display: inline-flex;
  /* flex-direction: column; */
  width: 500px;
  justify-content: space-between;
  align-items: flex-start;
`;
const gap = 12;
export const Sizes = () => (
  <SizesContainer>
    <Button size="small">SMALL</Button>
    <Button size="medium">MEDIUM</Button>
    <Button size="large">LARGE</Button>
  </SizesContainer>
);

// "primary" - default | "secondary" | "success" | "error" | "warning";

export const Variants = () => (
  <div>
    <Button variant="primary" css={css`margin-right: ${gap}px;`}>PRIMARY</Button>
    <Button variant="secondary" css={css`margin-right: ${gap}px;`}>SECONDARY</Button>
    <Button variant="success" css={css`margin-right: ${gap}px;`}>SUCCESS</Button>
    <Button variant="error" css={css`margin-right: ${gap}px;`}>ERROR</Button>
    <Button variant="warning">WARNING</Button>
  </div>
);

// export const basic = () => (
//     <React.Fragment>
//     <Button>Button</Button>
//     <Button size="large">Button</Button>
//     </React.Fragment>
// )
