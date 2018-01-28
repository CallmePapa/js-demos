/**
 * Created by 魏秋娟 on 2018/1/28.
 */
let myObject=(function () {
    let value=0;
    return {
        increament:function (inc) {
            value+=typeof inc==='number'?inc:1;
        },
        getValue:function () {
            return value;
        }
    };
}());

let quo=function (status) {
    return{
        get_status:function () {
            return status;
        }
    }
};
let myQuo=quo("hello");
console.log(myQuo.get_status());