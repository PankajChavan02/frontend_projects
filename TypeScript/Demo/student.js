"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(fullname, address, scholership) {
        this.fullname = fullname;
        this.address = address;
        this.scholership = scholership;
    }
    Student.prototype.disp = function () {
        if (!this.scholership)
            console.log("Student name : " + this.fullname + "  address: " + this.address);
        else
            console.log("Student name : " + this.fullname + "  address: " + this.address + " with scholership ");
    };
    return Student;
}());
exports.Student = Student;
