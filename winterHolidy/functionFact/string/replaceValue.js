/**
 * Created by 魏秋娟 on 2018/2/6.
 */

//封装一个函数，每次需要匹配的时候就调用它
String.method('entityify',function () {
    let character={
        '<':"&lt;",
        '>':"&gt;",
        '&':'$amp;',
        '"':'&quot;'
    };
    return function () {
        return this.replace(/[<>&"]/g,function (c) {
            return character[c];
        });
    };
}());
console.log("<&>".entityify());