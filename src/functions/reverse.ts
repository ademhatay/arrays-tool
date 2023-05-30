export const reverse = (array: any[]) => {
	const length = array.length;
	for (let i = 0; i < length / 2; i++) {
		const temp = array[i];
		array[i] = array[length - i - 1];
		array[length - i - 1] = temp;
	}
	return array;
};