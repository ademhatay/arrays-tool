# arrays-tool

A simple npm package that provides useful functions for manipulating arrays.

## Installation

Use npm to install `arrays-tool`:

```shell
npm install arrays-tool
```

## Usage

```js
const { useRandomArrayPack } = require('arrays-tool');

const tools = useRandomArrayPack();

const array = [4, 9, 132, 78, 42];

const shuffledArray = tools.shuffle(array);

console.log(shuffledArray);
// Output: [132, 42, 9, 4, 78]
```

## API

### `shuffle(array)`

Shuffles the elements of the given array randomly and returns a new shuffled array.

- `array`: The array to be shuffled.

Returns the shuffled array.

### `reverse(array)`
Reverses the elements of the given array and returns a new reversed array.

- `array`: The array to be reversed.
  
Returns the reversed array.


## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)
