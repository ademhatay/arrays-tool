import { reverse } from "../functions/reverse";

describe("reverse function", () => {
	it("should reverse an array", () => {
		const array = [1, 2, 3, 4, 5];
		const reversedArray = reverse(array);
		expect(reversedArray).toEqual([5, 4, 3, 2, 1]);
	});
});