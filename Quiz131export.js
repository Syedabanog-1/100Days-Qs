"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// In file: quiz131export.ts
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
exports.Person = Person;
// Exports the Person class
