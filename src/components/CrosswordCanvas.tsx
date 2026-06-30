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
            await crossword.initialize();

            const scheme = {
                formatVersion: "development",
                wods: [
                    {
                        text: "Hello",
                        direction: "horizontal" as "vertical" | "horizontal",
                        startPoint: {
                            x: 0,
                            y: 0
                        }
                    },
                    {
                        text: "Legend",
                        direction: "vertical" as "vertical" | "horizontal",
                        startPoint: {
                            x: 1,
                            y: -1
                        }
                    }
                ]
            }

            crossword.import(scheme.wods)
        })();
    }, [])

    return (
        <canvas 
            ref={canvasRef}
            style={{
                width: "100vw",
                height: "100vh"
            }}
        ></canvas>
    )
})

export default CrosswordCanvas