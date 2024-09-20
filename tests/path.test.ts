import Path from '../src/path'

describe('Path Class', () => {
  let path: Path

  beforeEach(() => {
    path = new Path('M10 10 H 90 V 90 H 10 Z')
  })

  it('should create a path with the given commands', () => {
    expect(path).toBeInstanceOf(Path)
    expect(path.render()).toContain('<path d="M10 10 H 90 V 90 H 10 Z" />')
  })

  it('should apply transformations and styles in the render', () => {
    path.scale(2)
    path.css('stroke: blue;')

    const renderedPath = path.render()
    expect(renderedPath).toContain('transform="scale(2)"')
    expect(renderedPath).toContain('style="stroke: blue;"')
  })
})
