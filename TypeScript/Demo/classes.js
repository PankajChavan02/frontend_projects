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
exports.__esModule = true;
var export_1 = require("./export");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("hell from person class");
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("hell from programmer");
    };
    Programmer.prototype.greetings = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 10;
        this.name = "employee";
        this.salary = 2000;
    }
    Employee.prototype.disp = function () {
        console.log("method inside employee");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.disp = function () {
        console.log("mehtod inside manager");
    };
    return Manager;
}(Employee));
var employee = new Manager();
employee.disp();
var employee1 = new Employee();
employee1.disp();
var PropertiesDemo = /** @class */ (function () {
    function PropertiesDemo(x, y) {
        this.x = x;
        this.y = y;
    }
    PropertiesDemo.prototype.getX = function () {
        return this.x;
    };
    return PropertiesDemo;
}());
//generic function
function generic(params) {
    return params;
}
console.log(generic("hi"));
console.log(generic(25.50));
console.log(generic(true));
//generic key value pair
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(T, U) {
        this.T = T;
        this.U = U;
    }
    KeyValuePair.prototype.disp = function () {
        console.log("key is " + this.T + "  value is " + this.U);
    };
    return KeyValuePair;
}());
var obj1 = new KeyValuePair(10, "hi");
var obj2 = new KeyValuePair("hi", true);
obj1.disp();
obj2.disp();
var Operation = /** @class */ (function () {
    function Operation(result) {
        this.result = result;
    }
    Operation.prototype.process = function (a, b) {
        return a > b ? a : b;
    };
    return Operation;
}());
var op = new Operation(10);
console.log(op.process(20, 30));
console.log(op.process(30, 20));
new export_1.Profession().disp();
console.log(export_1.age);
