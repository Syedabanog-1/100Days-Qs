//Area of Rectangle and doing Refactored using areo function
var AreaOfRec = function (width, hight, sentence) {
    if (width === void 0) { width = 5; }
    if (hight === void 0) { hight = 12; }
    if (sentence === void 0) { sentence = "Calculate Area Of Rectangle using Aero Function:"; }
    return console.log(sentence, width * hight);
};
AreaOfRec();
function rec_Area(width, hight, sentence) {
    if (width === void 0) { width = 10; }
    if (hight === void 0) { hight = 20; }
    if (sentence === void 0) { sentence = "Calculate Area Of Rectangle using Tradition Function:"; }
    var A_Rec = console.log(sentence, width * hight);
    return A_Rec;
}
rec_Area();
rec_Area(30, 45);
