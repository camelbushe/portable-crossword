/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import type { Container, FederatedWheelEvent } from "pixi.js";
import ActionController from "./ActionController";

type ZoomActionListener = (action: ZoomAction) => void

interface ZoomAction {
  factor: number
}

class ZoomActionController extends ActionController<ZoomActionListener> {
  private handleWheel = (event: FederatedWheelEvent) => {
    if (event.deltaY > 0) {
      this.scale -= this.options.speed
    } else {
      this.scale += this.options.speed
    }

    this.scale = Math.max(
      this.options.min, 
      Math.min(this.options.max, this.scale)
    )

    this.listeners.forEach(listener => {
      listener({
        factor: this.scale
      })
    })
  }

  private scale;

  constructor(target: Container) {
    super(target)
    this.scale = this.target.scale.y
  }

  public startListening() {
    this.target.on('wheel', this.handleWheel)
  }
  public cancelListening() {
    this.target.off('wheel', this.handleWheel)
  }

  public options = {
    speed: 0.1,
    min: 0.5,
    max: 2,
  }
}

export default ZoomActionController