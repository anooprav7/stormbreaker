import * as React from 'react';
import {BaseButton} from "./styled"

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "primary" | "secondary" | "success" | "error" | "warning";

export interface ButtonProps {
  /**
   * The content for the button
   */
  children?: React.ReactNode;
  /**
   * The size of the button
   * 
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * The button variant to use
   * 
   * @default 'primary'
   */
  variant?: ButtonVariant;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size = "medium",
    variant = "primary",
    children,
    ...restProps
  } = props;
  return (
    <BaseButton 
      ref={ref}
      size={size}
      variant={variant}
      {...restProps}
    >
    {children}
    </BaseButton>
  )
});

export { Button };