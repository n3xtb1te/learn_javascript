/**
 * Arrow Functions
 */
let sumTwoNumbers = (numberOne, numberTwo) => numberOne + numberTwo;
let result = sumTwoNumbers(1, 2);
console.log(result); // 3

let multiplyTwoNumbers = (numberOne, numberTwo) => {
    let result = numberOne * numberTwo;
    return result;
}
console.log(multiplyTwoNumbers(2, 3)); // 6

let sayHello = (name) => {
    console.log(`Hello, ${name}`);
}
sayHello('John'); // Hello, John