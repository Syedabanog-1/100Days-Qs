"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let enterNum = parseInt(prompt("Enter your number:"));
let guessNum = parseInt(prompt("Enter guess number:"));
if (guessNum >= 5 && guessNum <= 45) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("Sorry! you could not guess right number");
}
