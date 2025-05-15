import { Calculator } from "./calculator";
const calculator = new Calculator();
test("Add 2 + 3", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Subtract 4 from 3", () => expect(calculator.subtract(3, 4)).toBe(-1));

test("Divide 20 by 5", () => expect(calculator.divide(20, 5)).toBe(4));

test("Divide by 0", () => expect(calculator.divide(1, 0)).toBe(undefined));
