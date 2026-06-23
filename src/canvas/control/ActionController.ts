/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import type { Container } from "pixi.js";

abstract class ActionController<L> {
  protected target;
  protected listeners: Array<L> = []

  constructor(target: Container) {
    this.target = target
  }

  public abstract startListening(): void;
  public abstract cancelListening(): void;
  public addListener(listener: L) {
    this.listeners.push(listener)
  }
}

export default ActionController