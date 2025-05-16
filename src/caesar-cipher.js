const ALPHABET_LOWER = Array.from("abcdefghijklmnopqrstuvwxyz");
const ALPHABET_UPPER = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

function shiftChar(char, dictionary, shift) {
  let index = dictionary.indexOf(char);
  return dictionary[(index + shift) % dictionary.length];
}

export function caesarCipher(string, shift) {
  let stringArray = Array.from(string);
  let encrypted = stringArray.map((char) => {
    if (ALPHABET_LOWER.includes(char)) {
      return shiftChar(char, ALPHABET_LOWER, shift);
    } else if (ALPHABET_UPPER.includes(char)) {
      return shiftChar(char, ALPHABET_UPPER, shift);
    } else {
      return char;
    }
  });
  return encrypted.join("");
}
