import inquirer from "inquirer";
let userProfile = await inquirer.prompt([
    { message: "Enter your First Name:", type: "string", name: "firstName" },
    { message: "Enter your Second Name:", type: "string", name: "secondName" },
    { message: "Enter your age:", type: "string", name: "userAge" },
    { message: "Country:", type: "string", name: "Country" },
    { message: "City:", type: "string", name: "City" },
    { message: "Enter NIC:", type: "string", name: "NIC" },
]);
console.log(userProfile);
