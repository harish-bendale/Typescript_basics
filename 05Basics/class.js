"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        this.salary = 0;
        this.githubId = 0;
        this.role = "learner";
        this.name = name;
        this.age = age;
    }
    User.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(User.prototype, "setSalary", {
        set: function (salary) {
            this.salary = salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getSalary", {
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getGithubId", {
        get: function () {
            return this.githubId;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.githubId = 20;
        return _this;
    }
    Object.defineProperty(SubUser.prototype, "getGithubId", {
        get: function () {
            return this.githubId;
        },
        enumerable: false,
        configurable: true
    });
    return SubUser;
}(User));
var user4 = new User("ABC", 57);
console.log(user4.name + " " + user4.age);
user4.setSalary = 40;
user4.getSalary;
var user5 = new User("BCD", 58);
var user6 = new SubUser("CDE", 59);
console.log(user5.getGithubId + " " + user6.getGithubId);
