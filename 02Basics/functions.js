"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
function login(email, password, otp) {
    return {
        email: email,
        password: password,
        otp: otp
    };
}
function getUpperCase(str) {
    console.log(str.toLocaleUpperCase());
    return str.toUpperCase();
}
var detail = login("prathamesh", "pune@123", 123);
console.log(detail.email + " " + detail.password + " " + detail.otp);
console.log(getUpperCase("hello world"));
var getValue = function (val, str) {
    return "";
};
function addTwo(val1, val2) {
    return val1 + val2;
}
console.log(addTwo(10, 9));
var heros = ["spiderman", "marvel dc", "power ranger"];
heros.forEach(function (n) { return console.log(n + " "); });
for (var i = 0; i < heros.length; i++) {
    var result = "";
    for (var j = 0; j < heros[i].length; j++) {
        result += heros[i][j];
        result += " ";
    }
    console.log(result);
}
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
