/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo, type ComponentPropsWithRef } from "react";

import "../styles/components/text-input.css"

interface TextInputProps extends ComponentPropsWithRef<'input'> {
  color?: "secondary" | "on-secondary"
}

const TextInput = memo(
  ({ className, color = "secondary", ...props }: TextInputProps) => {
  return (
    <input 
      className={`text-input ${color} ${className}`} type="text" {...props} />
  )
})

export default TextInput