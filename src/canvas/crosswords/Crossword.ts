/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import type { Application } from "pixi.js";
import type { CrosswordSize } from "../../types";

import Field from "../graphics/Field";

abstract class Crossword<S> {
  protected readonly field;
  protected renderer;
  constructor(
    fieldCellSize: number,
    size: CrosswordSize, 
    application: Application
  ) {
    this.renderer = application.renderer;
    this.field = new Field(
      fieldCellSize, 
      size.width, 
      size.height, 
      this.renderer
    )

    application.stage.addChild(this.field)
  }
  public abstract import(scheme: S): void;
}

export default Crossword;