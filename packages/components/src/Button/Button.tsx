import * as React from 'react';
import {BaseButton} from "./styled"

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  /**
   * The content for the button
   */
  children?: React.ReactNode;
  /**
   * The size of the button
   * 
   * @default 'small'
   */
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = "small",
    children,
    ...restProps
  } = props;
  return (
    <BaseButton 
      ref={ref}
      size={size}
      {...restProps}
    >
    {children}
    </BaseButton>
  )
});

export { Button };