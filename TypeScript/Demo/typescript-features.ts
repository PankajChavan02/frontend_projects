//normal function
function add(a:number,b:number){
     return a+b;
}

console.log(`add : ${add(14.5,25.5)}`)

//optional function
function addOptional(x:number,y?:number) {
    if(y)
      return x+y;
    else 
      return x;
}

console.log(`add optional : ${addOptional(10,15)}`)
console.log(`add optional : ${addOptional(10)}`)

//function with rest operator 

function addAll(i:number,... numbers:number[]){
    if(numbers.length!=0){
        for(const numb of numbers){
             i = i + numb;
        }
    }
    return i;
}

console.log(`addition addAll(10) ${addAll(10)}`)
console.log(`addition addAll(10,20) ${addAll(10,20)}`)
console.log(`addition addAll(10,20,30) ${addAll(10,20,30)}`)


//function with object as a parameter

function employee(person:{fullname:string,address:string,age:number}){
    console.log(`Employee name: ${person.fullname}  address: ${person.address}  age: ${person.age} `)
}

const object = {
    fullname:"Mahesh",
    address:"Pune",
    age:25
}

employee(object);


//arrow function
const disp=(x:number,y:number)=>x*y;
console.log(disp(15,3))

//generic function
function generic<T>(val:T):T {
    return val;    
}
console.log("Generic funcion outputs: ")
console.log(generic(100))
console.log(generic(true))
console.log(generic("Hello"))
console.log(generic(object))