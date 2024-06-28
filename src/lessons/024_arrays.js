/**
 * Arrays
 */

// Declaration
let arr = new Array();
let anotherArr = [];

// Data Populating
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // apple
console.log(fruits[2]); // orange

// Replace Elements
fruits[1] = 'pineapple';
console.log(fruits[1]); // pineapple

// Add New Elements
fruits[3] = 'lemon';
console.log(fruits); // apple, pineapple, orange, lemon

// Total Count of Elements
console.log(fruits.length); // 4

// Get Last Element
console.log(fruits[fruits.length - 1]); // lemon
console.log(fruits.at(-1)); // lemon

/** 
 * Methods
 * pop      - get an element from the end, returns this element and removes it from an array
 * push     - appends an element to the end (can add multiple elements at once)
 * shift    - get an element from the beginning, returns this element and removes it from an array
 * unshift  - add the element to the beginning of the array (can add multiple elements at once)
*/
let fruitsArrayOne = ['apple', 'banana', 'orange'];
console.log(fruitsArrayOne.pop()); // orange
console.log(fruitsArrayOne); // apple, banana

let fruitsArrayTwo = ['apple', 'banana', 'orange'];
fruitsArrayTwo.push('pineapple');
console.log(fruitsArrayTwo); // apple, banana, orange, pineapple

let fruitsArrayThree = ['apple', 'banana', 'orange'];
console.log(fruitsArrayThree.shift()); // apple
console.log(fruitsArrayThree); // banana, orange

let fruitsArrayFour = ['apple', 'banana', 'orange'];
fruitsArrayFour.unshift('pineapple');
console.log(fruitsArrayFour); // pineapple, apple, banana, orange

/*
    Because arrays are objects they behave same as objects
    They are copied by reference
*/
let cars = ['audi'];
let listOfCars = cars; // copy by reference
console.log(cars === listOfCars); // true
listOfCars.push('bmw');
console.log(cars); // audi, bmw

// Loops
// Do Not use for..in for arrays
let names = ['John', 'Sasha', 'Nick'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]); // John -> Sasha -> Nick
}

for (let name of names) {
    console.log(name); // John -> Sasha -> Nick
}

/**
 * array length
 * length is equal not to the count of values in the array, but the greates numeric index plus 1
 */
let newArr = [];
newArr[0] = 1;
newArr[1000] = 1;
console.log(newArr.length); // 1001

// length property is writable
// if it is decreased array will be truncated
let numbersArr = [1, 2, 3, 4, 5];
numbersArr.length = 2; // truncate to 2 elements
console.log(numbersArr); // 1, 2
numbersArr.length = 5;
console.log(numbersArr[3]); // undefined

// new Array() - if called with a single argument which is a number,
//               then it creates an array without items, but with the given length
let anotherArray = new Array(2);
console.log(anotherArray[0]); // undefined, no elements
console.log(anotherArr.length); // 2

// Multidimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix[1][1]); // 5

// toString()
console.log(matrix); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9

// Do Not compare arrays with ==
// compare arrays item-by-item in a loop or using iteration methods

/**
 * Tasks
 */
let exFruits = ['apples', 'pear', 'orange'];
let shoppingCart = exFruits;
shoppingCart.push('Banana');
console.log(exFruits.length); // 4


let styles = ['Jazz', 'Blues'];
console.log(styles);
styles.push('Rock-n-Roll');
console.log(styles);
styles[Math.floor((styles.length - 1)/ 2)] = 'Classics'
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift('Rap', 'Reggae');
console.log(styles);


let exArr = ['a', 'b'];
exArr.push(function() {
    console.log(this);
});
exArr[2]();


function sumInput() {
    let numbers = [];
    let sum = 0;

    while(true) {
        let value = prompt('Enter a number: ');

        if (
            value === '' || 
            value === null ||
            !isFinite(value)
        ) break;

        numbers.push(+value);
    }
    
    for (let number of numbers) {
        sum += number;
    }
    console.log(sum);
}


function getMaxSubSum(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let maxSubSum = 0;
        for (let j = i; j < arr.length; j++) {
            maxSubSum += arr[j];
            maxSum = Math.max(maxSum, maxSubSum);
        }
    }
    console.log(maxSum);
}
getMaxSubSum([-1, 2, 3, -9, 11]); // 11
getMaxSubSum([-1, 2, 3, -9]); // 5
getMaxSubSum([-2, -1, 1, 2]); // 3
getMaxSubSum([1, 2, 3]); // 6
getMaxSubSum([100, -9, 2, -3, 5]); // 100
