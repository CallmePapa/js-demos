/**
 * Created by weiqiujuan on 17-9-19.
 */
//class继承
class Stuent{
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    hello(){
        alert("hello,"+this.name+'!');
        alert(this.name+'的成绩'+this.grade+".")
    }
}
let weiqiujuan=new Stuent('魏秋娟',98);
weiqiujuan.hello();