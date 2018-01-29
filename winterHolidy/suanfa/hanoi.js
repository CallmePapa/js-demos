let hanvo=function (disc,src,aux,dst) {
    // body...
    if(disc>0){
        hanvo(disc-1,src,dst,aux);
        console.log("move "+disc+" from "+src+" to "+dst);
        hanvo(disc-1,aux,src,dst);
    }
};
hanvo(3,"src","aux","dst");