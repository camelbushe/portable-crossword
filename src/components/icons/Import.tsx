/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo } from "react";
import type { SVGProps } from "../../types";

const Import = memo(({ className }: SVGProps) => {
  return (
<svg
  className={className}
  xmlns="http://w3.org"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path
    d="M12 2.25a.75.75 0 0 1 .75.75v11.068l2.697-2.95a.75.75 0 1 1 1.106 1.012l-4 4.375a.75.75 0 0 1-1.106 0l-4-4.375a.75.75 0 1 1 1.106-1.012l2.697 2.95V3a.75.75 0 0 1 .75-.75z"
  />
  <path
    d="M3.75 15a.75.75 0 0 0-1.5 0v.055c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h6.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337V15a.75.75 0 0 0-1.5 0c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103H9c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191"
  />
</svg>


  )
})

export default Import;