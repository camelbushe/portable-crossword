/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo, useEffect, useRef } from "react";
import Crossword from "../canvas/graphics/Crossword";

const CrosswordCanvas = memo(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        (async () => {
            if (!canvasRef.current) return;
            const crossword = new Crossword(canvasRef.current);
            await crossword.initialize()   
            crossword.addCell(6, 5)
        })();
    }, [])

    return (
        <canvas 
            ref={canvasRef}
        ></canvas>
    )
})

export default CrosswordCanvas