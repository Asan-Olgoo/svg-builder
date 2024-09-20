import Text from '../src/text'

describe('Text Class', () => {
  let text: Text

  beforeEach(() => {
    text = new Text('Hello, World!')
  })

  it('should create a text element with the given value', () => {
    expect(text).toBeInstanceOf(Text)
    expect(text.render()).toContain('<text>Hello, World!</text>')
  })

  it('should set position using an array', () => {
    const updatedText = text.position([50, 75])
    expect(updatedText).toBeInstanceOf(Text)

    const renderedText = text.render()
    expect(renderedText).toContain('x="50"')
    expect(renderedText).toContain('y="75"')
  })

  it('should set position using individual x and y coordinates', () => {
    const updatedText = text.position(150, 200)
    expect(updatedText).toBeInstanceOf(Text)

    const renderedText = text.render()
    expect(renderedText).toContain('x="150"')
    expect(renderedText).toContain('y="200"')
  })

  it('should apply transformations and styles in the render', () => {
    text.translate([100, 250])
    text.css('fill: red;')

    const renderedText = text.render()
    expect(renderedText).toContain('transform="translate(100 250)"')
    expect(renderedText).toContain('style="fill: red;"')
  })
})
