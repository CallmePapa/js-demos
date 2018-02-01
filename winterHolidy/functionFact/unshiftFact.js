/**
 * Created by 魏秋娟 on 2018/2/1.
 */
Array.method("unshift",function () {
    this.splice.apply(this,[0,0].concat(Array.prototype.slice.apply(arguments)));
    return this.length;
});