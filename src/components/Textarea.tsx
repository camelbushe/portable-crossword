/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo, type ComponentPropsWithRef } from "react";

import "../styles/components/textarea.css"

interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  color?: "secondary" | "on-secondary"
}

const Textarea = memo(
  ({ className, color = "secondary", ...props }: TextareaProps) => {
    return (
      <textarea className={`textarea ${color} ${className}`} {...props} />
    )
  })

export default Textarea