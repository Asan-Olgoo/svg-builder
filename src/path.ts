import Shape from './shape'

/**
 * Class representing a path in SVG.
 */
class Path extends Shape {
  private d: string

  /**
   * Create a path object.
   * @param {string} d - A set of commands which define the path.
   */
  constructor(d: string) {
    super()
    this.d = d
  }

  /**
   * Render the path as string.
   * @returns {string} The string representing the path.
   */
  render(): string {
    const path =
      `<path d="${this.d}"` +
      (this.transform ? ` transform="${this.transform}"` : '') +
      (this.style ? ` style="${this.style}"` : '') +
      ' />'
    return path
  }
}

export default Path
