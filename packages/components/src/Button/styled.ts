import * as React from "react";
import styled from "@emotion/styled";

import { ButtonProps, ButtonSize } from "./Button";

// "small" | "medium" | "large";

const generatePolygonArea = (triangleSideLength = 10) => {
  return (
    `polygon(0 0,calc(100% - ${triangleSideLength}px) 0,100% ${triangleSideLength}px,100% 100%, ${triangleSideLength}px 100%,0 calc(100% - ${triangleSideLength}px))`
  );
}

const generatePolygonOutline = (triangleSideLength = 10, borderWidth = 2) => {
  const totalGap = triangleSideLength + (borderWidth/2);
  return (
    `polygon(0 0,calc(100% - ${triangleSideLength}px) 0,100% ${triangleSideLength}px,100% 100%, ${triangleSideLength}px 100%,0 calc(100% - ${triangleSideLength}px), 0 ${borderWidth}px,${borderWidth}px ${borderWidth}px,${borderWidth}px calc(100% - ${totalGap}px),${totalGap}px calc(100% - ${borderWidth}px),calc(100% - ${borderWidth}px) calc(100% - ${borderWidth}px),calc(100% - ${borderWidth}px) ${totalGap}px,calc(100% - ${totalGap}px) ${borderWidth}px,0 ${borderWidth}px)`
  )
}

const generateShapeStyles = (size: ButtonSize = "small") => {
  let height = "28px";
  switch (size) {
    case "large":
      height = "40px";
      break;
    case "medium":
      height = "34px";
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

const generatePaddingStyles = (size: ButtonSize = "small") => {
  let padding = 12;
  switch (size) {
    case "large":
      padding = 20
      break;
    case "medium":
      padding = 16;
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

export const BaseButton = styled.button<ButtonProps>`
  position: relative;
	letter-spacing: 1px;
	outline: none;
  display: inline-block;
	text-decoration: none;
  /* background: black; */
  border: none;
  /* clip-path: polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%); */
  clip-path: polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%, 10px 100%,0 calc(100% - 10px));
  z-index: 1;

  ${({ size }) => generateShapeStyles(size)}
  ${({ size }) => generatePaddingStyles(size)}

  /* &::before {
    content: "";
    clip-path: polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%);
    position: absolute;
    background-color: grey;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  } */

  &::after {
    content: "";
    /* clip-path: polygon(
      0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,
      0 1.5px,1.5px 1.5px,1.5px calc(100% - 1.5px),calc(100% - 11.5px) calc(100% - 1.5px),calc(100% - 1.5px) calc(100% - 11.5px),calc(100% - 1.5px) 1.5px,0 1.5px);  */
     
    // 2px width
    /* clip-path: polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%, 10px 100%,0 calc(100% - 10px), */
    /* clip-path: polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%, 10px 100%,0 calc(100% - 10px), 0 2px,2px 2px,2px calc(100% - 10px),10px calc(100% - 2px),calc(100% - 2px) calc(100% - 2px),calc(100% - 2px) 10px,calc(100% - 10px) 2px,0 2px);  */
    clip-path: ${generatePolygonOutline()};
    background-color: green;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }

`;

// &:before {
//   content: '';
//   width: 20px;
//   height: 20px;
//   background: transparent;
//   border: 3px solid white;
//   transform: rotate(45deg);
//   position: absolute;
//   border-top: 0;
//   border-left: 0;
//   border-bottom: 0;
//   top: -12px;
//   left: -13px;
// }
// &:after {
//   content: '';
//   width: 20px;
//   height: 20px;
//   background: transparent;
//   border: 3px solid white;
//   transform: rotate(-132deg);
//   position: absolute;
//   border-top: 0;
//   border-left: 0;
//   border-bottom: 0;
//   top: auto;
//   right: -13px;
//   bottom: -12px;
// }

// export const BaseButton = styled.button<ButtonProps>(({ size }) => ({
//   ...generateShapeStyles(size)
// }));

// export const BaseButton = styled.button({
//     ...generateShapeStyles()
// });


// --tds-notch: polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%);
//     --tds-notch--outline: polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 4px,4px 4px,4px calc(100% - 4px),calc(100% - 12px) calc(100% - 4px),calc(100% - 4px) calc(100% - 12px),calc(100% - 4px) 4px,0 4px);
//     --tds-notch--outline-thin: polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 1.5px,1.5px 1.5px,1.5px calc(100% - 1.5px),calc(100% - 11.5px) calc(100% - 1.5px),calc(100% - 1.5px) calc(100% - 11.5px),calc(100% - 1.5px) 1.5px,0 1.5px);
// --tds-notch: polygon(0 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%);   
