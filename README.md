# getRandomColors

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)



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
npm i get-list-of-random-colors
``` 


## Usage

```bash
import {getRandomColors} from 'get-random-colors'
```

```bash
getRandomColors(50,6) # (intensity(1-100), numberofColorsToGenerate)
```
