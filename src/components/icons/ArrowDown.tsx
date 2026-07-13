/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo } from "react";
import type { SVGProps } from "../../types";

const ArrowDown = memo(({ className }: SVGProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      version="1"
      viewBox="0 0 512 512"
    >
      <path d="M18 115.7c-6.9 2.5-14.5 10.7-16.6 17.8-2 7-1.5 14.4 1.5 20.7 2.8 6 234.8 238.8 240.6 241.4 2.2 1 7.2 2 11.2 2.2 14.2.8 4.4 9.6 135.6-122.1 86.7-87 117.4-118.4 119-121.7 3-6.4 3-16.6-.2-23.8-5.9-13.1-21.2-19.4-35.7-14.6-4.5 1.5-13.7 10.4-111.2 107.8L256 329.5 150.2 223.9C77 150.7 43.3 117.7 40.5 116.4c-5.4-2.5-16.6-2.8-22.5-.7"></path>
    </svg>
  )
})


export default ArrowDown;