"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data6 = {
    id: 123,
    email: "abc@.com",
    userId: 1111,
    googleId: "234",
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (name, val) {
        if (name === void 0) { name = "ChristamsSale"; }
        if (val === void 0) { val = 10; }
        console.log(name + " " + val);
        return 10;
    }
};
data6.email = "h2@.com";
console.log(data6);
console.log(data6.startTrial());
console.log(data6.getCoupon("ABC", 0));
