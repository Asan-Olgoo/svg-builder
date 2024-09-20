import Circle from '../src/circle'

describe('SVG Class', () => {
  let circle: Circle

  beforeEach(() => {
    circle = new Circle(50)
  })

  it('should create a Circle object with radius', () => {
    expect(circle).toBeInstanceOf(Circle)
    expect(circle.render()).toContain('<circle r="50" />')
  })

  it('should set position using an array', () => {
    const updatedCircle = circle.position([100, 200])
    expect(updatedCircle).toBeInstanceOf(Circle)

    const renderedCircle = circle.render()
    expect(renderedCircle).toContain('rx="100"')
    expect(renderedCircle).toContain('ry="200"')
  })

  it('should set position using individual coordinates', () => {
    const updatedCircle = circle.position(150, 250)
    expect(updatedCircle).toBeInstanceOf(Circle)

    const renderedCircle = circle.render()
    expect(renderedCircle).toContain('rx="150"')
    expect(renderedCircle).toContain('ry="250"')
  })

  it('should apply transformations and styles in the render', () => {
    circle.rotate(45)
    circle.css('fill: red;')

    const renderedCircle = circle.render()
    expect(renderedCircle).toContain('transform="rotate(45)"')
    expect(renderedCircle).toContain('style="fill: red;"')
  })
})
