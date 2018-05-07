$(document).ready(function () {
    console.log("jquery加载完成");
    cb = (response) => {
        console.log(response);
    };
    //键盘事件
    $(".search").bind('keyup', function () {
        let searchText = $(".search").val();
        $.ajax({
            type: "GET",
            url: "http://api.bing.com/qsonhs.aspx?type=cb&q=" + searchText,
            dataType: 'jsonp',
            jsonp: cb,
            success: function (data) {
                if (data === null || data === null || data.Results === null || data.Results[0].Suggests == null) {
                    $("#search-suggest").hide();
                    return false;
                }
                let d = data.Results[0].Suggests;
                let html = "";
                for (let i = 0; i < d.length; i++) {
                    html += "<li>" + d[i] + "</li>";
                }
                $("#search-suggest").html(html);

                $("#search-suggest").show().css({
                    top: $("#search-form").offset().top + $("#search-form").height() + 10 + "px",
                    left: $("#search-form").offset().left() + "px",
                    position: "absolute"
                })
            },
        });

    });

    $(document).bind("click", function () {
        $("#search-suggest").hide();
    });
    //事件代理
    $(document).delegate("li", "click", function () {
        let keyword = $(this).text();
        location.href = "http://cn.bing.com/search?q=" + keyword;
    });
    $(".btn").submit(function () {
        let keyword = $("#search-input").val();
        console.log("word=" + keyword);
        location.href = "http://cn.bing.com/search?q=" + keyword;
        console.log("http://cn.bing.com/search?q=" + keyword);
    })
});
