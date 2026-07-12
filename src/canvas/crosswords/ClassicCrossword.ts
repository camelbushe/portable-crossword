/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import type { Application } from "pixi.js";
import type { CrosswordSize, Point } from "../../types";

import Cell from "../graphics/Cell";
import Crossword from "./Crossword";

type Direction = "horizontal" | "vertical"

interface Word {
  text: string,
  startPoint: Point,
  direction: Direction
}

class ClassicCrossword extends Crossword<Array<Word>> {
  private cellSize;

 constructor(size: CrosswordSize, application: Application) {
    const defaultCellSize = 50;
    super(defaultCellSize, size, application);

    this.cellSize = defaultCellSize;
  }

  // Исправить дублирование
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
      this.renderer
    )

    cell.position.x = this.cellSize * x;
    cell.position.y = this.cellSize * y;

    this.field.addChildElement(cell)
  }
}

export default ClassicCrossword;