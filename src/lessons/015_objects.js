/**
 * Objects
 */

// Object Constructor
let userOne = new Object();

// Object Literal
let userTwo = {};

let user = {
    name: 'John',
    age: 30,
};
// add object properties
user.isAdmin = true;
user['sex'] = 'male';
console.log(user.isAdmin); // true
console.log(user.sex); // male

// read object properties
console.log(user.name); // John
console.log(user['age']); // 30

// remove object properties
delete user.isAdmin;
delete user['sex'];
console.log(user.isAdmin); // undefined
console.log(user['sex']); // undefined

// check property existence
console.log('age' in user); // true
console.log('noSuchProperty' in user); // false

/**
 * Square Brackets
 */
let anotherUser = {};

// add
anotherUser['has money'] = true;
// read 
console.log(anotherUser['has money']); // true
// delete
delete anotherUser['has money'];

// property name as a result of expresion
let key = 'has auto';
anotherUser[key] = true;
console.log(anotherUser[key]); // true
// cannot be used with dot notaiton
anotherUser = {
    name: 'Ben',
    age: 25,
};
let anotherKey = 'name';
console.log(anotherUser.anotherKey); // undefined

/**
 * Property Value Shorthand
 */
// Instead Of
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    }
}
// Can Be Used
function makeAnoterUser(name, age) {
    return {
        name,
        age,
    }
}
