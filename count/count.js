/**
 * Created by weiqiujuan on 17-9-10.
 */
function count() {
    let txt1=document.getElementById("txt1").value;
    let txt2=document.getElementById("txt2").value;
    let operator=document.getElementById("operator").value;
    let result="";
    switch(operator){
        case '+':
            result=parseInt(txt1)+parseInt(txt2);
            break;
        case '-':
            result=parseInt(txt1)-parseInt(txt2);
            break;
        case '*':
            result=parseInt(txt1)*parseInt(txt2);
            break;
        case '/':
            result=parseInt(txt1)/parseInt(txt2);
            break;
    }
    document.getElementById("result").value=result;
}

window.onload=function () {
    let amount=document.getElementById("amount");
    amount.onclick=count;
}