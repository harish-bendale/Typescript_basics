"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function provideId(id) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs === null) {
        console.log("provide strs it's null");
    }
    else if (strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var str = strs_1[_i];
            console.log(str);
        }
    }
    else {
        for (var _a = 0, strs_2 = strs; _a < strs_2.length; _a++) {
            var str = strs_2[_a];
            console.log(str);
        }
    }
}
printAll("avsdsd");
printAll(["adnid", "wcnbw", "ibvjw"]);
var arr = new Array();
function anotherFunction3(arr) {
    if (arr instanceof Array) {
        console.log("It's the instance of the array");
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var val = arr_1[_i];
            console.log(val);
        }
    }
    else if (typeof arr === "string") {
        console.log("It's a string");
    }
    else {
        console.log("It's null");
    }
}
anotherFunction3([2, 3, 4, 5]);
anotherFunction3("abfkf");
anotherFunction3(null);
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return "Fish food";
    }
    else {
        return "Bird food";
    }
}
var pi = 3.14;
function calculateArea(shape) {
    switch (shape.kind) {
        case "triangle":
            return pi * shape.length * shape.height;
        case "square":
            return shape.side * shape.side;
        default:
            var _defaultForShape = shape; // checks is all the type included in switch or not
            // if we remove square from this case will through error square is not assignable to never 
            return _defaultForShape;
    }
}
console.log("Area of the shape is " + calculateArea({ kind: "square", side: 10 }));
