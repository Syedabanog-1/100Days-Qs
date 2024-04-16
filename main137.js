"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Demonstrates using a try-catch block to handle errors
try {
    // Intentionally cause an error
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error); // Logs the error message
}
// This code tries to execute a block that throws an error, and the catch block handles the error gracefully.
