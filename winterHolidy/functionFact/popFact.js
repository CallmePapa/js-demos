/**
 * Created by 魏秋娟 on 2018/2/1.
 */
Array.method('pop',function () {
    return this.splice(this.length-1,1)[0];
});