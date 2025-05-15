export function capitalize(string) {
  let firstChar = string.slice(0, 1).toUpperCase();
  return firstChar + string.slice(1);
}
