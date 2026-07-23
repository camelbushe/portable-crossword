/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo, type ComponentPropsWithRef } from "react";

import "../styles/components/textarea.css"

const Textarea = memo(({ ...props }: ComponentPropsWithRef<'textarea'>) => {
  return (
    <textarea className="textarea" {...props} />
  )
})

export default Textarea