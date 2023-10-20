'use strict'


import { hslToRgb } from '../helpers/hslToRgb.js';
import { hslToHex } from '../helpers/hslToHex.js';
import { checkArgumentsError } from './../helpers/checkArgumentsError.js';

/**
 * Generate random colors based on intensity and numberOfColorsToGenerate provided.
 *
 * @param {number} intensity - First Argument -> The intensity of colors (1-100).
 * @param {number} numberOfColorsToGenerate - Second Argument -> The number of colors to generate.
 * @returns {Object} A colorLists object containing lists of Arrays: hslColorLists[ ], rgbColorLists[ ], hexColorLists[ ].
 */

export const getRandomColors = (...args) => {

  checkArgumentsError(args) // if no error proceed otherwise HALT the function

  const intensity = args[0]
  const numberOfColorsToGenerate = args[1]

  const colorLists = {
    hslColorLists: [],
    rgbColorLists: [],
    hexColorLists: []
  };

  for (let b = 0; b < numberOfColorsToGenerate; b++) {
    const h = Math.floor(Math.random() * 360); // Random hue value (0-359)
    const s = (Math.random() * (100 - 0) + 0).toFixed(0); // Random saturation value (0-100)
    const l = intensity; // Adjusted lightness value

    const hslColor = `hsl(${h}, ${s}%, ${l}%)`;
    const rgbColor = hslToRgb(h, s, l);
    const hexColor = hslToHex(h, s, l);

    colorLists.rgbColorLists.push(rgbColor);
    colorLists.hslColorLists.push(hslColor);
    colorLists.hexColorLists.push(hexColor);
  }

  return colorLists;

}

console.log(getRandomColors(5, 100).hexColorLists)