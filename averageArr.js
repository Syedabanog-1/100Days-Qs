var numbersA = [1, 3, 5, 7, 9, 13, 17, 19, 23];
var i = numbersA.length;
var sum = 0;
numbersA.forEach(function (n) { return sum += n; });
console.log(" Average of Arrya numbers is :", sum / i);
