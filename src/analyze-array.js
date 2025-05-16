export function analyzeArray(array) {
  let average = array.reduce((prev, cur) => prev + cur) / array.length;
  let min = array.reduce((prev, cur) => {
    if (cur < prev) return cur;
    return prev;
  });
  return {
    average: average,
    min: min,
  };
}
