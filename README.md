# SVG Builder Package

This package provides a simple and flexible way to create and manipulate SVG. It allows you to build
SVGs programmatically by adding various elements such as rectangles, circles, paths, and text.

## Installation

To use this package, you need to install it via npm. Run the following command in your project
directory:

```bash
npm install @ezptrn/svg-builder
```

## Usage

### Creating an SVG

You can create an SVG object by specifying its width and height:

```typescript
import SVG from '@ezptrn/svg-builder'

const svg = new SVG(500, 500)
```

### Adding Elements

You can add different SVG elements to the SVG object:

#### Rectangle

```typescript
svg.rect(100, 50)
  .coordinates(10, 10)
  .radios(5, 5)
  .css('fill: red;');
```

#### Circle

```typescript
svg.circle(50)
  .coordinates(250, 250)
  .css('fill: blue;');
```

#### Path

```typescript
const path = svg.path('M10 80 Q 95 10 180 80 T 360 80')
  .css('stroke: black; stroke-width: 2; fill: none;');
```

### Rendering and Saving SVG

To get the SVG content as a string, use the `render` method:

```typescript
const svgContent = svg.render();
console.log(svgContent);
```

To save the SVG content to a file, use the `saveSVG` method:

```typescript
svg.saveSVG('output.svg');
```

## API

`SVG(width: number, height: number)`

Creates a new SVG object with the specified width and height.

### Methods

* `rect(width: number, height: number): Rect`
* `circle(radius: number): Circle`
* `path(d: string): Path`
* `text(value: string): Text`
* `render(): string`
* `saveSVG(filePath: string): void`

`Rect`

Represents a rectangle in SVG.

### Methods

* `coordinates(x: number, y: number): Rect`
* `radios(rx: number, ry: number): Rect`
* `css(style: string): Rect`
* `render(): string`

`Circle`

Represents a circle in SVG.

### Methods

* `coordinates(cx: number, cy: number): Circle`
* `css(style: string): Circle`
* `render(): string`

`Path`

Represents a path in SVG.

### Methods

* `css(style: string): Path`
* `render(): string`

`Text`

Represents a text in SVG.

### Methods

* `coordinates(x: number, y: number): Text`
* `css(style: string): Text`
* `render(): string`
