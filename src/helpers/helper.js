import { names } from '../data/constants.js';

export class Helper {
    getRandomValue = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    generateObject = () => {
        return {
            name: this.getRandomValue(names),
            age: Math.floor(Math.random() * 50),
        };
    }

    updateNameProperty = (object) => {
        object.name = this.getRandomValue(names);
        return object;
    }
}