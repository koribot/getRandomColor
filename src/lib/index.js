import { isTypeOfNumber } from '../helpers/isTypeOfNumber.js'
import { hslToRgb } from '../helpers/hslToRgb.js';
import { hslToHex } from '../helpers/hslToHex.js';
import { isIntensityValid } from '../helpers/isIntensityValid.js';


/**
 * Generate random colors based on intensity provided.
 *
 * @param {number} intensity - The intensity of colors (1-100).
 * @param {number} numberOfColorsToGenerate - The number of colors to generate.
 * @returns {Object} An object containing lists of Arrays: hslColorLists[ ], rgbColorLists[ ], hexColorLists[ ].
 */

export const getRandomColors = (intensity, numberOfColorsToGenerate) => {
  if (!isTypeOfNumber(intensity, numberOfColorsToGenerate)) {
    throw new Error(`All parameters should be of type Number --- Exptected Data type -> getRandomColors(number, number) --- Received: getRandomColors(${typeof (intensity) + ', ' + typeof (numberOfColorsToGenerate)})`);
  }
  if (!isIntensityValid(intensity)) {
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


console.log(getRandomColors(20, 10, 5))