/**
 * Copyright (C) 2026 camelbushe 
 * (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo } from "react";
import type { SVGProps } from "../../types";

const Arrow = memo(({ className }: SVGProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      version="1"
      viewBox="0 0 512 512"
    >
      <path d="M246.9 115.3c-2 .8-5.2 2.4-7.2 3.6s-55.5 54.4-118.9 118.2C40.2 318.1 4.7 354.5 3 357.8c-3.6 6.8-3.5 17.6.2 24.8 3.4 6.4 9.6 11.8 16 14 6.1 2 15.7 1.5 21.3-1.1 2.8-1.2 36.1-33.8 109.7-107.4L256 182.5l106.2 106.1C463.7 390 468.7 394.9 473.9 396.5c7.9 2.6 17.7 1.7 23.8-2.1 12.6-7.8 17.6-24.2 11.3-36.8-3.1-6.1-234-237.7-240-240.7-5.6-2.7-16.8-3.6-22.1-1.6"></path>
    </svg>
  )
})


export default Arrow;
