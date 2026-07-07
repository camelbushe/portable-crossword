/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { Application } from "pixi.js";
import Field from "./Field";
import Cell from "./Cell";
import type { Point } from "../../types";

type Direction = "horizontal" | "vertical"

interface Word {
  text: string,
  startPoint: Point,
  direction: Direction
}

interface Scheme {
  formatVersion: number | "development",
  words: Array<Word>
}

class Crossword {
  private application = new Application();
  private canvas;
  private field?: Field;
  private cellSize = 50;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    const canvasRect = this.canvas.getBoundingClientRect();
    this.canvas.width = canvasRect.width * devicePixelRatio;
    this.canvas.height = canvasRect.height * devicePixelRatio
  }

  public async initialize() {
    await this.application.init({
      width: this.canvas.width,
      height: this.canvas.height,
      canvas: this.canvas,
      eventMode: "dynamic",
    })

    this.field = new Field(
      this.cellSize,
      this.canvas.width,
      this.canvas.height,
      this.application.renderer
    );
    this.application.stage.addChild(this.field);
  }
  public import(words: Array<Word>): void {
    words.forEach(word => {
      Array.from(word.text).forEach((char, index) => {
        const point = { 
          x: word.startPoint.x, 
          y: word.startPoint.y 
        }

        switch (word.direction) {
          case "horizontal":
            point.x = word.startPoint.x + index;
            break;
          case "vertical":
            point.y = word.startPoint.y + index;
            break;
        }

        this.addCell(point.x, point.y, char);
      })
    })
  }
  public addCell(x: number, y: number, text: string) {
    const cell = new Cell(
      text,
      this.cellSize,
      this.application.renderer
    )

    cell.position.x = this.cellSize * x;
    cell.position.y = this.cellSize * y;

    this.field?.addChildElement(cell)
  }
}

export default Crossword