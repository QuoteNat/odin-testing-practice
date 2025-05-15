import { reverseString } from "./reverseString";

test("Reverse strings", () => {
  let tests = [
    { input: "ab", expected: "ba" },
    { input: "bird", expected: "drib" },
  ];
  tests.forEach((test) => {
    expect(reverseString(test.input)).toMatch(test.expected);
  });
});

test("Reverse an empty string", () => expect(reverseString("")).toMatch(""));
