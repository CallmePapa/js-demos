/**
 * Created by weiqiujuan on 17-11-14.
 */
'use strict';

const items = [1, 2, 3, 4];

let byTwo = items.map(i => i * 2);
console.log(byTwo);

let byFour = items.map(i => {
    return i * 2;
});
console.log(byFour);

//绑定ｔｈｉｓ
function Person() {
    this.company = 'huawei';
    this.names = ['Jack', 'weiqiujuan', 'niuyuxiao'];
    this.print = () => {
        return this.names.map((n) => {
            return n + ' this form ' + this.company;
        });
    };
}
console.log(new Person().print());

function hello() {
    setTimeout(() => {
        console.log('args:', arguments)
    }, 1000);
}
hello(1, 2, 3, 5);