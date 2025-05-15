export class Calculator {
  add(left, right) {
    return left + right;
  }
  subtract(left, right) {
    return left - right;
  }
  divide(dividend, divisor) {
    if (divisor == 0) return undefined;
    return dividend / divisor;
  }
}
