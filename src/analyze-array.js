export function analyzeArray(array) {
  let average = array.reduce((prev, cur) => prev + cur) / array.length;

  return {
    average: average,
  };
}
