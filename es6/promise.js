/**
 * Created by weiqiujuan on 17-9-23.
 */
window.onload = function any_function_name() {
    let logging = document.getElementById('test-promise2-log');
    while (logging.children.length > 1) {
        logging.removeChild(logging.children[logging.children.length])
    }
    function log(s) {
        "use strict";
        let p = document.createElement('p');
        p.innerHTML = s;
        logging.appendChild(p);
    }
    //0.5 秒后返回input×input的结果
    function multiply(input) {
        return new Promsie(function (resolve, reject) {
            "use strict";
            log('calculating' + input + '*' + input + '...');
            setTimeout(resolve, 500, input * input);
        });
    }

    // 0.5秒后返回input+input的计算结果:
    function add(input) {
        return new Promise(function (resolve, reject) {
            "use strict";
            log('calculating' + input + "+" + input + '...');
            setTimeout(resolve, 500, input + input);
        });
    }

    let p = new Promise(function (resolve, reject) {
        "use strict";
        log('start new Promise...');
        resolve(123);
    });

    p.then(multiply).then(add).then(multiply).then(add).then(function (result) {
        log('dot value:' + 'result');
    });
};