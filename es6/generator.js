/**
 * Created by weiqiujuan on 17-9-19.
 */
//generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。
//用gengeator实现斐波那契数列的函数
function* fib(max) {
    let tmp,
        a=0,
        b=1,
        n=1;
    while (n<max){
        yield a;
        tmp=a+b;
        a=b;
        b=tmp;
        n++;
    }
    return a;
}
for(let  x of fib(5)){
    alert(x);
}