/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { memo, useEffect, useRef } from "react";
import { Application } from "pixi.js";
import ClassicCrossword from "../canvas/crosswords/ClassicCrossword";

const CrosswordCanvas = memo(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        (async () => {
            if (!canvasRef.current) return;
            const canvasRect = canvasRef.current.getBoundingClientRect();

            const size = {
                width: canvasRect.width * devicePixelRatio,
                height: canvasRect.height * devicePixelRatio
            }

            const application = new Application()
            await application.init({
                ...size,
                canvas: canvasRef.current,
                eventMode: "dynamic"
            })

            const classicCrossword = new ClassicCrossword(size, application)

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

            classicCrossword.import(scheme.wods)
        })();
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: "50vw",
                height: "50vh"
            }}
        ></canvas>
    )
})

export default CrosswordCanvas