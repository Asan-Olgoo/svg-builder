import Shape from './shape'

/**
 * Class representing a rectangle in SVG.
 */
class Rect extends Shape {
  private width: number
  private height: number
  private x?: number
  private y?: number
  private rx?: number
  private ry?: number

  /**
   * Create a rectangle object.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   */
  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  /**
   * Sets the position using an array specifying the `[x, y]` coordinates.
   * @param {[number, number]} point - An array where the first element is the x-axis center and the second element is the y-axis center of the rectangle.
   * @returns {Rect} The instance of the rectangle.
   * @example
   * rect.position([50, 75]);
   */
  position(point: [number, number]): this
  /**
   * Sets the position using individual x and y coordinates.
   * @param {number} x - The x-axis center of the rectangle.
   * @param {number} y - The y-axis center of the rectangle.
   * @returns {Rect} The instance of the rectangle.
   * @example
   * rect.position(50, 75);
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
   * Set the corner radius of the rectangle.
   * @param {number} rx - The x radius of the corners of the rectangle (used to round the corners).
   * @param {number} [ry] - The y radius of the corners of the rectangle (used to round the corners).
   * @returns {Rect} The instance of the rectangle.
   */
  radius(rx: number, ry?: number): this {
    if (ry) {
      this.rx = rx
      this.ry = ry
    } else {
      this.rx = rx
      this.ry = rx
    }
    return this
  }

  /**
   * Render the rectangle as string.
   * @returns {string} The string representing the rectangle.
   */
  render(): string {
    const rect =
      `<rect width="${this.width}" height="${this.height}"` +
      (this.x ? ` x="${this.x}"` : '') +
      (this.y ? ` y="${this.y}"` : '') +
      (this.rx ? ` rx="${this.rx}"` : '') +
      (this.ry ? ` ry="${this.ry}"` : '') +
      (this.transform ? ` transform="${this.transform}"` : '') +
      (this.style ? ` style="${this.style}"` : '') +
      ' />'

    return rect
  }
}

export default Rect
