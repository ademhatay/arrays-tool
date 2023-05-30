import { shuffle } from './functions/shuffle';
import { reverse } from './functions/reverse';

export function useRandomArrayPack() {
	return {
		shuffle,
		reverse,
	};
}
