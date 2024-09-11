/**
 * Class representing a circle in SVG.
 */
class Circle {
  private r: number
  private cx?: number
  private cy?: number
  private style?: string

  /**
   * Create a circle object.
   * @param radius - The radius of the circle
   */
  constructor(radius: number) {
    this.r = radius
  }

  /**
   * Set the coordinates of the circle.
   * @param cx - The x-axis center of the circle.
   * @param cy - The y-axis center of the circle.
   * @returns The instance of the circle.
   */
  coordinates(cx: number, cy: number): this {
    this.cx = cx
    this.cy = cy
    return this
  }

  /**
   * Set the CSS style of the circle.
   * @param style - The CSS style.
   * @returns The instance of the circle.
   */
  css(style: string): this {
    this.style = style
    return this
  }

  /**
   * Render the circle as string.
   * @returns The string representing the circle.
   */
  render(): string {
    const circle =
      `<circle r="${this.r}"` +
      (this.cx ? ` rx="${this.cx}"` : '') +
      (this.cy ? ` ry="${this.cy}"` : '') +
      (this.style ? ` style="${this.style}"` : '') +
      ' />'

    return circle
  }
}

export default Circle
