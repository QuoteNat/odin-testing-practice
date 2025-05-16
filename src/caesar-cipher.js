const ALPHABET_LOWER = Array.from("abcdefghijklmnopqrstuvwxyz");
const ALPHABET_UPPER = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
export function caesarCipher(string, shift) {
  let stringArray = Array.from(string);
  let encrypted = stringArray.map((char) => {
    if (ALPHABET_LOWER.includes(char)) {
      let index = ALPHABET_LOWER.indexOf(char);
      return ALPHABET_LOWER[(index + shift) % 26];
    } else if (ALPHABET_UPPER.includes(char)) {
      let index = ALPHABET_UPPER.indexOf(char);
      return ALPHABET_UPPER[(index + shift) % 26];
    } else {
      return char;
    }
  });
  return encrypted.join("");
}
