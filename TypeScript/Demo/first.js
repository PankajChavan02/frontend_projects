// provide type to a variable
var message = "Hello from Typescript";
console.log(message);
//Array in typescript
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list1);
console.log(list2);
//enum
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["yellow"] = 5] = "yellow";
    colors[colors["blue"] = 6] = "blue";
})(colors || (colors = {}));
var c = colors.red;
console.log('c : ' + c);
console.log(colors.blue);
console.log(colors.yellow);
//concept of tuple
var touplevariable = [10, "hi"]; //more than two values are not accepted
var z = ["hi", 10];
// concept of type : any   
// can take any type of value
//no intellegence support
var x = "hi"; //string
x = 20; //number
x = true; //boolean
//Concept of Union type
//intellegence support
var y = 10;
y = "hi";
//y=true;  //gives error
//concept of optional  parameter in functions
function disp(x, y, z) {
    return x + y;
}
console.log(disp(3, 5)); //z is the optional param so no error here
console.log(disp(3, 4, 5));
//disp(3,"hi")  // gives error
//arrow functions
var value = function (x, y) {
    return x + y;
};
console.log('value : ' + value(5, 4));
//rest functions / variable number of parameters
function anynoofvariables(x) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return x + " " + names.join(",") + " !";
}
console.log(anynoofvariables("hi", "how", "are", "you"));
console.log(anynoofvariables("?"));
//passing object in functions 
function fullName(person) {
    console.log(person.fname + "   " + person.lname);
}
var person = {
    fname: "Pankaj",
    lname: "Chavan"
};
fullName(person);
