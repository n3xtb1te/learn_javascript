/**
 * Object methods
 */
let user = {
    name: 'John',
    age: 30,
    sayHello() { // treated by JS as a method
        console.log('Hello!');
    },
    sayBonjorno: () => { // treated by JS as a property (why???)
        console.log('Bonjorno!');
    },
    sayGuttenTag: function() { // treated by JS as a property (why???)
        console.log('Gutten Tag!');
    }
};

user.sayGoodbye = () => {
    console.log('Goodbye!');
}

user.sayHello(); // Hello!
user.sayBonjorno(); // Bonjorno!
user.sayGuttenTag(); // Gutten Tag!
user.sayGoodbye(); // Goodbye!

/**
 * "this" keyword
 * 
 * To access the object, a method can use the "this" keyword
 */
let car = {
    name: "bmw",
    year: 1992,

    provideInformation() {
        console.log(`${this.name} released in ${this.year}`);
    },
}
car.provideInformation(); // bmw released in 1992

/**
 * Arrow functions do not have "this"
 */
let human = {
    name: 'John',
    sayHello: () => {
        console.log(this.name); // doesn't have "this"
    },
    sayHi() {
        let arrow = () => console.log(this.name); // referce to sayHi() "this"
        arrow();
    }
};
human.sayHello(); // undefined
human.sayHi(); // John

/**
 * Tasks
 */
let calculator = {
    read() {
        this.a = 5;
        this.b = 10;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    },
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep();