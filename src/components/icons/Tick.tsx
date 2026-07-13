/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo } from "react";
import type { SVGProps } from "../../types";

const Tick = memo(({ className }: SVGProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      version="1"
      viewBox="0 0 512 512"
    >
      <path d="M472 63.9c-1.4.5-4.1 1.6-6 2.5-1.9 1-72.4 70.6-158 156.1-103.4 103.3-155.4 154.6-157.2 155-1.5.4-3.7.4-5 0s-23-21.3-48.3-46.5-48-47-50.5-48.6c-6.4-3.9-17.4-4.6-24.8-1.4-5.5 2.4-12.5 9.2-14.3 13.8-3.4 9-2.5 19.9 2.4 26.9 1.4 2.1 29.3 30.4 61.9 62.9 41.2 41.1 60.7 59.9 63.7 61.4 6.2 3.1 14.5 3.7 21.2 1.5 5.2-1.7 12.1-8.4 175.1-171.3C518.7 89.8 506.3 103.1 506.3 90.3c0-11.7-7.9-22.6-18.7-25.8-5.3-1.6-11.5-1.8-15.6-.6"></path>
    </svg>
  )
})


export default Tick;
