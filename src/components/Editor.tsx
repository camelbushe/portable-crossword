import { memo } from "react";

import CrosswordCanvas from "./CrosswordCanvas";

const Editor = memo(() => {
    return (
        <div>
            <CrosswordCanvas />
        </div>
    )
})

export default Editor