"use strict";
var Arithmatic;
(function (Arithmatic) {
    Arithmatic[Arithmatic["Add"] = 0] = "Add";
    Arithmatic[Arithmatic["Sub"] = 1] = "Sub";
    Arithmatic[Arithmatic["Div"] = 2] = "Div";
    Arithmatic[Arithmatic["Mul"] = 3] = "Mul";
})(Arithmatic || (Arithmatic = {}));
function calculate(a, b, type) {
    console.log(type);
    return 1;
}
const ans = calculate(1, 2, Arithmatic.Div);
