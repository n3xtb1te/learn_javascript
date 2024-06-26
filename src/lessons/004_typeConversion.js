/**
 * String Conversion
 */
let boolean = true;
console.log(boolean); // true
console.log(typeof boolean); // boolean

let str = String(boolean);
console.log(str); // true
console.log(typeof str); // string

/**
 * Number Conversion
 */

// Explicit Conversion
let string = '123';
console.log(string); // 123
console.log(typeof string); // string

let number = Number(string);
console.log(number); // 123
console.log(typeof number); // number

// Implicit Conversion
let first = '100';
let second = '50';
console.log(first / second); // 2

// Numeric Conversion Rules
console.log(Number('123')); // 123
console.log(Number('  123  ')); // 123
console.log(Number('123z')); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('')); // 0
console.log(Number(' ')); // 0
console.log(Number('some string')); // NaN

/**
 * Boolean Conversion
 */
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
// Everything else is true
console.log(Boolean(1)); // true
console.log(Boolean('Hello')); // true
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true
console.log(Boolean('false')); // true
