import * as React from "react";
import styled from "@emotion/styled";

import { ButtonProps, ButtonSize } from "./Button";

// variant - primary, secondary, success, error, info, warning

const generatePolygonFill = (triangleSideLength = 12) => {
  return `polygon(0 0,calc(100% - ${triangleSideLength}px) 0,100% ${triangleSideLength}px,100% 100%, ${triangleSideLength}px 100%,0 calc(100% - ${triangleSideLength}px))`;
};

const generatePolygonOutline = (triangleSideLength = 12, borderWidth = 2) => {
  const totalGap = triangleSideLength + borderWidth / 2;
  return `polygon(0 0,calc(100% - ${triangleSideLength}px) 0,100% ${triangleSideLength}px,100% 100%, ${triangleSideLength}px 100%,0 calc(100% - ${triangleSideLength}px), 0 ${borderWidth}px,${borderWidth}px ${borderWidth}px,${borderWidth}px calc(100% - ${totalGap}px),${totalGap}px calc(100% - ${borderWidth}px),calc(100% - ${borderWidth}px) calc(100% - ${borderWidth}px),calc(100% - ${borderWidth}px) ${totalGap}px,calc(100% - ${totalGap}px) ${borderWidth}px,0 ${borderWidth}px)`;
};

const generateShapeStyles = (size: ButtonSize) => {
  let height = "24px";
  switch (size) {
    case "large":
      height = "52px";
      break;
    case "medium":
      height = "36px";
  }
  // return {
  //   height,
  //   width,
  //   paddingTop: 0,
  //   paddingBottom: 0
  // };
  return `
    height: ${height};
  `;
};

const generatePaddingStyles = (size: ButtonSize) => {
  let padding = 16;
  switch (size) {
    case "large":
      padding = 32;
      break;
    case "medium":
      padding = 24;
  }
  // return {
  //   height,
  //   width,
  //   paddingTop: 0,
  //   paddingBottom: 0
  // };
  return `
  padding: 0 ${padding}px;
  `;
};

const generateVariantStyles = (size: ButtonSize, theme: any) => {
  const borderColor = theme.colors.blue["500"];
  return `background-color: ${borderColor}`;
};

export const BaseButton = styled.button<ButtonProps>`
  position: relative;
  letter-spacing: 1px;
  outline: none;
  display: inline-block;
  text-decoration: none;
  /* background: transparent; */
  background: #ff003c;
  color: white;
  border: none;
  text-transform: capitalize;
  font-size: 13px;
  clip-path: ${generatePolygonFill()};
  z-index: 1;
  cursor: pointer;

  ${({ size = "medium" }) => generateShapeStyles(size)};
  ${({ size = "medium" }) => generatePaddingStyles(size)};
  ${(props) => {
    console.log(props);
    return "";
  }};

&::after {
    content: "";
    clip-path: ${generatePolygonOutline()};
    /* background-color: green; */
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    z-index: -1;
    /* ${({ size, theme }) => generateVariantStyles(size, theme)}; */
  }
`;
