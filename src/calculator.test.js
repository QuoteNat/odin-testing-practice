import { Calculator } from "./calculator";
const calculator = new Calculator();
test("Add 2 + 3", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Subtract 4 from 3", () => expect(calculator.subtract(3, 4)).toBe(-1));
