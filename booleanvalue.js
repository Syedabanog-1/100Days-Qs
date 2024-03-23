"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function check_BooleanV(a = 18, b = 27, c = 31) {
    if (a < c && c > b) {
        console.log(" Both condition are true result is: true");
    }
    else if (b < a && c > b) {
        console.log("only 1 condition is true result is: false");
    }
    return;
}
check_BooleanV();
