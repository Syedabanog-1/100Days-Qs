var current_Array = [3, 7, 22, 'flowe', 'sweets', false, '92', '110', 'perfect', 100, 15, true];
function extractStrings(value) {
    return typeof value === "string";
}
var newArray = current_Array.filter(extractStrings);
console.log(" Current Array values:", current_Array);
console.log("String is fetched into new Array:", newArray);
