/**
 * Created by weiqiujuan on 17-11-9.
 */

window.onload = goBack;

function goBack() {
    let btn = document.getElementsByClassName("btn")[0];
    let isTop = true;
    let timer;

    window.onscroll = function () {
        btnStatue();
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = true;
    };

    btn.onclick = function () {
        let sTop = document.documentElement.scrollTop || document.body.scrollTop;
        timer = setInterval(function () {
            isTop = true;
            sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (sTop > 0) {
                let speed = Math.floor(-sTop / 6);
                document.documentElement.scrollTop = document.body.scrollTop = sTop + speed
            }
            if (sTop === 0) {
                clearInterval(timer);
            }
        }, 50);
    }
}

function btnStatue() {
    let btn = document.getElementsByClassName("btn")[0];
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if (scroll >= clientHeight) {
        console.log(222);
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}