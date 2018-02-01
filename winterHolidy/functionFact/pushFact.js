/**
 * Created by 魏秋娟 on 2018/2/1.
 */
Array.method('push',function () {
    this.splice.apply(
        this,
        [this.length,0].concat(Array.prototype.slice.apply(arguments))
    );
    return this.length;
});