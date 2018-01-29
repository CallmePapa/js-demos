/**
 * Created by 魏秋娟 on 2018/1/29.
 */
const numSquares = function (n) {
    "use strict";
    let b=Math.sqrt(n);
    let a=Math.ceil(b);
    let c=Math.floor(b);
    let lit=n-Math.pow(c,2);
    console.log(a+" "+b+" "+c+" "+lit);
};
numSquares(453);