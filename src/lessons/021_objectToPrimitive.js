/**
 * Object To Primitive Conversion
 * Rules:
 */
// 1. There is no conversion to boolean. All objects are 'true' in a boolean context

/* 
2. The numeric conversion jappens when we subtract objects or apply mathematical functions.
For instance, 'Date' objects can be subtracted,
and the result of date1 - date2 is the time difference between two dates
*/
let date1 = new Date();
let date2 = new Date();
console.log(date1 - date2); // 0

/*
3. As for the string conversion - it usually happens when we output an object
with console.log(obj) and in similar contexts
*/

/**
 * Symbol.toPrimitive
 */
let user = {
    name: 'John',
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == 'string' ? `{name: '${this.name}'}` : this.money;
    }
};

console.log(user); // print out object
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

/**
 * toString / valueOf
 */
let car = {
    name: 'audi',
    year: 1992,

    toString() {
        return `{name: '${this.name}'}`;
    },

    valueOf() {
        return this.year;
    }
};
console.log(car); // print out object
console.log(+car); // 1992
console.log(car + 500); // 2492
