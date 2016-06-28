# d3-rs-polars

`d3-rs-polars` generate a range of pie charts.

## Builds

[![Circle CI](https://circleci.com/gh/Redsift/d3-rs-polars.svg?style=svg)](https://circleci.com/gh/Redsift/d3-rs-polars)

## Example

[View @redsift/d3-rs-polars on Codepen](http:...)

### Line chart

![Sample bars with a bottom orientation](https://bricks.redsift.io/reusable/d3-rs-polars.svg?_datum=[1,200,3100,1000]&orientation=bottom)

### Area chart

![Sample bars with a left orientation](https://bricks.redsift.io/reusable/d3-rs-polars.svg?_datum=[1,200,3100,1000]&orientation=left&fill=global)

### Combination

![Sample bars with a top orientation and time label](https://bricks.redsift.io/reusable/d3-rs-polars.svg?_datum=[{%22v%22:1,%22l%22:1466424812000},{%22v%22:2,%22l%22:1466511212000},{%22v%22:3,%22l%22:1466597612000},{%22v%22:300.5,%22l%22:1466684012000},{%22v%22:4000,%22l%22:1466770412000},{%22v%22:40000,%22l%22:1466856812000}]&orientation=top&labelTime=%25a%20%25d)

## Usage

### Browser
	
	<script src="//static.redsift.io/reusable/d3-rs-polars/latest/d3-rs-polars.umd-es2015.min.js"></script>
	<script>
		var chart = d3_rs_lines.html();
		d3.select('body').datum([ 1, 2, 3, 10, 100 ]).call(chart);
	</script>

### ES6

	import { chart } from "@redsift/d3-rs-polars";
	let eml = chart.html();
	...
	
### Require

	var chart = require("@redsift/d3-rs-polars");
	var eml = chart.html();
	...

### Datum

- Simplest form, array of unit numbers: `[0.1, 1, 0.5 ,0.3...]`

### Parameters

Property|Description|Transition|Preview
----|-----------|----------|-------
`classed`|*String* SVG custom class|N
`width`, `height`, `size`, `scale`|*Integer* SVG container sizes. Typically, use `size` to scale the chart|Y
`margin`|*Object, Number* Margin affecting all chart elements
`inset`|*Number* Margin affecting primary chart element
`style`|*String* Custom CSS to inject into chart|N
`background`|*Color*
`theme`|*light|dark*
`language`|*String*
`outerRadius`|*Integer* Radius of the largest arc. Default is `null` and is set automatically as a funciton of the size|
`padding`|*Number* Pixels between polar arcs|
`thickness`|*Number* Pixel thickness of the arc|
`cornerRadius`|*Number* Pixel rounding of the arc ends|
`reverse`|*Boolean* Reverse the arc fill computation|
`padAngle`|*Number* Radians to pad between the data values 0 and 1. By default, an arc between 0 and 1 will form a complete circle|
`startAngle`|*Number* Radian position of 0|
`displayValue`|
`displayFormatValue`|
`fill`|
`displayTip`|
`legend`|*Array*


