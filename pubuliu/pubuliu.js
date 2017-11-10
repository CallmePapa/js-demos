/**
 * Created by weiqiujuan on 17-11-9.
 */
window.onload = function () {
    waterFall("container", "box");
    let dataInt = {
        "data": [{"src": "one.jpg"}, {"src": "one.jpg"}, {"src": "one.jpg"}]
    };
    window.onscroll = function () {
        if (checkScrollSlide) {
            console.log(111111);
            //将数据库渲染到页面尾部
            let container = document.getElementById("container");
            for (let i = 0; i < dataInt.data.length; i++) {
                let box = document.createElement('div');
                box.className = 'box';
                container.appendChild(box);
                let pic = document.createElement('div');
                pic.className = "pic";
                box.appendChild(pic);
                let img = document.createElement('img');
                img.src = "images/" + dataInt.data[i].src;
                pic.appendChild(img);
            }
            waterFall("container", "box");
        }
    }
};
function waterFall(parent, box) {
    //将container下所有的class为box的元素取出来
    let oParent = document.getElementById(parent);
    //所有父元素下的box子元素
    let oBox = getByClass(oParent, box);
    //计算整个页面显示的列数
    let oBoxW = oBox[0].offsetWidth;
    let cols = Math.floor(document.documentElement.clientHeight / oBoxW);//形成的列数
    //设置container的宽度，让其列数在改变浏览器大小的时候不发生改变
    oParent.style.cssText = "width:" + cols * oBox[0] + "px;margin:0 auto";

    //图片排序，找高最小的图片，下一行的图片排到高度最小的下面
    let hArr = [];
    for (let i = 0; i < oBox.length; i++) {
        if (i < cols) {
            hArr.push(oBox[i].offsetHeight);
        }
        else {
            let hMin = Math.min.apply(null, hArr);//apply更改this指向
            let index = getIndex(hArr, hMin);//取高度最小图片的索引
            oBox[i].style.position = "absolute";
            oBox[i].style.top = hMin + "px";
            //oBox[i].style.left=oBoxW*index+"px";
            oBox[i].style.left = index * oBox[i].offsetWidth + "px";
            hArr[index] += oBox[i].offsetHeight//改变数组
        }
    }
}

//根据class获取元素
function getByClass(parent, box) {
    let boxArr = [];//用来存储获取到所有的box的元素
    let element = parent.getElementsByTagName("*");//父元素下的所有子元素
    for (let i = 0; i < element.length; i++) {
        if (element[i].className === box) {//需要找到的元素
            boxArr.push(element[i]);
        }
    }
    return boxArr;
}

function getIndex(hArr, hMin) {
    for (let i = 0; i < hArr.length; i++) {
        if (hArr[i] === hMin) {
            return i;
        }
    }
}
//检测是否具备加载图片的条件
function checkScrollSlide() {
    let oParent = document.getElementById('container');
    let oBoxs = getByClass(oParent, 'box');//找到所有盒子
    //最后一个盒子高度
    let lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2);
    //页面滚动的距离（混杂模式｜｜标准模式）
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.body.clientHeight || document.documentElement.clientHeight;
    let result = (lastBoxH < scrollTop + height) ? true : false;
    return result;
}