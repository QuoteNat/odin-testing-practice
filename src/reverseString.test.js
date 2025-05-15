import { reverseString } from "./reverseString";

test("Even length string", () => {
  expect(reverseString("ab")).toMatch("ba");
});
