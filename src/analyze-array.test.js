import { analyzeArray } from "./analyze-array";
const TEST_ARRAY = [1, 8, 3, 4, 2, 6];
test("Average", () => expect(analyzeArray(TEST_ARRAY).average).toBe(4));
test("Min", () => expect(analyzeArray(TEST_ARRAY).min).toBe(1));
test("Max", () => expect(analyzeArray(TEST_ARRAY).max).toBe(8))