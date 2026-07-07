/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo } from "react";

import CrosswordCanvas from "./CrosswordCanvas";
import Dropdown from "./Dropdown";

const Editor = memo(() => {
    return (
        <div>
            <CrosswordCanvas />
            <Dropdown 
                selected={1}
                values={[
                    {
                        title: "Second",
                        value: 5,
                    },
                    {
                        title: "Third",
                        value: 3,
                    }
                ]}
                onSelect={(value) => {
                    console.log(value.title)
                }}
            />
        </div>
    )
})

export default Editor