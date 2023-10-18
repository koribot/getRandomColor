
export function isTypeOfNumber(...values) {
  return values.every((value) => typeof value === 'number');
}
