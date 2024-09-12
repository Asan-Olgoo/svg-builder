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
   * Set the position of the rectangle.
   * @param {number} x - The x-position for the top-left corner of the rectangle.
   * @param {number} y - The y-position for the top-left corner of the rectangle.
   * @returns {Rect} The instance of the rectangle.
   */
  position(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  /**
   * Set the corner radius of the rectangle.
   * @param {number} rx - The x radius of the corners of the rectangle (used to round the corners).
   * @param {number} ry - The y radius of the corners of the rectangle (used to round the corners).
   * @returns {Rect} The instance of the rectangle.
   */
  radius(rx: number, ry: number): this {
    this.rx = rx
    this.ry = ry
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
