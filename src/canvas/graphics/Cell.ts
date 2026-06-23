import { Container, Graphics, Sprite, Text, ObservablePoint, Application } from "pixi.js";
import { isEqual } from "lodash";

class Cell extends Container {
  private textContainer;
  private backgroundSprite;
  private size;

  private align(container: Container & { anchor: ObservablePoint }) {
    container.anchor.set(0.5)
    container.position.set(0, 0)
  };

  constructor(text: string, size: number, application: Application) {
    super()

    this.size = size;

    this.textContainer = new Text({
      text: text,
      style: {
        fill: 0xFFFFFF
      }
    });
    this.align(this.textContainer);

    const backgroundSpriteGraphics = new Graphics()
      .rect(0, 0, this.size, this.size).fill(0x000000);
    this.backgroundSprite = new Sprite({
      texture: application.renderer.generateTexture(backgroundSpriteGraphics)
    });
    this.align(this.backgroundSprite);

    this.addChild(this.backgroundSprite);
    this.addChild(this.textContainer);

    this.fitText()
  }

  public changeText(
    parameters:
      Partial<ConstructorParameters<typeof Text>['1']> &
      { text?: ConstructorParameters<typeof Text>['0'] }
  ) {
    this.textContainer.onViewUpdate();
    const oldTextMetrics = {
      width: this.textContainer.width,
      height: this.textContainer.height
    }

    if (parameters.text) {
      this.textContainer.text = parameters.text
    }
    delete parameters.text;
    this.textContainer.style = { ...this.textContainer.style, ...parameters };

    this.textContainer.onViewUpdate();
    if (
      !isEqual(oldTextMetrics, {
        width: this.textContainer.width,
        height: this.textContainer.height
      })
    ) {
      this.fitText();
    }

  }
  public fitText() {
    if (this.textContainer.width <= this.size) return
    this.textContainer.scale.set(this.size / this.textContainer.width)
  }
}

export default Cell