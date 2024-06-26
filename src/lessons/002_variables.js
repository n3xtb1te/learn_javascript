/**
 * In JavaScript, let is a keyword used to declare a variable
 * that can be reassigned but not redeclared.
 * let is block-scoped, meaning it is only available within the block it is declared in.
 */
function letFunction() {
    let x = 10;
    console.log(x); // 10
    x = 20;
    console.log(x); // 20
    let x = 30; // SyntaxError: Identifier 'x' has already been declared
}
console.log(x); // ReferenceError: x is not defined

/**
 * In JavaScript, var is a keyword used to declare a variable
 * that can be reassigned and redeclared.
 * var is function-scoped, meaning it is only available within the function it is declared in.
 */
function varFunction() {
    var x = 10;
    console.log(x); // 10
    var x = 20;
    console.log(x); // 20
    x = 30;
    console.log(x); // 30
}
console.log(x); // ReferenceError: x is not defined

/**
 * In JavaScript, const is a keyword used to declare a variable 
 * that cannot be reassigned once it has been assigned a value.
 * const is block-scoped, meaning it is only available within the block it is declared in.
 */
function constFunction() {
    const x = 10;
    console.log(x); // 10
    x = 20; // TypeError: Assignment to constant variable
    const x = 30; // SyntaxError: Identifier 'x' has already been declared
}
console.log(x); // ReferenceError: x is not defined
