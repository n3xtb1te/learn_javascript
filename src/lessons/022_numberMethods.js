/**
 * Methods of Primitives
 */

/**
 * NUMBER
 */
let billion = 1000000000;
let anotherBillion = 1_000_000_000;
let yetAnotherBillion = 1e9;
console.log(billion); // 1000000000
console.log(anotherBillion); // 1000000000
console.log(yetAnotherBillion); // 1000000000
console.log(1e3 === 1 * 1000); // true
console.log(1.23e6 === 1.23 * 1000000); // true
console.log(0.000001 === 1e-6); // true

/**
 * HEX number
 */
console.log(0xff); // 255
console.log(0xFF); // 255

/**
 * Binary number
 */
console.log(0b11111111); // 255

/**
 * Octal number
 */
console.log(0o377); // 255

/**
 * toString(base)
 * @param {number} base - the base can vary from 2 to 36, by default, it's 10 
 */
let num = 255;
console.log(num.toString()); // 255
console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111

/**
 * Rounding
 * Math.floor() - rounds down
 * Math.ceil()  - rounds up
 * Math.round() - rounds to the nearest integer
 * Math.trunc() - removes anything after the decimal point without rounding
 */
console.log(Math.floor(3.1)); // 3
console.log(Math.floor(-1.1)); // -2

console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(-1.1)); // -1

console.log(Math.round(3.1)); // 3
console.log(Math.round(3.6)); // 4
console.log(Math.round(3.5)); // 4
console.log(Math.round(-1.1)); // -1

console.log(Math.trunc(3.1)); // 3
console.log(Math.trunc(3.6)); // 3
console.log(Math.trunc(-1.1)); // -1

/**
 * Decimal part rounding
 * Multiply-and-divide
 * toFixed(n)
 */
let number = 1.23456;
console.log(Math.round(number * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

console.log(number.toFixed(2)); // 1.23
// toFixed(n) works similar to Math.round(), e.g. rounds up or down to the nearest value
// toFixed(n) returns a 'string'
console.log(12.36.toFixed(1)); // 12.4
console.log(12.34.toFixed(5)); // 12.34000

/**
 * Imprecise Calculations
 */
console.log(1e500); // Infinity
console.log(0.1 + 0.2 == 0.3); // false, but why?
/* 
    Explanation
    The Loss of Precision 
*/
console.log(0.1 + 0.2); // 0.30000000000000004
/*
    Number is stored in memory in its binary form, a sequence of bits - zeros and ones
*/
console.log(0.1.toString(2)); // 0.0001100110011001100110011001100110011001100110011001101
console.log(0.2.toString(2)); // 0.001100110011001100110011001100110011001100110011001101
console.log((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101
let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // 0.30
console.log(+sum.toFixed(2)); // 0.3

/**
 * isFinite() - converts its argument to a number and returs true
 *              if it's a regular number, not NaN/Infinity/-Infinity
 * isNaN()    - converts its argument to a number and then tests it for being NaN
 */
console.log(isNaN(NaN)); // true
console.log(isNaN('string')); // true
// why to use isNaN(), because of this:
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(isFinite(15)); // true
console.log(isFinite('15')); // true, because it successfully converted to number
console.log(isFinite('str')); // false, because it converted to NaN
console.log(isFinite(Infinity)); // false, because it is Infinity

/**
 * parseInt(str, radix)
 * @param {string} str - a string to convert into a number
 * @param {number} radix - base, value from 2 to 36
 * parseFloat()
 */
console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5
console.log(parseInt('12.3')); // 12
console.log(parseFloat('12.3.4')); // 12.3
console.log(parseInt('a123')); // NaN

/**
 * Other math functions
 */
console.log(Math.random()); // returns a random number from 0 to 1 (not including 1)
