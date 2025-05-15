import { capitalize } from "./capitalize";

test("Capitalize words", () => {
  let words = [
    { input: "apple", expected: "Apple" },
    { input: "pear", expected: "Pear" },
    { input: "banana", expected: "Banana" },
  ];
  words.forEach((test) => {
    expect(capitalize(test.input)).toMatch(test.expected);
  });
});
test("Empty string", () => expect(capitalize("")).toMatch(""));
// "A capitalize function that takes a string and returns it with the first character capitalized."
// Instructions don't specify whether it should be first letter or first character as in the data type, so assume the latter.
test("Space as first character", () => expect(capitalize(" a")).toMatch(" a"));
