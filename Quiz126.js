"use strict";
// *Question 126:* Explain how the this keyword changes its value when used inside a nested function within a method.
Object.defineProperty(exports, "__esModule", { value: true });
// Demonstrates 'this' behavior change in a nested function
const myObject = {
    property: "Value",
    outerMethod: function () {
        console.log("By outerMethod:", this.property); // Works as expected, logs "Value"
        const innerMethod = () => {
            console.log("By innerMethod:", this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
        };
        innerMethod();
    },
};
myObject.outerMethod();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
