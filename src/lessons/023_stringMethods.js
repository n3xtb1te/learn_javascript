/**
 * Methods of Primitives
 */

/**
 * STRING
 */

// Quotes
let single = 'single-quoted';
let double = 'double-quoted';
let backticks = `backticks`;

// Backticks allow to embed any expression into the string
let num = 123;
console.log(`backticks ${num}`);

// Backticks allow a string to span multiple lines
let carList = `Car list:
 * audi
 * bmw
 * vw`;
console.log(carList); // multiline output

// Template Function
const person = 'Mike';
const age = 17;

function myFunction(strings, person, age) {
    const str1 = strings[0];
    const str2 = strings[1];
    const str3 = strings[2];

    const strAge = age > 18 ? 'adult' : 'child';

    return `${str1}${person}${str2}${strAge}${str3}`;
}
const output = myFunction`That ${person} is a ${age}.`;
console.log(output); // That Mike is a child

/**
 * Special Characters
 * \n - newline
 * \', \", \` - quotes
 * \\ - backslash
 * \t - tab
 */

// String Length
console.log("Hello!".length); // 6

// Accessing Characters
let str = 'Hello';
console.log(str[0]); // H
console.log(str.at(0)); // H
console.log(str.charAt(0)); // H
console.log(str[str.length - 1]); // o
console.log(str[-1]); // undefined
console.log(str.at(-1)); // o
for (let char of str) {
    console.log(char); // H -> e -> l -> l -> o
}

// String Are Immutable
let str1 = 'hello';
str1[0] = 'H'; // Cannot assign to read only property '0' of string 'hello' (error occurs only with 'use strict')
console.log(str1); // doesn't work

// Changin the Case
let lowerCase = 'lower case';
let upperCase = 'UPPER CASE';
console.log(lowerCase.toUpperCase()); // LOWER CASE
console.log(upperCase.toLowerCase()); // upper case

// Searching for a Substring
/**
 * str.indexOf(substr, pos) - looks for substr in str, starting from the gived position pos
 * returns position where match was found or -1 if nothing can be found
 * @param {string} substr
 * @param {number} pos
 */
let str2 = 'Audi Car ud';
console.log(str2.indexOf('Audi')); // 0
console.log(str2.indexOf('audi')); // -1, because search is case-sensitive
console.log(str2.indexOf('ud')); // 1
console.log(str2.indexOf('ud', 2)); // 9

/**
 * str.includes(substr, pos) returns true/false depending on whether str contains substr withing
 * str.startsWith(substr)
 * str.endsWith(substr)
 */
console.log(str2.includes('Audi')); // true
console.log(str2.includes('bmw')); // false
console.log(str2.includes('Audi', 2)); // false
console.log(str2.startsWith('Audi')); // true
console.log(str2.endsWith(' ud')); // true

// Getting a Substring
let str3 = 'stringify';
// str.slice(start [, end])
console.log(str3.slice(0, 5)); // strin, not including character at 5th position
console.log(str3.slice(0, 1)); // s
console.log(str3.slice(2)); // ringify
console.log(str3.slice(-4, -1)); // gif
console.log(str3.slice(2, 6)); // ring
console.log(str3.slice(6, 2)); // "" (empty string)
// str.substring(start [, end])
console.log(str3.substring(2, 6)); // ring
console.log(str3.substring(6, 2)); // ring

/**
 * Tasks
 */
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('john') === 'John'); // true


function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes('viagra') || str.includes('xxx')
}
console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxxx')); // true
console.log(checkSpam('innocent rabbit')); // false


function truncate(str, maxlength) {
    // if (str.length > maxlength) {
    //     return str.slice(0, maxlength - 1) + "…";
    // }
    // return str;
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str;
}
console.log(truncate('What I\'d like to tell on this topic is:', 20)); // What I'd like to te…
console.log(truncate('Hi everyone!', 20)); // Hi everyone!


function extractCurrencyValue(str) {
    return Number(str.slice(1));
}
console.log(extractCurrencyValue('$120') === 120); // true
