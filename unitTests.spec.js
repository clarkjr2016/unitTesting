import { capitalize, reverseString, calculator } from "./unitTests";

test("Capitalizes hello to Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("howdy", () => {
  expect(reverseString("howdy")).toBe("ydwoh");
});

test("add", () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test("subtract", () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test("multiply", () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

test("divide", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test("a letter can be shifted to a letter by entering in 'n' number", () => {
  expect(ceaserCipher("a")).toBe("c");
});
