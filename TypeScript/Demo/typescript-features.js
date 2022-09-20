//normal function
function add(a, b) {
    return a + b;
}
console.log("add : " + add(14.5, 25.5));
//optional function
function addOptional(x, y) {
    if (y)
        return x + y;
    else
        return x;
}
console.log("add optional : " + addOptional(10, 15));
console.log("add optional : " + addOptional(10));
//function with rest operator 
function addAll(i) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    if (numbers.length != 0) {
        for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
            var numb = numbers_1[_a];
            i = i + numb;
        }
    }
    return i;
}
console.log("addition addAll(10) " + addAll(10));
console.log("addition addAll(10,20) " + addAll(10, 20));
console.log("addition addAll(10,20,30) " + addAll(10, 20, 30));
//function with object as a parameter
function employee(person) {
    console.log("Employee name: " + person.fullname + "  address: " + person.address + "  age: " + person.age + " ");
}
var object = {
    fullname: "Mahesh",
    address: "Pune",
    age: 25
};
employee(object);
//arrow function
var disp = function (x, y) { return x * y; };
console.log(disp(15, 3));
//generic function
function generic(val) {
    return val;
}
console.log("Generic funcion outputs: ");
console.log(generic(100));
console.log(generic(true));
console.log(generic("Hello"));
console.log(generic(object));
