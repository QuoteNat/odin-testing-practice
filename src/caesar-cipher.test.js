import { caesarCipher } from "./caesar-cipher";

test('"hello world" encrypts to "khoor zruog"', () => {
  expect(caesarCipher("hello world", 3)).toMatch("khoor zruog");
});

test("Wrapping", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
});
