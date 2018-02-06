/**
 * Created by 魏秋娟 on 2018/2/6.
 */
RegExp.method('test',function (string) {
    return this.exec(string)!==null;
});