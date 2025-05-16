import { analyzeArray } from "./analyze-array";
const TEST_ARRAY = [1, 8, 3, 4, 2, 6];
test("Average", () => expect(analyzeArray(TEST_ARRAY).average).toBe(4));
