const { test, expect, describe } = require("@jest/globals");
const { add, minus, removeNumFromArray } = require("./math");

describe("All maths functions", () => {
  test("Adds two numbers together", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("Subtracts two numbers", () => {
    expect(minus(5, 5)).toBe(0);
  });

  test("Removes number from an array", () => {
    const array = [1, 2, 3, 4, 5];
    const equArray = [2, 3, 4, 5];
    const i = 0;

    expect(removeNumFromArray(i, array)).toEqual(equArray);
  });
});
