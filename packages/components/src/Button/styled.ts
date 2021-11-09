import * as React from "react";
import styled from "@emotion/styled";

import { ButtonProps, ButtonSize, ButtonVariant } from "./Button";

const generatePolygonFill = (triangleSideLength = 12) => {
  return `polygon(0 0,calc(100% - ${triangleSideLength}px) 0,100% ${triangleSideLength}px,100% 100%, ${triangleSideLength}px 100%,0 calc(100% - ${triangleSideLength}px))`;
};

const generatePolygonOutline = (triangleSideLength = 12, borderWidth = 2) => {
  const totalGap = triangleSideLength + borderWidth / 2;
  return `polygon(0 0,calc(100% - ${triangleSideLength}px) 0,100% ${triangleSideLength}px,100% 100%, ${triangleSideLength}px 100%,0 calc(100% - ${triangleSideLength}px), 0 ${borderWidth}px,${borderWidth}px ${borderWidth}px,${borderWidth}px calc(100% - ${totalGap}px),${totalGap}px calc(100% - ${borderWidth}px),calc(100% - ${borderWidth}px) calc(100% - ${borderWidth}px),calc(100% - ${borderWidth}px) ${totalGap}px,calc(100% - ${totalGap}px) ${borderWidth}px,0 ${borderWidth}px)`;
};

const generateShapeStyles = (size: ButtonSize = "medium") => {
  // small
  let height = 24;
  let padding = 16;

  switch (size) {
    case "large":
      height = 52;
      padding = 32;
      break;
    case "medium":
      height = 36;
      padding = 24;
  }

  return `
    height: ${height}px;
    padding: 0 ${padding}px;
    clip-path: ${generatePolygonFill()};
  `;
};

const generateVariantStyles = (
  size: ButtonSize = "medium",
  variant: ButtonVariant = "primary",
  theme: any
) => {
  // "primary" - default | "secondary" | "success" | "error" | "warning";

  let bgColor = theme.colors.primary["500"];
  let textColor = theme.colors.white;

  // bg, color
  switch (variant) {
    case "secondary":
      textColor = theme.colors.secondary["500"];
      bgColor = "transparent";
      break;
    case "success":
      bgColor = theme.colors.success["500"];
      textColor = theme.colors.black;
      break;
    case "error":
      bgColor = theme.colors.error["600"];
      textColor = theme.colors.white;
      break;
    case "warning":
      bgColor = theme.colors.warning["500"];
      textColor = theme.colors.white;
  }

  return `
    background-color: ${bgColor};
    color: ${textColor};
  `;
};

const generateBorderStyles = (
  variant: ButtonVariant = "primary",
  theme: any
) => {
  let bgColor = "transparent";

  if(variant === "secondary") {
    // bgColor = theme.colors.primary["500"];
    bgColor = theme.colors.secondary["500"];
  }

  return `
    background-color: ${bgColor};
    clip-path: ${generatePolygonOutline()};
  `;
};

export const BaseButton = styled.button<ButtonProps>`
  position: relative;
  letter-spacing: 1px;
  outline: none;
  display: inline-block;
  text-decoration: none;
  border: none;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  z-index: 1;
  cursor: pointer;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,Arial,sans-serif;

  ${({ size }) => generateShapeStyles(size)};
  ${({ size, variant, theme }) => generateVariantStyles(size, variant, theme)};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    z-index: -1;
    ${({ variant, theme }) => generateBorderStyles(variant, theme)};
  }
`;
