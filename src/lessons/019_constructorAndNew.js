/**
 * Constructor Function
 * @param {string} name
 * @param {boolean} isAdmin
 * @returns {object}
 */
function User(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
    this.sayHello = function() {
        console.log(`My name is ${this.name}`);
    };
}

/**
 * same as
 * let user = {
 *  name: 'John',
 *  isAdmin: false,
 * };
 */
let user = new User('John', false);
console.log(user.name); // John
console.log(user.isAdmin); // false
user.sayHello(); // My name is John

/**
 * Tasks
 */
let obj = {};
function A() { return obj; }
function B() { return obj; }
let a = new A();
let b = new B();
console.log(a == b); // true


function Calculator(firstValue, secondValue) {
    this.read = function() {
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    };
    this.sum = function() {
        return this.firstValue + this.secondValue;
    };
    this.mul = function() {
        return this.firstValue * this.secondValue;
    };
}
let calculator = new Calculator(2, 3);
calculator.read();
console.log(calculator.sum()); // 5
console.log(calculator.mul()); // 6


function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(anotherValue) {
        this.value += anotherValue;
    };
}
let accumulator = new Accumulator(10);
console.log(accumulator.value); // 10
accumulator.read(1);
console.log(accumulator.value); // 11
accumulator.read(5);
console.log(accumulator.value); // 16
