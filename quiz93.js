"use strict";
// *Question 93:* Find the index of "Banana" in an array of fruits and replace it with "Mango".
Object.defineProperty(exports, "__esModule", { value: true });
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1)
        fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}
// Example: Replacing "Banana" in the array
const fruits = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.
