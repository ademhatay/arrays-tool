import { shuffle } from '../functions/shuffleArray';

describe('shuffle', () => {
  it('should shuffle the array', () => {
    const array = [45, 23, 6, 12, 13, 2, 67, 1, 0, 3, 4, 5, 6, 7, 8, 9];

    const result = shuffle(array);

    expect(result).not.toEqual(array);
    expect(result.length).toBe(array.length);
    expect(new Set(result)).toEqual(new Set(array));
  });
});
