"use strict";
exports.__esModule = true;
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(fullname, address) {
        var subjects = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            subjects[_i - 2] = arguments[_i];
        }
        this.fullname = fullname;
        this.address = address;
        this.subjects = subjects;
    }
    Teacher.prototype.disp = function () {
        console.log("Teacher name : " + this.fullname + "  address: " + this.address + " ");
        if (this.subjects.length > 0) {
            console.log("Subjects : ");
            for (var _i = 0, _a = this.subjects; _i < _a.length; _i++) {
                var subject = _a[_i];
                console.log(subject);
            }
        }
    };
    return Teacher;
}());
exports.Teacher = Teacher;
