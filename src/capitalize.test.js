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
