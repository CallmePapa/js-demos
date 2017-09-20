/**
 * Created by weiqiujuan on 17-9-20.
 */
function success(text) {
    let textarea=document.getElementById('text-response-text');
    textarea.value=text;
}
function fail(code) {
    let textarea=document.getElementById('text-respomse-text')
    textarea.value='error code:'+code;
}
let request=new XMLHttpRequest();//新建一个请求对象
request.onreadystatechange=function () {
    if(request.readyState===4){
        //成功完成
        //判断响应结果：
        if(request.status===200){
            //成功你，通过responseText拿到响应的文本：
            return success(request.responseText);
        }else{
            //失败，根据响应码判断失败原因：
            return fail(request.status);
        }
    }
    else{
        //http请求还在继续。。。
    }
}
request.open('GET','/api/categories');
request.send();
alert('请求已发送，等待响应。。。');