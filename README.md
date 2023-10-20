# getRandomColors

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Examples](#example)



## About

Get a list of random colors with adjustable intensity (1-100) and the number of colors to generate.

**Returns:**

```json
{
  "hslColorLists": [],
  "rgbColorLists": [],
  "hexColorLists": []
}
```

## Getting Started
You can install it by downloading the source code or via npm

### Installation

```bash
npm i get-random-colors
``` 


## Usage

```bash
import {getRandomColors} from 'get-random-colors' # exact path node_modules/get-random-colors/src/lib/index.js
```

```bash
getRandomColors(50,6) # (intensity(1-100), numberofColorsToGenerate)
```


## Example

```bash
import {getRandomColors} from 'get-random-colors'


const random_colors = getRandomColors(20, 10)


console.log(random_colors)

```
**Sample Output**

```json
{
  "hslColorLists": [
    "hsl(84, 51%, 20%)",
    "hsl(132, 10%, 20%)",
    "hsl(274, 68%, 20%)",
    "hsl(45, 37%, 20%)",
    "hsl(61, 33%, 20%)",
    "hsl(355, 6%, 20%)",
    "hsl(95, 56%, 20%)",
    "hsl(266, 20%, 20%)",
    "hsl(232, 58%, 20%)",
    "hsl(42, 100%, 20%)"
  ],
  "rgbColorLists": [
    "rgb(56, 77, 25)",
    "rgb(46, 56, 48)",
    "rgb(56, 16, 86)",
    "rgb(70, 60, 32)",
    "rgb(67, 68, 34)",
    "rgb(54, 48, 48)",
    "rgb(46, 80, 22)",
    "rgb(50, 41, 61)",
    "rgb(21, 29, 81)",
    "rgb(102, 71, 0)"
  ],
  "hexColorLists": [
    "#384d19", "#2e3830",
    "#381056", "#463c20",
    "#434422", "#363030",
    "#2e5016", "#32293d",
    "#151d51", "#664700"
  ]
}

```



