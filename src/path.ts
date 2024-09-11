/**
 * Class representing a path in SVG.
 */
class Path {
  private d: string
  private style?: string

  /**
   * Create a path object.
   * @param d - A set of commands which define the path.
   */
  constructor(d: string) {
    this.d = d
  }

  /**
   * Set the CSS style of the path.
   * @param style - The CSS style.
   * @returns The instance of the path.
   */
  css(style: string): this {
    this.style = style
    return this
  }

  /**
   * Render the path as string.
   * @returns The string representing the path.
   */
  render(): string {
    const path = `<path d="${this.d}"` + (this.style ? ` style="${this.style}"` : '') + ' />'
    return path
  }
}

export default Path
