/**
 * Created by 魏秋娟 on 2018/2/6.
 */
/*
function apply(thisArg,argArray){};*/
Function.method('bind',function (that) {
    //返回一个函数，调用这个函数就像是调用那个对象的一个方法
   let method=this,
       slice=Array.prototype.slice(),
       args=slice.apply(arguments,[1]);
   return function () {
       return method.apply(that,args.concat(slice.apply(arguments,[0])));
   };
});

let x=function () {
    return this.value;
}.bind({value:666});
console.log(x);
