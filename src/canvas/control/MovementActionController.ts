/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { type Container, type FederatedPointerEvent } from "pixi.js";
import ActionController from "./ActionController";
import type { Point } from "../../types";

type MovementActionListener = (action: MovementAction) => void

type MovementAction = Point

class MovementActionController 
  extends ActionController<MovementActionListener> {
    
  private handlePointerDown = (event: FederatedPointerEvent) => {
    this.isDragging = true;

    this.offset = {
      x: event.clientX,
      y: event.clientY
    }

    this.target.on('pointermove', this.handlePointerMove);
    this.target.on('pointerup', this.stopDraging);
    this.target.on('pointerleave', this.stopDraging);
  }
  private handlePointerMove = (event: FederatedPointerEvent) => {
    if (!this.isDragging) return;

    this.listeners.forEach(listener => {
      listener({
        x: event.clientX - this.offset.x,
        y: event.clientY - this.offset.y
      })
    })

    this.offset = {
      x: event.clientX,
      y: event.clientY
    };
  }
  private stopDraging = () => {
    this.isDragging = false
  }

  private offset = { x: 0, y: 0 };
  private isDragging = false;

  constructor(target: Container) {
    super(target)
  }

  public startListening() {
    this.target.on('pointerdown', this.handlePointerDown);
  }
  public cancelListening() {
    this.target.off('pointermove', this.handlePointerMove);
    this.target.off('pointerup', this.stopDraging);
    this.target.off('pointerleave', this.stopDraging);
  }
}

export default MovementActionController;