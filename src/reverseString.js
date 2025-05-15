export function reverseString(string) {
  let reverse = "";
  for (const char of string) {
    reverse = char + reverse;
  }
  return reverse;
}
