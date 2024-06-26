/**
 * Function Expression
 */
let sayHello = function() {
    console.log('Hello');
};
sayHello();

/**
 * Function Declaration VS Function Expression
 * Function Declaration can be called earlier than it is defined
 * Function Expression is created when the execution reaches it and is usable only from that moment
 */
sayAnotherHello(); // Hello, John

function sayAnotherHello(name) {
    console.log(`Hello, ${name}`);
}

sayThirdHello(); // error

let sayThirdHello = function(name) {
    console.log(`Hello, ${name}`);
}