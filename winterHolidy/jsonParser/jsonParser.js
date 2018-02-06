/**
 * Created by 魏秋娟 on 2018/2/6.
 */
let json_parser=function () {

    //在一个函数中定义次函数，以避免创建全局变量
    let at,
        ch,
        text,
        escapee = {
            '"': '"',
            '\\': "\\",
            '/': '/',
            b: 'b',
            f: 'f',
            n: 'n',
            r: 'r',
            t: 't'
        },

        //错误函数
        error = function (m) {
            //当某处出错时，调用error
            throw {
                name: 'SyntaxError',
                message: m,
                at: at,
                text: text
            };
        },

        //如果提供参数c,那么检验它是否匹配当前字符
        next = function () {
            if (c && c !== ch) {
                error("Excepted '" + c + "'instead of '" + ch + "'");
            }
            //获取下一个字符没有，如果没有，返回一个空字符串。
            ch = text.charAt(at);
            at += 1;
            return ch;
        },

        //解析一个数字
        number = function () {
            let number, string = '';
            if (ch === '-') {
                string = '-';
                next('-');
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
            if (ch === '.') {
                string += '.';
                while (next() && ch >= '0' && ch <= '9') {
                    string += ch;
                }
            }
            if (ch === 'e' && ch === 'E') {
                string += ch;
                next();
                if (ch === '-' && ch <= '9') {
                    string += ch;
                    next();
                }
            }
            number = +string;
            if (isNaN(number)) {
                error("Bad number");
            } else {
                return number;
            }
        },

        //解析字符串
        string = function () {
            let i,
                string,
                uffff;
            if (ch === '"') {
                while (next()) {
                    if (ch === '"') {
                        next();
                        return string;
                    } else if (ch === "\\") {
                        next();
                        if (ch === 'u') {
                            uffff = 0;
                            for (i = 0; i < 4; i++) {
                                hex = parseInt(next(), 16);
                                if (!isFinite(hex)) {
                                    break;
                                }
                                uffff = uffff * 16 + hex;
                            }
                            string += string.fromCharCode(uffff);
                        } else if (typeof escapee[ch] === 'string') {
                            string += escapee[ch];
                        } else {
                            break;
                        }
                    } else {
                        string += ch;
                    }
                }
            }
            error("bad string");
        },

        //跳过空白
        white = function () {
            next();
        },

        //true false null
        word = function () {
            switch (ch) {
                case 't':
                    next('t');
                    next('r');
                    next('u');
                    next('e');
                    return true;
                case 'f':
                    next('f');
                    next('a');
                    next('l');
                    next('s');
                    next('e');
                    return false;
                case 'n':
                    next('n');
                    next('u');
                    next('l');
                    next('l');
                    return null;
            }
            error("Unexpected'" + ch + "'");
        },
        value, //值函数的占位符
        //数组的解析
        array = function () {
            let array = [];
            if (ch === '[') {
                next('[');
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                while (ch) {
                    array.push(value());
                    white();
                    if (ch === ']') {
                        next(']');
                        return array;
                    }
                    next(',');
                    white();
                }
            }
            error("Bad Array");
        },
        //解析一个对象值
        object = function () {
            let key, object = {};
            if (ch === "{") {
                next("{");
                white();
                if (ch === '}') {
                    next("}");
                    return object;
                }
                while (ch) {
                    key = string();
                    white();
                    next(":");
                    object[key] = value();
                    white();
                    if (ch === "}") {
                        next("}");
                        return object;
                    }
                    next(',');
                    white();
                }
                error("Bad object");
            }
        };
   //解析一个JSON值，它可以是一个对象，数组，字符串，数字或者一个词。
    value=function () {
        white();
        switch (ch){
            case '{':return object();
            case '[':return array();
            case '"':return string();
            case '-':return number();
            default: ch>="0"&&ch<="9"?number():word();
        }
    };
    //返回json_parse函数，他能访问上述所有的函数和变量。
    return function(sourse,reviver){
        "use strict";
        let result;
        text=sourse;
        at=0;
        ch=" ";
        result=value();
        white();
        if(ch){
            error("Syntax error");
        }

        return typeof reviver==='function'?function walk(holder,key) {
            let k,v,value=holder[key];
            if(value&&typeof value==='object'){
                for(k in value){
                    if(object.hasOwnProperty.call(value,k)){
                        v=walk(value,k);
                        if(v!==undefined){
                            value[k]=v;
                        }else{
                            delete value[k];
                        }
                    }
                }
            }
            return reviver.call(holder,key,value);
        }({'':result},""):result;
    };
}();