import SVG from '../src'
import * as fs from 'fs'
import * as path from 'path'
import {cwd} from 'process'

describe('SVG Class', () => {
  let svg: SVG

  beforeEach(() => {
    svg = new SVG(500, 300)
  })

  it('should create an SVG object with width and height', () => {
    expect(svg).toBeInstanceOf(SVG)
    expect(svg.render()).toContain('<svg width="500" height="300"></svg>')
  })

  it('should add a rectangle to the SVG', () => {
    const rect = svg.rect(100, 50)
    expect(rect).toBeDefined()
    expect(svg.render()).toContain('<rect')
  })

  it('should add a circle to the SVG', () => {
    const circle = svg.circle(50)
    expect(circle).toBeDefined()
    expect(svg.render()).toContain('<circle')
  })

  it('should add text to the SVG', () => {
    const text = svg.text('Hello World')
    expect(text).toBeDefined()
    expect(svg.render()).toContain('<text')
  })

  it('should add a path to the SVG', () => {
    const pathElement = svg.path('M10 10 H 90 V 90 H 10 Z')
    expect(pathElement).toBeDefined()
    expect(svg.render()).toContain('<path')
  })

  it('should render the SVG as a string', () => {
    const svgString = svg.render()
    expect(svgString).toContain('<svg')
    expect(svgString).toContain('</svg>')
  })

  it('should save the SVG to a file', () => {
    const filePath = path.join('tests/output.svg')
    svg.saveSVG(filePath)

    const exportPath = path.join(cwd(), filePath)
    const fileExists = fs.existsSync(exportPath)

    expect(fileExists).toBe(true)
    fs.unlinkSync(exportPath)
  })
})
