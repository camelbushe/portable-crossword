/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { 
  Container, Graphics, Sprite, Text, TextStyle, type Renderer
} from "pixi.js";

class Cell extends Container {
  private alignText() {
    this.textContent.x = this.size / 2 - this.textContent.width / 2;
    this.textContent.y = this.size / 2 - this.textContent.height / 2;
  }

  private textContent;
  private backgroundSprite;
  private size;
  
  constructor(text: string, size: number, renderer: Renderer) {
    super()

    this.size = size;
    this.textContent = new Text({
      text: text,
      style: {
        fill: "black",
      },
    });

    const backgroundSpriteGraphics = new Graphics()
      .rect(0, 0, this.size, this.size).fill("white");
    this.backgroundSprite = new Sprite({
      texture: renderer.generateTexture(backgroundSpriteGraphics)
    });

    this.addChild(this.backgroundSprite);
    this.addChild(this.textContent);

    this.fitText()
  }
  public fitText() {
    if (this.textContent.width > this.size) {
      this.textContent.scale.x = this.size / this.textContent.width;
    } 
    if (this.textContent.height > this.size) {
      this.textContent.scale.y = this.size / this.textContent.height;
    }
    
    this.alignText()
  }
  public set text(text: string) {
    this.textContent.text = text
  }
  public set textStyle(style: TextStyle) {
    this.textContent.style = style
  }
}

export default Cell