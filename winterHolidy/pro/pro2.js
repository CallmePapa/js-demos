/**
 * Created by 魏秋娟 on 2018/1/28.
 */
(function () {
    let initializing=false,
        superPatteren=/xyz/.test(function(){xyz;})?/\b_super\b/:/.*/;
    //object添加一个subclass方法
    Object.subClass=function(properties) {
        let _super = this.prototype;
        //初始化超类
        initializing = true;
        let proto = new this();
        initializing = false;
        //将属性复制到prototype里
        for (let name in properties) {
            proto[name] = typeof properties[name] === "function" && typeof _super[name]
            === "function" && superPatteren.test(properties[name]) ?
                //定义一个重载函数
                (function (name, fn) {
                    return function () {
                        let tmp = this._super;
                        this._super = _super[name];
                        let ret = fn.apply(this.arguments);
                        this._super = tmp;
                        return ret;
                    };
                })(name, properties[name]) : properties[name];
        }
        //创建一个仿真类构造器
        function Class() {
            if (!initializing && this.init) {
                this.init.apply(this, arguments);
            }
            Class.prototype = proto;
            Class.constructor = Class;
            Class.subClass = arguments.callee;
            return Class;
        }
    }
})();