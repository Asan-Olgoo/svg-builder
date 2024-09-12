/**
 * An abstract class representing a generic shape.
 * Provides methods to manipulate the shape's CSS styles and SVG transformations.
 * @abstract
 */
abstract class Shape {
  protected transform = ''
  protected style?: string

  abstract render(): string

  /**
   * Sets the CSS style of the shape.
   * @param {string} style - The CSS style string.
   * @returns {Shape} The instance of the shape for method chaining.
   */
  css(style: string): this {
    this.style = style
    return this
  }

  /**
   * Translates (moves) the shape by the specified x and y coordinates.
   * @param {number} x - The translation distance along the X axis.
   * @param {number} y - The translation distance along the Y axis.
   * @returns {Shape} The instance of the shape for method chaining.
   */
  translate(x: number, y: number): this {
    this.transform += `translate(${x} ${y})`
    return this
  }

  /**
   * Scales the shape by the specified x and y values.
   * If only one argument is provided, the shape is scaled uniformly.
   *
   * @overload
   * @param {number} x - The scale factor along both X and Y axes.
   * @returns {Shape} The instance of the shape for method chaining.
   *
   * @overload
   * @param {number} x - The scale factor along the X axis.
   * @param {number} y - The scale factor along the Y axis.
   * @returns {Shape} The instance of the shape for method chaining.
   */
  scale(x: number): this
  scale(x: number, y: number): this
  scale(x: number, y?: number): this {
    if (y) this.transform += `scale(${x},${y})`
    else this.transform += `scale(${x})`
    return this
  }

  /**
   * Rotates the shape by the specified degrees.
   * @param {number} degree - The rotation angle in degrees.
   * @returns {Shape} The instance of the shape for method chaining.
   */
  rotate(degree: number): this {
    this.transform += `rotate(${degree})`
    return this
  }
}

export default Shape
