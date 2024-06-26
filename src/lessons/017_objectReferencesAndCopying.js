/**
 * Object References and Copying
 */

/**
 * As a result we have two independent variables,
 * each one storing the string 'Hello!'
 */
let message = 'Hello!';
const phrase = message; // the value of message is copied, not the reference
console.log(message); // Hello!
console.log(phrase); // Hello!
message = 'World!';
console.log(message); // World!
console.log(phrase); // Hello!

/**
 * A variable assigned to an object stores not the object itself,
 * but its 'address in memory' - in other words 'a reference' to it
 * 
 * When an object variable is copied, the reference is copied,
 * but the object itself is not duplicated
 */
const owner = {
    name: 'John',
};
const admin = owner; // the reference to the object is copied, not the value
console.log(owner); // { name: 'John' }
console.log(admin); // { name: 'John' }
admin.name = 'Pete';
console.log(owner); // { name: 'Pete' } - the name was changed even though it was updated by admin reference
console.log(admin); // { name: 'Pete' }

/**
 * Comparison By Reference
 * 
 * Two objects are equal only if the are the same object
 */
const a = {};
const b = a; // copy the reference
console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

const c = {};
const d = {}; // another, independent object
console.log(c == d); // false

/**
 * Cloning and merging, Object.assign
 * 
 * What should we do if we want to duplicate an object?
 * 
 * Usual assignment (=) won't work, 
 * because it creates reference to existing object
 */
const baseCar = {
    year: '2000',
    wheels: 4,
};

/**
 * Duplicate via for..in loop
 */
const audi = {}; // new empty object
for (const key in baseCar) {
    audi[key] = baseCar[key]; // copy each property separately
}
console.log(baseCar); // { year: '2000', wheels: 4 }
console.log(audi); // { year: '2000', wheels: 4 }
audi.wheels = 3;
console.log(baseCar); // { year: '2000', wheels: 4 } - object stays unchanged
console.log(audi); // { year: '2000', wheels: 3 } - object was updated

/**
 * Duplicate via Object.assign
 * 
 * Object.assign(dest, ...sources)
 * @param {Object} dest       - The target object that will receive the properties. 
 *                              This object is modified and returned.
 * @param {...Object} sources - One or more source objects from which properties are copied. 
 *                              If multiple sources contain the same key,
 *                              the later source's property will overwrite 
 *                              the earlier one's property in the target object.
 * @returns {Object}          - The target object after it has been modified with properties from the source objects.
 */
const human = {
    age: 30,
    hair: 'blue',
};
const woman = {}; // new empty object
Object.assign(woman, human);
console.log(human); // { age: 30, hair: 'blue' }
console.log(woman); // { age: 30, hair: 'blue' }
human.hair = 'red';
console.log(human); // { age: 30, hair: 'red' } - object was updated
console.log(woman); // { age: 30, hair: 'blue' } - object stays unchanged
