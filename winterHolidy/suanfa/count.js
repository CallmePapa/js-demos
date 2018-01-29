const digistCounts=function (k,n) {
    let count=0;
    let str='';
    k=k+'';
    for(let i=0;i<=n;i++){
        str+=i;
    }
    for(let j=0;j<str.length;j++){
        if(str[j]===k){
            count++;
        }
    }
    return count;
};