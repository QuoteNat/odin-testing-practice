import { capitalize } from "./capitalize";

test('Capitalize "apple"', () => expect(capitalize("apple")).toMatch("Apple"));
test('Capitalize "banana"', () =>
  expect(capitalize("banana")).toMatch("Banana"));
test('Capitalize "pear"', () => expect(capitalize("pear")).toMatch("Pear"));
