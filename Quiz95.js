"use strict";
// *Question 95:* Write a function that uses the .filter() method to return an array of numbers greater than 10.
Object.defineProperty(exports, "__esModule", { value: true });
// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
// Example: Filtering an array of numbers
const numbers = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers)); // Outputs: [15, 20, 25]
// The new array contains only the numbers that are greater than 10.
