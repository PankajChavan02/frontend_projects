// provide type to a variable
    var message:string = "Hello from Typescript";
    console.log(message);

//Array in typescript
    let list1:number[]=[1,2,3];
    let list2:Array<number>=[1,2,3];
    console.log(list1);
    console.log(list2);

//enum
    enum colors {red,yellow=5,blue}
    let c:colors=colors.red
    console.log('c : '+c)
    console.log(colors.blue)
    console.log(colors.yellow)

//concept of tuple
    const touplevariable:[number,string]=[10,"hi"]; //more than two values are not accepted
    let z:[string,number]=["hi",10]

// concept of type : any   
// can take any type of value
//no intellegence support
    let x:any="hi"; //string
    x=20;           //number
    x=true;         //boolean


//Concept of Union type
//intellegence support
    let y:(string|number)=10
    y="hi"
    //y=true;  //gives error


//concept of optional  parameter in functions
    function disp(x:number,y:number,z?:number):number
    {
        return x+y;

    }
    console.log(disp(3,5)) //z is the optional param so no error here
    console.log(disp(3,4,5))
    //disp(3,"hi")  // gives error


//arrow functions
    const value = (x:number,y:number):number=>{
    return x+y;
    }
    console.log('value : '+value(5,4))

//rest concept / variable arguments
function anynoofvariables(x:string, ... names:string[]):string{
        return x+" "+names.join(",")+" !"
    }
   console.log(anynoofvariables("hi","how","are","you"))
   console.log(anynoofvariables("?"))


//passing object in functions 
    function fullName(person:{fname:string,lname:string}) {
        console.log(person.fname+"   "+person.lname)
    }

    const person={
        fname:"Pankaj",
        lname:"Chavan"
    }

    fullName(person)



