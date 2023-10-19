'use strict'

import { isTypeOfNumber } from '../helpers/isTypeOfNumber.js'
import { hslToRgb } from '../helpers/hslToRgb.js';
import { hslToHex } from '../helpers/hslToHex.js';
import { isIntensityValid } from '../helpers/isIntensityValid.js';

/**
 * Generate random colors based on intensity and numberOfColorsToGenerate provided.
 *
 * @param {number} intensity - First Argument -> The intensity of colors (1-100).
 * @param {number} numberOfColorsToGenerate - Second Argument -> The number of colors to generate.
 * @returns {Object} An object containing lists of Arrays: hslColorLists[ ], rgbColorLists[ ], hexColorLists[ ].
 */

export const getRandomColors = (...args) => {
  const stack = new Error().stack;

  if (args.length !== 2) {
    console.log("Call Stack", stack)
    throw new Error(`Passing Argument -- Expected length of Arguments: 2  ------  Received: ${args.length} -> getRandomColors(${args})`);
  }

  const intensity = args[0]
  const numberOfColorsToGenerate = args[1]

  if (!isTypeOfNumber(intensity, numberOfColorsToGenerate)) {
    console.log("Call Stack", stack)
    throw new Error(`All parameters should be of type Number --- Exptected Data type -> getRandomColors(number, number) --- Received: getRandomColors(${typeof (intensity) + ', ' + typeof (numberOfColorsToGenerate)})`);
  }
  if (!isIntensityValid(intensity)) {
    console.log("Call Stack", stack)
    throw new Error(`Intensity Error --- Expected Range 1-100: Received ${intensity}`);
  }

  const hslColorLists = []
  const rgbColorLists = []
  const hexColorLists = []
  for (let b = 0; b < numberOfColorsToGenerate; b++) {
    const h = Math.floor(Math.random() * 360); // Random hue value (0-359)
    const s = (Math.random() * (100 - 0) + 0).toFixed(0);  // Random saturation value (0-100)
    const l = intensity;         // Adjusted lightness value

    const hslColor = `hsl(${h}, ${s}%, ${l}%)`;
    const rgbColor = hslToRgb(h, s, l)
    const hexColor = hslToHex(h, s, l)
    rgbColorLists.push(rgbColor)
    hslColorLists.push(hslColor);
    hexColorLists.push(hexColor)
  }
  return { hslColorLists, rgbColorLists, hexColorLists };
}

