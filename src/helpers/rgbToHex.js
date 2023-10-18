export function rgbToHex(rgb) {
  const hex = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!hex) return 'N/A';
  return '#' + ((1 << 24) | (hex[1] << 16) | (hex[2] << 8) | hex[3]).toString(16).slice(1);
}
