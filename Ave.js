import inquirer from "inquirer";
let giveAve = await inquirer.prompt([
    { message: "Enter your First Number", type: "number", name: "firstNumber" },
    { message: "Enter your Second Number", type: "number", name: "secondNumber" },
    {
        message: " Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
console.log(giveAve);
if (giveAve.operator === "Addition") {
    let aveN = (giveAve.firstNumber + giveAve.secondNumber) / 2;
    console.log(aveN);
}
