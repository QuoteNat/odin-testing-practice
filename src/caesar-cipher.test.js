import { caesarCipher } from "./caesar-cipher";

test('"hello world" encrypts to "khoor zruog"', () => {
  expect(caesarCipher("hello world", 3)).toMatch("khoor zruog");
});

test("Wrapping", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
});

test("Case preservation", () =>
  expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr"));

test("Punctuation", () =>
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!"));
