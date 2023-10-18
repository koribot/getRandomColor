import { rgbToHex } from "./rgbToHex.js";
import { hslToRgb } from "./hslToRgb.js";

export function hslToHex(h, s, l) {
  const rgb = hslToRgb(h, s, l);
  return rgbToHex(rgb);
}
