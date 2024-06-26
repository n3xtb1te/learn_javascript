/**
 * Greater than: >
 */
console.log(5 > 3); // true
console.log(3 > 5); // false

/**
 * Less than: <
 */
console.log(5 < 3); // false
console.log(3 < 5); // true

/**
 * Greater than or equal to: >=
 */
console.log(5 >= 3); // true
console.log(3 >= 3); // true
console.log(3 >= 5); // false

/**
 * Less than or equal to: <=
 */
console.log(5 <= 3); // false
console.log(3 <= 3); // true
console.log(3 <= 5); // true

/**
 * Equality: ==
 */
console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(5 == 3); // false

/**
 * Inequality: !=
 */
console.log(5 != 5); // false
console.log(5 != '5'); // false
console.log(5 != 3); // true

/**
 * Strict Equality: ===
 */
console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(5 === 3); // false

/**
 * Strict Inequality: !==
 */
console.log(5 !== 5); // false
console.log(5 !== '5'); // true
console.log(5 !== 3); // true

/**
 * Null and Undefined
 */
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false