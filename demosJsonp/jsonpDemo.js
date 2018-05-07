$(document).ready(function () {
    $("#input-ifo").bind('keyup', function () {
        let inputText = $("#input-ifo").val();
        let callback= function (data) {
            let d = data.AS.Results[0].Suggests;
            let html = "";
            for (let i = 0; i < d.length; i++) {
                html += '<li>' + d[i].Txt + '</li>';
            }
            $("#search-result").html(html);
            $("#search-suggest").css({
                top: $('#search-form').offset().top + $("#search-form").height()-20,
                left: $('#search-form').offset().left-30,
                position:'relative'
            }).show();
        };
        $.ajax({
            type: "get",
            async: false,
            url: "http://api.bing.com/qsonhs.aspx?type=cb&cb=callback&q=" + inputText,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback:"callback",
            success: function (data) {
                callback(data);
            },
            error: function (data) {
                console.log(data);
            }
        });
    });
    $(document).bind('click',function(){
        $('#search-suggest').hide();
    });
    $('#search-suggest').delegate('li','click', function () {
        let keyword=$(this).text();
        location.href='http://cn.bing.com/search?q='+keyword;
    });
});