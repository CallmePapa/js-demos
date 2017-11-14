/**
 * Created by weiqiujuan on 17-11-14.
 */
'use strict';
class Car{
    constructor(name){
        this._name=name;
    }
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
}
let car=new Car("Tesla");
console.log(car.name);//Tesla
car.name='BMW';
console.log(car.name);//BMW