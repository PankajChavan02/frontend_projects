export class Student{
    constructor(private fullname:string,private address:string,private scholership?:boolean){

    }

    disp(){
        if(!this.scholership)
           console.log(`Student name : ${this.fullname}  address: ${this.address}`)
        else 
           console.log(`Student name : ${this.fullname}  address: ${this.address} with scholership `)
    }
}


