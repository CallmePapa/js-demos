/**
 * Created by 魏秋娟 on 2018/2/6.
 */
//string.charAt(pos);返回string中pos的位置处的字符；
String.method('charAt',function (pos) {
    return this.slice(pos,pos+1);
});

//string.charCodeAt(pos);返回的是字符串的数字编码
let name ='weiqiujuan';
let intal=name.charCodeAt(5);
console.log(intal);