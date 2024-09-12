import * as fs from 'fs'
import * as path from 'path'
import {cwd} from 'process'

import Rect from './rect'
import Circle from './circle'
import Path from './path'
import Text from './text'

/**
 * Class representing an SVG builder.
 */
class SVG {
  private width: number
  private height: number
  private elements: (Rect | Circle | Path | Text)[]

  /**
   * Create an SVG object.
   * @param {number} width - The width of the SVG.
   * @param {number} height - The height of the SVG.
   */
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.elements = []
  }

  /**
   * Add a rectangle to the SVG.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   * @returns The instance of the rectangle.
   */
  rect(width: number, height: number): Rect {
    const rect = new Rect(width, height)
    this.elements.push(rect)
    return rect
  }

  /**
   * Add a circle to the SVG.
   * @param {number} radius - The radius of the circle.
   * @returns The instance of the circle.
   */
  circle(radius: number): Circle {
    const circle = new Circle(radius)
    this.elements.push(circle)
    return circle
  }

  /**
   * Adds text to the SVG.
   * @param {string} value - The text content.
   * @returns The instance of the text.
   */
  text(value: string): Text {
    const textElement = new Text(value)
    this.elements.push(textElement)
    return textElement
  }

  /**
   * Adds a path to the SVG.
   * @param {string} d - The path data.
   * @returns The instance of the path.
   */
  path(d: string): Path {
    const pathElement = new Path(d)
    this.elements.push(pathElement)
    return pathElement
  }

  /**
   * Export the SVG as a string.
   * @returns {string} The SVG content as a string.
   */
  render(): string {
    return (
      `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">` +
      this.elements.map(element => element.render()).join('') +
      '</svg>'
    )
  }

  /**
   * Save the SVG to a file.
   * @param {string} filePath - The file path to save the SVG to.
   */
  saveSVG(filePath: string): void {
    const svgContent = this.render()
    const exportPath = path.join(cwd(), filePath)

    const dir = path.dirname(exportPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {recursive: true})
    }

    fs.writeFileSync(exportPath, svgContent)
    console.log(`SVG saved to ${exportPath}`)
  }
}

export default SVG
