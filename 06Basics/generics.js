"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function identityFive(val) {
    return val;
}
function identitySix(temp1) {
    return temp1;
}
var temp = {
    brand: "abc",
    name: "def"
};
var temp3 = identitySix(temp);
console.log(temp3);
