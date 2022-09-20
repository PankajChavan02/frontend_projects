var i = 0;

function timedCount() {
    if(i<10000){
  i = i + 1;
  postMessage(i); 
    }
    setTimeout("timedCount()",500);
}

timedCount();