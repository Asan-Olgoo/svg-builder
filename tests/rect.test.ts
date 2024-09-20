import Rect from '../src/rect'

describe('Rect Class', () => {
  let rect: Rect

  beforeEach(() => {
    rect = new Rect(100, 50)
  })

  it('should create a rectangle with the given width and height', () => {
    expect(rect).toBeInstanceOf(Rect)
    expect(rect.render()).toContain('<rect width="100" height="50" />')
  })

  it('should set position using an array', () => {
    const updatedRect = rect.position([50, 75])
    expect(updatedRect).toBeInstanceOf(Rect)

    const renderedRect = rect.render()
    expect(renderedRect).toContain('x="50"')
    expect(renderedRect).toContain('y="75"')
  })

  it('should set position using individual x and y coordinates', () => {
    const updatedRect = rect.position(150, 200)
    expect(updatedRect).toBeInstanceOf(Rect)

    const renderedRect = rect.render()
    expect(renderedRect).toContain('x="150"')
    expect(renderedRect).toContain('y="200"')
  })

  it('should set the corner radius with both rx and ry', () => {
    const updatedRect = rect.radius(10, 15)
    expect(updatedRect).toBeInstanceOf(Rect)

    const renderedRect = rect.render()
    expect(renderedRect).toContain('rx="10"')
    expect(renderedRect).toContain('ry="15"')
  })

  it('should set the corner radius with only rx', () => {
    const updatedRect = rect.radius(10)
    expect(updatedRect).toBeInstanceOf(Rect)

    const renderedRect = rect.render()
    expect(renderedRect).toContain('rx="10"')
    expect(renderedRect).toContain('ry="10"')
  })

  it('should apply transformations and styles in the render', () => {
    rect.translate(100, 250)
    rect.css('fill: red;')

    const renderedRect = rect.render()
    expect(renderedRect).toContain('transform="translate(100 250)"')
    expect(renderedRect).toContain('style="fill: red;"')
  })
})
