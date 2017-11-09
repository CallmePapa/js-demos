/**
 * Created by weiqiujuan on 17-11-9.
 */
let index = 1;
let animated = false;
let timer;

window.onload = init;
function init() {
    eventBind();
    autoPlay();
}

//自动播放
function autoPlay() {
    timer = setTimeout(function () {
        getLeft(-500);
        changeIndex(true);
    }, 3000);
}

//计算偏移量
function getLeft(offset) {
    let list = document.getElementsByClassName("img-lists")[0];
    let newLeft = parseInt(list.style.left) + offset;//位移量的变化
    let time = 500;//自动轮播时间
    let interval = 5;//循环图片数
    let speed = offset / (time / interval);//轮播速度
    animated = true;
    // 实现动画效果
    function go() {
        if ((speed < 0 && parseInt(list.style.left) > newLeft) || parseInt(list.style.left) < newLeft) {
            list.style.left = parseInt(list.style.left) + speed + "px";
            setTimeout(go, interval);
        }
        else {
            animated = false;
            list.style.left = newLeft + "px";
            if (newLeft < -2000) {
                list.style.left = -500 + "px";
            }
            if (newLeft > -500) {
                list.style.left = -2000 + "px"
            }
        }
    }

    go();
}

//更改小圆点的状态
function changeIndex(action) {
    if (action) {
        index++;
    } else {
        index--;
    }
    if (index === 4) {
        index = 1;
    }
    if (index === 1) {
        index = 4;
    }
    activeBtn();
}
function activeBtn() {
    let btns = document.getElementsByClassName("span");
    let len = btns.length;
    for(let i=0;i<len;i++){
        btns[i].className="";
    }
    for (let i = 0; i < len; i++) {
        if (index === parseInt(btns[i].getAttribute("index"))) {
            btns[i].className = "on";
        }
    }
}
//停止播放
function stopPlay() {
    clearInterval(timer);
}
function eventBind() {
    let container = document.getElementsByClassName("container")[0];
    let list = document.getElementsByClassName("img-lists")[0];
    let btns = document.getElementsByTagName("span");
    let prev = document.getElementsByClassName("prev")[0];
    let next = document.getElementsByClassName("next")[0];
    //实现自动功能
    container.onmousemove = stopPlay;
    container.onmouseout = autoPlay;
    //实现功能二
    let len = btns.length;
    for (let i = 0; i < len; i++) {
        (function (i) {
            btns[i].onclick = function () {
                let ind = btns[i].getAttribute("index");
                getLeft(-500 * (ind - index));
                index = parseInt(ind);
                activeBtn();
            };
        })(i);
    }
    //实现功能３
    next.onclick = function () {
        changeIndex(true);
        if (!animated) {
            getLeft(-500);
        }
    };
    prev.onclick = function () {
        changeIndex(false);
        if (!animated) {
            getLeft(500);
        }
    }
}