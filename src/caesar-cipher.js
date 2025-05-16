const ALPHABET_LOWER = Array.from("abcdefghijklmnopqrstuvwxyz");

export function caesarCipher(string) {
  let stringArray = Array.from(string);
  let encrypted = stringArray.map((char) => {
    let index = ALPHABET_LOWER.indexOf(char);
    if (index == -1) return char;
    return ALPHABET_LOWER[(index + 3) % 26];
  });
  return encrypted.join("");
}
