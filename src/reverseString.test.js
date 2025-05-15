import { reverseString } from "./reverseString";

test("Even length string", () => {
  expect(reverseString("ab")).toMatch("ba");
});

test("Odd length string", () => {
  expect(reverseString("bird")).toMatch("drib");
});
