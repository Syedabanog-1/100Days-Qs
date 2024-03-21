"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let userProfile = await inquirer_1.default.prompt([
    { message: "Enter your First Name:", type: "string", name: "firstName" },
    { message: "Enter your Second Name:", type: "string", name: "secondName" },
    { message: "Enter your age:", type: "string", name: "userAge" },
    { message: "Country:", type: "string", name: "Country" },
    { message: "City:", type: "string", name: "City" },
    { message: "Enter NIC:", type: "string", name: "NIC" },
]);
//console.log(userProfile); 
