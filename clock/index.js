var tool = {
    init: function () {
        this.drawLines($('.line-min'), 60);
        this.drawLines($('.line-hour'), 12);
        this.drawNumber($('.number'));
        this.move();
    },
    drawLines: function (content, total) {
        var angle = 360 / total,
            str = '';
        for(var i = 0; i < total; i++) {
            str += '<li style="transform: rotate(' + angle * i + 'deg);"></li>'
        }
        content.html(str);
    },
    drawNumber: function (content) {
        var str = '';
        for(var i = 1; i <= 12; i++) {
            str += '<li style="transform: rotate(' + 30 * i + 'deg) translateX(-50%);"><span style="transform: rotate(' + -30*i + 'deg)">' + i + '</span></li>'
        }
        content.html(str);
    },
    move: function () {
        var _this = this;
        this.turn();
        setInterval(function () { 
            _this.turn();
        }, 1000)
    },
    turn: function () {
        var date = new Date(),
            dateHour = date.getHours(),
            dateMin = date.getMinutes(),
            dateSec = date.getSeconds();

        var secAngle = dateSec * 6 - 90,
            minAngle = dateMin * 6 + dateSec * 0.1 - 90,
            hourAngle = dateHour * 30 + dateMin * 0.5 - 90;

        $('.pointer-hour').css('transform', 'rotate(' + hourAngle + 'deg)')
        $('.pointer-min').css('transform', 'rotate(' + minAngle + 'deg)')
        $('.pointer-sec').css('transform', 'rotate(' + secAngle + 'deg)') 
    }
}
tool.init();


