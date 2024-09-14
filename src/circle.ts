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
   * Sets the position using an array specifying the `[x, y]` coordinates.
   * @param {[number, number]} point - An array where the first element is the x-axis center and the second element is the y-axis center of the circle.
   * @returns {Circle} The instance of the circle.
   * @example
   * circle.position([50, 75]);
   */
  position(point: [number, number]): this
  /**
   * Sets the position using individual x and y coordinates.
   * @param {number} cx - The x-axis center of the circle.
   * @param {number} cy - The y-axis center of the circle.
   * @returns {Circle} The instance of the circle.
   * @example
   * circle.position(50, 75);
   */
  position(cx: number, cy: number): this
  position(cx: number | [number, number], cy?: number): this {
    if (Array.isArray(cx)) {
      if (cy !== undefined) throw new Error('Second parameter not allowed with array.')
      this.cx = cx[0]
      this.cy = cx[1]
    } else if (typeof cx === 'number') {
      if (typeof cy !== 'number') throw new Error('Second parameter required when x is a number.')
      this.cx = cx
      this.cy = cy
    } else throw new Error('Invalid parameters.')

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
