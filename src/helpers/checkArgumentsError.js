import { isIntensityValid } from '../helpers/isIntensityValid.js';
import { isTypeOfNumber } from '../helpers/isTypeOfNumber.js'

export function checkArgumentsError(args) {

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

}