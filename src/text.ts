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
   * Sets the position using an array specifying the `[x, y]` coordinates.
   * @param {[number, number]} point - An array where the first element is the x-axis and the second element is the y-axis of the text.
   * @returns {Rect} The instance of the text.
   * @example
   * text.position([50, 75]);
   */
  position(point: [number, number]): this
  /**
   * Sets the position using individual x and y coordinates.
   * @param {number} x - The x position of the start of the text.
   * @param {number} y - The y position of the start of the text.
   * @returns {Rect} The instance of the text.
   * @example
   * text.position(50, 75);
   */
  position(x: number, y: number): this
  position(x: number | [number, number], y?: number): this {
    if (Array.isArray(x)) {
      if (y !== undefined) throw new Error('Second parameter not allowed with array.')
      this.x = x[0]
      this.y = x[1]
    } else if (typeof x === 'number') {
      if (typeof y !== 'number') throw new Error('Second parameter required when x is a number.')
      this.x = x
      this.y = y
    } else throw new Error('Invalid parameters.')

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
