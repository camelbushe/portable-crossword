import type { Container, FederatedPointerEvent } from "pixi.js";
import ActionController from "./ActionController";

type MovementActionListener = (action: MovementAction) => void

interface MovementAction {
  x: number,
  y: number
}

class MovementActionController extends ActionController<MovementActionListener> {
  private getLocalEventPosition(event: FederatedPointerEvent) {
    const localPosition = event.getLocalPosition(event.target)
    return {
      x: localPosition.x,
      y: localPosition.y
    }
  }
  private handlePointerDown = (event: FederatedPointerEvent) => {
    this.isDragging = true;

    this.offset = this.getLocalEventPosition(event)

    this.target.on('pointermove', this.handlePointerMove);
    this.target.on('pointerup', this.stopDraging);
    this.target.on('pointerleave', this.stopDraging);
  }
  private handlePointerMove = (event: FederatedPointerEvent) => {
    if (!this.isDragging) return;

    const eventLocalPosition = this.getLocalEventPosition(event)

    this.listeners.forEach(listener => {
      listener({
        x: eventLocalPosition.x - this.offset.x,
        y: eventLocalPosition.y - this.offset.y
      })
    })

    this.offset = eventLocalPosition;
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