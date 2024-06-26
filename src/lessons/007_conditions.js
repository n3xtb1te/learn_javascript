/**
 * IF
 */
let a = 1;
if (a === 1) {
    console.log('a is 1');
}

/**
 * ELSE
 */
let b = 2;
if (b === 1) {
    console.log('b is 1');
} else {
    console.log('b is not 1');
}

/**
 * ELSE IF
 */
let c = 3;
if (c === 1) {
    console.log('c is 1');
} else if (c === 2) {
    console.log('c is 2');
} else {
    console.log('c is not 1 or 2');
}

/**
 * Ternary Operator
 */
let d = 4;
let result = (d === 4) ? 'd is 4' : 'd is not 4';
console.log(result);

/**
 * Multiple Ternary Operators
 */
let e = 5;
let result2 = (e === 4) ? 'e is 4' :
    (e === 5) ? 'e is 5' :
    'e is not 4 or 5';
console.log(result2);