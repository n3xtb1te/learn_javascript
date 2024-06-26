/**
 * Symbol
 * A "symbol" represents a unique identifier
 * "symbol" is a "primitive unique value" with an optional description
 */
let id = Symbol('id');
let anotherIdWithSameDescription = Symbol('id');

console.log(id); // Symbol(id)
console.log(id.toString()); // Symbol(id)
console.log(id.description); // id

console.log(id == anotherIdWithSameDescription); // false
console.log(id === anotherIdWithSameDescription); // false
console.log(id.description == anotherIdWithSameDescription.description); // true

/**
 * Create identical Symbols
 * "global symbol registry"
 */
let id1 = Symbol.for('id');
let id2 = Symbol.for('id');
console.log(id1 == id2); // true
console.log(id1 === id2); // true

/**
 * Symbols in object literal
 */
let unique = Symbol('unique');
let car = {
    name: 'audi',
    year: 1992,
    [unique]: 1234,
};
console.log(car[unique]); // 1234

/**
 * Symbols are skipped by for..in loop
 */
let serialNumber = Symbol('serial number');
let laptop = {
    brand: 'apple',
    year: 2022,
    chip: 'M2',
    [serialNumber]: 1234,
};
for (let key in laptop) {
    console.log(laptop[key]); // apple -> 2022 -> M2
}
// Object.keys() also ignores Symbol
console.log(Object.keys(laptop)); // [brand, year, chip]

// Object.assign() copies both string and Symbol properties
let uuid = Symbol('uuid');
let person = {
    age: 32,
    year: 2000,
    country: 'GB',
    [uuid]: 1234,
};
let anotherPerson = Object.assign({}, person);
console.log(anotherPerson[uuid]); // 1234
