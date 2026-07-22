/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo, type ComponentPropsWithRef, type ComponentType } from "react";

import "../styles/components/button.css"

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  title: string,
  variant?: "primary" | "secondary",
  icon?: ComponentType<{ className: string }>
}

const Button = memo(
  ({
    title,
    variant = "primary",
    icon: Icon,
    className,
    ...props
  }: ButtonProps) => {
    return (
      <button className={`button ${variant} ${className}`} {...props}>
        {title}
        {Icon && <Icon className={`button_icon ${variant}`} />}
      </button>
    )
  })

export default Button