import Shape from '../src/shape'

class TestShape extends Shape {
  render(): string {
    return 'test'
  }
}

describe('Shape Class', () => {
  let shape: TestShape

  beforeEach(() => {
    shape = new TestShape()
  })

  it('should set the CSS style', () => {
    const updatedShape = shape.css('fill: red;')
    expect(updatedShape).toBeInstanceOf(TestShape)
    expect(updatedShape['style']).toBe('fill: red;')
  })

  describe('translate()', () => {
    it('should translate the shape using array coordinates', () => {
      const updatedShape = shape.translate([50, 30])
      expect(updatedShape).toBeInstanceOf(TestShape)
      expect(updatedShape['transform']).toBe('translate(50 30)')
    })

    it('should translate the shape using x and y coordinates', () => {
      const updatedShape = shape.translate(100, 200)
      expect(updatedShape).toBeInstanceOf(TestShape)
      expect(updatedShape['transform']).toBe('translate(100 200)')
    })
  })

  describe('scale()', () => {
    it('should scale the shape uniformly when only one parameter is provided', () => {
      const updatedShape = shape.scale(1.5)
      expect(updatedShape).toBeInstanceOf(TestShape)
      expect(updatedShape['transform']).toBe('scale(1.5)')
    })

    it('should scale the shape non-uniformly when both x and y parameters are provided', () => {
      const updatedShape = shape.scale(1.2, 1.5)
      expect(updatedShape).toBeInstanceOf(TestShape)
      expect(updatedShape['transform']).toBe('scale(1.2,1.5)')
    })
  })

  describe('rotate()', () => {
    it('should rotate the shape by a specified degree without center point', () => {
      const updatedShape = shape.rotate(45)
      expect(updatedShape).toBeInstanceOf(TestShape)
      expect(updatedShape['transform']).toBe('rotate(45)')
    })

    it('should rotate the shape by a specified degree with a center point using array', () => {
      const updatedShape = shape.rotate(45, [50, 60])
      expect(updatedShape).toBeInstanceOf(TestShape)
      expect(updatedShape['transform']).toBe('rotate(45 50 60)')
    })

    it('should rotate the shape by a specified degree with a center point using x and y', () => {
      const updatedShape = shape.rotate(45, 30, 40)
      expect(updatedShape).toBeInstanceOf(TestShape)
      expect(updatedShape['transform']).toBe('rotate(45 30 40)')
    })
  })

  it('should chain translate, scale, and rotate transformations', () => {
    const updatedShape = shape.translate(50, 30).scale(1.2, 1.5).rotate(45, [25, 35])

    expect(updatedShape).toBeInstanceOf(TestShape)
    expect(updatedShape['transform']).toBe('translate(50 30)scale(1.2,1.5)rotate(45 25 35)')
  })
})
