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
   * @returns {this} The instance of the shape.
   */
  css(style: string): this {
    this.style = style
    return this
  }

  /**
   * Translates (moves) the shape by a specified distance, either using a point array or individual x and y coordinates.
   * @param {[number, number]} point - An array where the first element is the x-coordinate and the second element is the y-coordinate for the translation.
   * @returns {this} The current shape instance, allowing for method chaining.
   * @example
   * element.translate([50, 30]);
   */
  translate(point: [number, number]): this
  /**
   * Translates the shape by the specified x and y coordinates.
   * @param {number} x - The distance to move the shape along the x-axis.
   * @param {number} y - The distance to move the shape along the y-axis.
   * @returns {this} The current shape instance, allowing for method chaining.
   * @example
   * element.translate(50, 30);
   */
  translate(x: number, y: number): this
  translate(x: number | [number, number], y?: number): this {
    if (Array.isArray(x)) {
      if (y !== undefined) throw new Error('Second parameter not allowed with array.')
      this.transform += `translate(${x[0]} ${x[1]})`
    } else if (typeof x === 'number') {
      if (typeof y !== 'number') throw new Error('Second parameter required with number.')
      this.transform += `translate(${x} ${y})`
    }
    return this
  }

  /**
   * Scales the shape by the specified factor, either uniformly or non-uniformly along the X and Y axes.
   * @param {number} x - The scale factor along the X axis, or for both axes if `y` is not provided.
   * @param {number} [y] - Optional. The scale factor along the Y axis. If not provided, the shape will be scaled uniformly along both axes using the value of `x`.
   * @returns {this} The current shape instance, allowing for method chaining.
   * @example
   * element.scale(1.5);
   * element.scale(1.2, 1.5);
   */
  scale(x: number, y?: number): this {
    if (y) this.transform += `scale(${x},${y})`
    else this.transform += `scale(${x})`
    return this
  }

  /**
   * Rotates the shape by a specified number of degrees, optionally around a defined center point.
   * @param {number} degree - The angle in degrees to rotate the shape.
   * @param {[number, number]} [point] - Optional. An array specifying the `[x, y]` coordinates of the rotation center.
   * @returns {this} The current shape instance.
   * @example
   * element.rotate(45); // Rotate by 45 degrees
   * element.rotate(45, [30, 40]); // Rotate by 45 degrees around the point (30, 40).
   */
  rotate(degree: number, point?: [number, number]): this
  /**
   * @param {number} degree - The angle in degrees to rotate the shape.
   * @param {number} [x] - Optional. The x-coordinate of the rotation center.
   * @param {number} [y] - Optional. The y-coordinate of the rotation center. Must be provided if `x` is provided.
   * @returns {this} The current shape instance.
   * @example
   * element.rotate(45, 50, 50); // Rotate by 45 degrees around the point (50, 50).
   */
  rotate(degree: number, x?: number, y?: number): this
  rotate(degree: number, x?: number | [number, number], y?: number): this {
    if (Array.isArray(x)) {
      if (y !== undefined) throw new Error('Second parameter not allowed with array.')
      this.transform += `rotate(${degree} ${x[0]} ${x[1]})`
    } else if (typeof x === 'number') {
      if (typeof y !== 'number') throw new Error('Second parameter required when x is a number.')
      this.transform += `rotate(${degree} ${x} ${y})`
    } else this.transform += `rotate(${degree})`

    return this
  }
}

export default Shape
