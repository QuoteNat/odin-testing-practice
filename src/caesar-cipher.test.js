import { caesarCipher } from "./caesar-cipher";

test('"hello world" encrypts to "khoor zruog"', () => {
  expect(caesarCipher("hello world")).toMatch("khoor zruog");
});

test("Wrapping", () => {
  expect(caesarCipher("xyz")).toMatch("abc");
});
