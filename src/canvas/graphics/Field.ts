/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { 
  Container, Graphics, Ticker, TilingSprite,
  type Renderer
} from "pixi.js";
import MovementActionController from "../control/MovementActionController";
import ZoomActionController from "../control/ZoomActionController";

interface Updatebale {
  update(ticker: Ticker): void
}
type FieldChildElement = Container & Partial<Updatebale>

class Field extends Container {
  private container = new Container();
  private background;

  constructor(
    cellSize: number, 
    width: number, 
    height: number, 
    renderer: Renderer
  ) {
    super()

    const backgroundTextureGraphics = new Graphics()
      .rect(0, 0, cellSize, cellSize).fill(0xEEEEEE)
      .rect(cellSize, 0, cellSize, cellSize).fill(0xFFFFFF)
      .rect(0, cellSize, cellSize, cellSize).fill(0xFFFFFF)
      .rect(cellSize, cellSize, cellSize, cellSize).fill(0xEEEEEE)

    this.background = new TilingSprite({
      texture: renderer.generateTexture(backgroundTextureGraphics),
      width,
      height,
    })
    
    this.addChild(this.background);
    this.addChild(this.container);

    const movementActionController = new MovementActionController(this);
    movementActionController.addListener(({x, y}) => {
        this.moveFieldOn(x, y)
      }
    )
    movementActionController.startListening();

    const zoomActionController = new ZoomActionController(this)
    zoomActionController.addListener(({factor}) => {
      this.fieldScale = factor
    })
    zoomActionController.startListening()
  };

  public moveFieldOn(x: number, y: number) {
    this.container.position.x += x;
    this.container.position.y += y

    this.background.tilePosition.x += x;
    this.background.tilePosition.y += y;
  };
  public addChildElement(childElement: FieldChildElement) {
    this.container.addChild(childElement)
  };

  public set fieldScale(scale: number) {
    this.container.scale = scale
    this.background.tileScale = scale
  }
}

export default Field