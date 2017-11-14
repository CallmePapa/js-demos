/**
 * Created by weiqiujuan on 17-11-14.
 */
'use strict';
class Logger {
    constructor(type = "Info") {
        this.type = type;
    }

    //static methods
    static create(type) {
        return new this(type);
    }

    //getters
    get current() {
        return "logger:${this.type}";
    }

    //and setters
    set current(type) {
        this.type = type;
    }

    log(message) {
        let msg = '%c ${new Date().toString()}:${message}';

        switch (this.type) {
            case "Info":
                console.log(msg, 'background:#659cef;color:#fff;font-size:14px;'
                );
                break;
            case 'Error':
                console.log(msg, 'background: red; color: #fff;font-size:14px;'
                );
                break;
            case "Debug":
                console.log(msg,
                    'background: #e67e22; color:#fff; font-size:14px;'
                );
                break;
            default:
                console.log(msg);
        }
    }
}

//create an instance of our logger
const debugLogger = new Logger('Debug');
debugLogger.log("hello");
debugLogger.log(debugLogger.current);

//extend it
class ConfigurableLogger extends Logger {
    //getters
    get current() {
        return 'ConfigurableLogger:$(this.type)';
    }

    log(message, type) {
        thix.type = type;
        super.log(message);
    }
}
//create instance of our configurable logger
const cLogger = ConfigurableLogger.create('Debug');
cLogger.log('Configurable Logger', "Info");
console.log(cLogger.current);

console.log(cLogger instanceof ConfigurableLogger);//true
console.log(cLogger instanceof Logger);//false
