/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo } from "react";
import type { SVGProps } from "../../types";

const Plus = memo(({ className }: SVGProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12M6 12h12"
      ></path>
    </svg>
  )
})

export default Plus;