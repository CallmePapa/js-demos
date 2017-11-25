/**
 * Created by weiqiujuan on 17-11-14.
 */
'use strict';
//解构赋值
let point = [1, 2];
let [x, y] = point;
console.log(x);
console.log(y);
//reverse
[x, y] = [y, x];
console.log(x);//2
console.log(y);//1

/*let hello=[1,2,3];
 let [a, ,c]=hello;
 console.log(a);//1
 console.log(c);//3*/

let nihao = [1, [2, 3], 4];
let [a, b, c] = nihao;
console.log(a);//1
console.log(b);//2
console.log(c);//4

let [head, ...tall] = [1, 2, 3, 4];
console.log(head);
console.log(tall);

//解构对象
let points = {
    x: 1,
    y: 2
};
let {x, y} = points;
console.log(x);//1
console.log(y);//2
//变量名和属性名不同
let points2 = {
    x: 1,
    y: 2
};
let {x: a, y: b} = points2;
console.log(a);
console.log(b);
//嵌套
let point3 = {
    x: 1,
    y: 2,
    z: {
        one: 3,
        two: 4
    }
};
let {x: a, y: b, z: {one: c, two: d}} = point3;
console.log(a);//1
console.log(b);//2
console.log(c);//3
console.log(d);//4

//函数模拟
function mix() {
    return {
        a: 1,
        b: 2,
        values: [3, 4, 5]
    };
}
let {a: x, b: y, values: [z, , m]} = mix();
console.log(x);//1
console.log(y);//2
console.log(z);//3
console.log(m);//5

//字符串解构
const [a, b, c, d, e] = 'hello';
let {length: len} = 'hello';
len//5
