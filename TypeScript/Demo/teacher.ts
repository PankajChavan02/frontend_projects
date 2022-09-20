export class Teacher {
    private subjects:string[];
    constructor(private fullname:string,private address:string,... subjects:string[]){
        this.subjects=subjects;
    }

    disp(){
           console.log(`Teacher name : ${this.fullname}  address: ${this.address} `)
           if(this.subjects.length>0){
                console.log("Subjects : ")
                for(const subject of this.subjects){
                    console.log(subject)
                }
        }
    }
}