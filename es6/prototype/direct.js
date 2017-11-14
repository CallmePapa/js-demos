/**
 * Created by weiqiujuan on 17-11-14.
 */
'use strict';

//ES6
let getKey = () => '123',
    obj = {
        foo: 'bar',
        ['key_' + getKey()]: 123
    };
console.log(obj);

//ES5
/*
var getKey = function () {
        return '123';
    },
    obj = {
        foo: 'bar'
    };
obj['key_' + getKey()] = 123;
console.log(obj);*/
