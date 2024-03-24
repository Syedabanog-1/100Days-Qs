"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiDecimal(x = 12.5, y = 5.14) {
    const resultD = Math.round(x * y);
    return resultD;
}
console.log(multiDecimal());
