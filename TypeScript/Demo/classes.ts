import { age, Profession } from "./export";

class Person{
    fname:string
    lname:string

    greet(){
        console.log("hell from person class")
    }
}

class Programmer extends Person{
    greet(){
        console.log("hell from programmer")
    }

    greetings(){
        super.greet();
    }
}


class Employee{
    id:number=10    
    name:string="employee"
    salary:number=2000
    disp(){
        console.log("method inside employee")
    }
}

class Manager extends Employee{
    disp(){
        console.log("mehtod inside manager")
    }
}

const employee = new Manager()
employee.disp()

const employee1 = new Employee()
employee1.disp()


class PropertiesDemo{
    constructor(private x:number,private y:number){

    }

    getX(){
        return this.x
    }
}


//generic function

function generic<T>(params:T):T {
    return params;
}

console.log(generic("hi"))
console.log(generic(25.50))
console.log(generic(true))


//generic key value pair

class KeyValuePair<T,U>{
    constructor(private T, private U){

    }

    disp(){
        console.log(`key is ${this.T}  value is ${this.U}`)
    }
}

const obj1=new KeyValuePair(10,"hi")
const obj2=new KeyValuePair("hi",true)
obj1.disp()
obj2.disp()


//generic interface

interface IProcessor<T>
{
   result:T;
   process(a:T,b:T):T;
}

class Operation<T> implements IProcessor<T>{
    constructor(public result:T){
    }

    process(a:T,b:T):T{
        return a>b?a:b;
    }
}
const op = new Operation(10)
console.log(op.process(20,30))
console.log(op.process(30,20))


new Profession().disp()
console.log(age)