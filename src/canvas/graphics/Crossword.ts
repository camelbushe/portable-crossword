/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { Application } from "pixi.js";
import Field from "./Field";
import Cell from "./Cell";

class Crossword {
  private application = new Application();
  private canvas;
  private field?: Field;
  private cellSize = 50;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
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
    this.application.stage.addChild(this.field)
  }
  public addCell(x: number, y: number) {
    const cell = new Cell(
      "",
      this.cellSize,
      this.application.renderer
    )

    cell.position.x = this.cellSize * x;
    cell.position.y = this.cellSize * y;

    this.field?.addChildElement(cell)
  }
}

export default Crossword