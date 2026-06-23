import { Application } from "pixi.js";
import { memo, useEffect, useRef } from "react";
import Field from "../canvas/graphics/Field";
import Cell from "../canvas/graphics/Cell";

const CrosswordCanvas = memo(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        (async () => {
            if (!canvasRef.current) return;
            const cellSize = 50;

            const width = 800
            const height = 600

            const application = new Application()
            await application.init({
                width,
                height,
                backgroundColor: 0x1099bb,
                canvas: canvasRef.current,
                eventMode: "dynamic"
            });

            const field = new Field(cellSize, width, height, application);
            application.stage.addChild(field)

            const cell = new Cell("Hello world!", cellSize, application)
            field.addChildElement(cell);        
        })();
    }, [])

    return <canvas ref={canvasRef}></canvas>
})

export default CrosswordCanvas