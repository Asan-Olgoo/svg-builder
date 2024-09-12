import Shape from './shape'

/**
 * Class representing a circle in SVG.
 */
class Circle extends Shape {
  private r: number
  private cx?: number
  private cy?: number

  /**
   * Create a circle object.
   * @param {number} radius - The radius of the circle
   */
  constructor(radius: number) {
    super()
    this.r = radius
  }

  /**
   * Set the position of the circle.
   * @param {number} cx - The x-axis center of the circle.
   * @param {number} cy - The y-axis center of the circle.
   * @returns {Circle} The instance of the circle.
   */
  position(cx: number, cy: number): this {
    this.cx = cx
    this.cy = cy
    return this
  }

  /**
   * Render the circle as string.
   * @returns {string} The string representing the circle.
   */
  render(): string {
    const circle =
      `<circle r="${this.r}"` +
      (this.cx ? ` rx="${this.cx}"` : '') +
      (this.cy ? ` ry="${this.cy}"` : '') +
      (this.transform ? ` transform="${this.transform}"` : '') +
      (this.style ? ` style="${this.style}"` : '') +
      ' />'

    return circle
  }
}

export default Circle
