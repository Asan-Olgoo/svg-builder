/**
 * Class representing a rectangle in SVG.
 */
class Rect {
  private width: number
  private height: number
  private x?: number
  private y?: number
  private rx?: number
  private ry?: number
  private style?: string

  /**
   * Create a rectangle object.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   */
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  /**
   * Set the coordinates of the rectangle.
   * @param x - The x-position for the top-left corner of the rectangle.
   * @param y - The y-position for the top-left corner of the rectangle.
   * @returns The instance of the rectangle.
   */
  coordinates(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  /**
   * Set the coordinates of the rectangle.
   * @param rx - The x radius of the corners of the rectangle (used to round the corners).
   * @param ry - The y radius of the corners of the rectangle (used to round the corners).
   * @returns The instance of the rectangle.
   */
  radios(rx: number, ry: number): this {
    this.rx = rx
    this.ry = ry
    return this
  }

  /**
   * Set the CSS style of the rectangle.
   * @param style - The CSS style.
   * @returns The instance of the rectangle.
   */
  css(style: string): this {
    this.style = style
    return this
  }

  /**
   * Render the rectangle as string.
   * @returns The string representing the rectangle.
   */
  render(): string {
    const rect =
      `<rect width="${this.width}" height="${this.height}"` +
      (this.x ? ` x="${this.x}"` : '') +
      (this.y ? ` y="${this.y}"` : '') +
      (this.rx ? ` rx="${this.rx}"` : '') +
      (this.ry ? ` ry="${this.ry}"` : '') +
      (this.style ? ` style="${this.style}"` : '') +
      ' />'

    return rect
  }
}

export default Rect
