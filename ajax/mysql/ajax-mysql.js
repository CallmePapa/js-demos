/**
 * Created by weiqiujuan on 17-11-25.
 */
function showCustomer(str) {
    let xmlhttp;
    if(str===""){
        document.getElementById('txtHint').innerHTML="";
        return;
    }
    if(window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function () {
        if(xmlhttp.readyState===4&&xmlhttp.status===200){
            document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET","./getCustomer.php?q="+str.true);
    xmlhttp.send();
}