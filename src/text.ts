import Shape from './shape'

/**
 * Class representing a text in SVG.
 */
class Text extends Shape {
  private value: string
  private x?: number
  private y?: number

  /**
   * Create a text object.
   * @param {string} value - The value of the text
   */
  constructor(value: string) {
    super()
    this.value = value
  }

  /**
   * Set the position of the text.
   * @param {number} x - The x position of the start of the text.
   * @param {number} y - The y position of the start of the text.
   * @returns {Text} The instance of the text.
   */
  position(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  /**
   * Render the text as string.
   * @returns {string} The string representing the text.
   */
  render(): string {
    const textElement =
      `<text` +
      (this.x || this.y ? ` x="${this.x}" y="${this.y}"` : '') +
      (this.transform ? ` transform="${this.transform}"` : '') +
      (this.style ? ` style="${this.style}"` : '') +
      `>${this.value}</text>`
    return textElement
  }
}

export default Text
