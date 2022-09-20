let x = 0;
let m=0; let s=0;
function timer(){
    if(x<900){          
        s++;
        if(s==60){
            m+=1
            s=0
        }
        postMessage(m+" : "+s)
    }
    x+=1
    setTimeout("timer()",1000)
        
}

timer()