/**
 * Class representing a text in SVG.
 */
class Text {
  private value: string
  private x?: number
  private y?: number
  private rotate?: number
  private style?: string

  /**
   * Create a text object.
   * @param value - The value of the text
   */
  constructor(value: string) {
    this.value = value
  }

  /**
   * Set the coordinates of the text.
   * @param x - The x position of the start of the text.
   * @param y - The y position of the start of the text.
   * @returns The instance of the text.
   */
  coordinates(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  /**
   * Set the rotate of the text.
   * @param degree - The rotation applied to each letter of text.
   * @returns The instance of the text.
   */
  rotation(degree: number): this {
    this.rotate = degree
    return this
  }

  /**
   * Set the CSS style of the text.
   * @param style - The CSS style.
   * @returns The instance of the text.
   */
  css(style: string): this {
    this.style = style
    return this
  }

  /**
   * Render the text as string.
   * @returns The string representing the text.
   */
  render(): string {
    const textElement =
      `<text` +
      (this.x || this.y ? ` x="${this.x}" y="${this.y}"` : '') +
      (this.rotate ? ` rotate="${this.rotate}"` : '') +
      (this.style ? ` style="${this.style}"` : '') +
      `>${this.value}</text>`
    return textElement
  }
}

export default Text
