/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo, type ComponentPropsWithRef } from "react";

import "../styles/components/text-input.css"

const TextInput = memo(({ ...props }: ComponentPropsWithRef<'input'>) => {
  return (
    <input {...props} className="text-input" type="text" />
  )
})

export default TextInput