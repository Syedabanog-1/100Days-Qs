let curArray:  number []= [1,92,110,5,12,14];
let doubleNum: number[] = curArray.map((numD) => {
    return numD * 2
});
console.log("Current Number: ", curArray);
console.log(" Number are double in new Array: ", doubleNum);