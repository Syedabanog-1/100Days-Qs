import inquirer from "inquirer";
let giveSum = await inquirer.prompt([
    { message: "Enter your Number a:", type: "number", name: "uNumber" },
    {
        message: " Select one operator to perform operations",
        type: 'list',
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
let n = 47;
console.log("Given Number n:", n);
//console.log(giveSum); 
if (giveSum.operator === "Addition") {
    let nSum = (giveSum.uNumber + n);
    console.log("Sum of a and b is:", nSum);
}
