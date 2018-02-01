/**
 * Created by 魏秋娟 on 2018/2/1.
 */
let eventuality=function (that) {
    let registry={};

    that.fire=function (event) {
        //在一个对象上触发一个事件。该事件却可以是一个包含事件名称的字符串
        //或者是一个拥有包含事件名称的type属性的对象
        let array,func,hander,i,
            type=typeof  event==="string"?event:event.type;
       //如果这个事件存在一组事件处理程序，那么就遍历他们并且按顺序依次执行
        if(registry.hasOwnProperty(type)){
            array=registry[type];
            for(i=0;i<array.length;i++){
                hander=array[i];
       //每个处理程序包含一个方法和一组可选的参数
       //如果该方法是一个字符串形式的名字，那么寻找到该函数。
                func.apply(this,hander.parameters||[event]);
            }
        }
        return this;
    };

    //通过On方法注册的事件处理程序中匹配事件名称的函数将被调用。
    that.on=function (type,method,parameters) {
        //注册一个事件。构造一条处理程序条目。将其插入到处理程序数组中。
        // 如果这种类型的事件还不存在，就构造一个。
        let handler={
            method:method,
            parameters:parameters
        };
        if(registry.hasOwnProperty(type)){
            registry[type].push(handler);
        }else{
            registry[type]=[handler];
        }
        return this;
    };
    return that;
};
eventuality(that);

//我们可以再任何对象上调用eventuality,授予它事件处理方法。我们也可以在that被返回前在一个构造器函数中调用它。
//这种方式，一个构造器函数可以从一套部件中把对象组装出来。
//如果我们想要evnetuality访问该对象的私有状态，可以吧私有成员集my传给它。