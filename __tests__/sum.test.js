import { sum } from "../src/utils/sum";

test("Sum function will calculate sum of two number", () => {
    const result = sum(9, 12);

    //Assertion
    expect(result).toBe(21);
});