/**
 * Adds all the numbers in a given array to produce a sum
 *
 * @param array the array to add up
 * @returns the sum of all the numbers in the array
 */
export function sumArray(array: number[]): number {
  return array.reduce((sum, current) => sum + current, 0)
}

/**
 * Multiplies all the numbers in a given array to produce a product
 *
 * @param array the array to multiply together
 * @returns the product of all the numbers in the array
 */
export function multiplyArray(array: number[]): number {
  return array.reduce((product, current) => product * current, 1)
}
