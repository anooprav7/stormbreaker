import * as React from "react";
import styled from "@emotion/styled";

import { ButtonProps, ButtonSize } from "./Button";

// "small" | "medium" | "large";

const generateShapeStyles = (size: ButtonSize = "small") => {
  let height = "28px";
  let width = "28px";
  switch (size) {
    case "large":
      height = "56px";
      width = "56px";
      break;
    case "medium":
      height = "36px";
      width = "36px";
  }
  return {
    height,
    width,
    paddingTop: 0,
    paddingBottom: 0
  };
};

export const BaseButton = styled.button<ButtonProps>(({ size }) => ({
  ...generateShapeStyles(size)
}));

// export const BaseButton = styled.button({
//     ...generateShapeStyles()
// });
