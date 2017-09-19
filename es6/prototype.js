/**
 * Created by weiqiujuan on 17-9-19.
 */
//js的原型继承实现方法：
//1:定义新的构造函数，并在内部用Call()调用希望“继承”的构造函数，并绑定this；
//2：借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；
//3：继续在新的构造函数的原型上定义新方法。


function inherits(child,parent) {
    let F=function () {};
    F.prototype=parent.prototype;
    child.prototype=new F();
    child.prototype.constructor=child;
}

function student(props) {
    this.name=props.name||'unnamed';
}

student.prototype.hello=function () {
    alert('hi'+this.name+'!');
};
function PrimaryStudent(props) {
    student.call(this.props);
    this.grade=props.grade||1;
}
//实现原型继承链
inherits(PrimaryStudent,student);

//绑定其他方法到primarystudent原型
PrimaryStudent.prototype.getGrade=function () {
    return this.grade;
};