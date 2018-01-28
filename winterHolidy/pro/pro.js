/**
 * Created by 魏秋娟 on 2018/1/28.
 */
//通过subclass()方法，创建一个person类作为Object的一个子类
let person=Object.subClass({
    init:function (isDancing) {
        this.dancing=isDancing;
    },
    dance:function () {
        return this.dancing;
    }
});
//创建一个Ninja子类，继承person
let Ninja=person.subClass({
    init:function () {
        this._super(false);//调用父类构造器的方法
    },
    dance:function () {
        return this._super();
    },
    swingSword:function () {
        return true;
    }
});
//创建实例对person类进行测试
let personTest=new person(true);
assert(personTest.dance(),"The person is dancing");

//创建一个实例对Ninja类进行测试，看是否有swingSword方法以及继承来的dance方法
let ninja=new Ninja();
assert(ninja.swingSword(),"The sword is swinging.");
assert(!ninja.dance(),"The ninja is not dancing");
assert(personTest instanceof person,"person is a person");
assert(ninja instanceof Ninja&& ninja instanceof person,"Ninja is a Ninja and a person");