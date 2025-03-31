function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

/**
 *
 * @param {number} i - Index of the number to remove
 * @param {Array<number>} arr - The array of numbers
 * @returns {Array<number>} - A new array without the element at index `i`
 */
function removeNumFromArray(i, arr) {
  return arr.filter((_, index) => index !== i);
}

module.exports = { add, minus, removeNumFromArray };
