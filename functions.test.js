const { test, expect } = require("@jest/globals");
const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide,
} = require(`./functions`);

test("Should return the number two", () => {
  expect(returnTwo()).toStrictEqual(2);
});

test('Should return "Hello {name}"', () => {
  expect(greeting("Mitch")).toBe("Hello Mitch");
});

test("Should return sum of {num1} + {num2}", () => {
  expect(add(7, 10)).toBe(17);
});
test("Should return sum of {num1} + {num2}", () => {
  expect(add(7, 10)).toBe(17);
});

describe("Numbers will be calculated", () => {
  test("Should add num1 and num2", () => {
    expect(add(10, 10)).toBe(20);
  });
  test("Should multiply num1 and num2", () => {
    expect(multiply(10, 10)).toBe(100);
  });
  test("Should divide num1 by num2", () => {
    expect(divide(10, 10)).toBe(1);
  });
  test("Should subtract num1 and num2", () => {
    expect(subtract(10, 10)).toBe(0);
  });
});
