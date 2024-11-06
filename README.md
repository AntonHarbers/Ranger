# Ranger

A Typescript and Javascript utility class for an iterable range with the following functionality:

### Constructor

The Ranger constructor takes 3 parameters:
Start : number
End : number
Step : number (optional defaults to 1)

```js
const { Ranger } = require('@comsicode/range-js');

const range = new Ranger(0, 10, 2);
```

### Iterable Range

Range is iterable and will iterate from the start (inclusive) to the end (inclusive) at the step rate.

```js
for (let i of new Ranger(0, 3)) {
  console.log(i); // Logs 0, 1, 2, 3
}
```

### Random Number Method

This method has no parameters and returns a random number from the given range.

```js
let random = new Ranger(0, 10).getRandom(); // will return a random number between 0 (inclusive) and 10 (inclusive)
```

### Contains Number Method

This method takes one parameter of type number and returns a boolean for if the number is contained within the given range.

```js
let contains = new Ranger(0, 10, 2).contains(2); // will return true
```

### ToArray Method

This method takes no parameters and returns the range as a flat array

```js
let arr = new Ranger(0, 10, 3).toArray(); // will return [0, 3, 6, 9]
```

### ToReverseArray Method

This method takes no parameters and returns the reversed range as a flat array

```js
let revArr = new Ranger(0, 10, 3).toArray(); // will return [9, 6, 3, 0]
```

### Get length method

Will return the amount of numbers in our range

```js
let length = new Ranger(0, 10, 3).length; // returns 4
```

### ToString method

Will return a joined array like so:

```js
let string = new Ranger(0, 10, 3).toString(); // return "[0, 3, 6, 9]"
```

### Reverse method

Will reverse the range of your ranger

```js
const range = new Ranger(0, 10, 2);
range.reverse(); // range becomes start: 10, end: 0, step: -2
```

### Filter method

Accepts a callback as a parameter, returns the filtered array on the range

```js
const range = new Ranger(1, 10, 2); // [1, 3, 5, 7, 9]
console.log(range.filter((x) => x % 3 === 0)); // [3, 9]
```

### Map method

Accepts a callback as a parameter, returns the mapped array on the range

```js
const range = new Ranger(1, 10, 2); // [1, 3, 5, 7, 9]
console.log(range.map((x) => x * 2)); // [2, 6, 10, 14, 18]
```

### Clone method

Returns a clone of the ranger

```js
const range = new Ranger(1, 10, 2); // [1, 3, 5, 7, 9]
const range2 = range.clone(); // [1, 3, 5, 7, 9]
```
