//将number转换成一个指数形式的字符串；
// number.toExponential(fractionDigits);
console.log(Math.PI.toExponential(7));

//将number转换成一个十进制的字符串；
console.log(Math.PI.toFixed(4));//3.1416
console.log(Math.PI.toPrecision(4));//3.142


//将number转换成一个字符串,number.toString(radix);radix默认以10为基数，范围为2·26；
console.log(Math.PI.toString(8));