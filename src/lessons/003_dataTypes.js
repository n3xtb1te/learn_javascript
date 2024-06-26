/**
 * String
 */
let string = 'Hello, World!';
console.log(string); // Hello, World!
console.log(typeof string); // string

/**
 * Number
 */
let number = 3.14;
console.log(number); // 3.14
console.log(typeof number); // number

let infinity = Infinity;
console.log(infinity); // Infinity
console.log(typeof infinity); // number

let negativeInfinity = -Infinity;
console.log(negativeInfinity); // -Infinity
console.log(typeof negativeInfinity); // number

let notANumber = NaN;
console.log(notANumber); // NaN
console.log(typeof notANumber); // number

/**
 * BigInt
 */
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n
console.log(typeof bigInt); // bigint

/**
 * Boolean
 */
let boolean = true;
console.log(boolean); // true
console.log(typeof boolean); // boolean

/**
 * null
 */
let nullValue = null;
console.log(nullValue); // null
console.log(typeof nullValue); // object

/**
 * undefined
 */
let undefinedValue = undefined;
console.log(undefinedValue); // undefined
console.log(typeof undefinedValue); // undefined

let undefinedVariable;
console.log(undefinedVariable); // undefined
console.log(typeof undefinedVariable); // undefined

/**
 * Symbol
 */
let symbol = Symbol('symbol');
console.log(symbol); // Symbol(symbol)
console.log(typeof symbol); // symbol

/**
 * Object
 */
let object = { key: 'value' };
console.log(object); // { key: 'value' }
console.log(typeof object); // object

/**
 * Function
 */
let functionValue = function() {};
console.log(functionValue); // [Function: functionValue]
console.log(typeof functionValue); // function
