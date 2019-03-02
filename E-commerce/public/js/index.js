(function () {
    $(".themeGreen")
        .css({ width: "1500px", position: "relative" })
        .children("ul")
        .css({ width: "500px", position: "absolute", top: "149px", left: "187px" })
        .children("li").css({ marginTop: "20px" })
        .parent().next()
        .css({ display: "flex", position: "absolute", width: "1000px" })
        .children("div")
        .css({ width: "500px", position: "relative" })
        .children("img")
        .css({ position: "relative" });
    $(".themeWhite")
        .css({ width: "1500px", position: "relative" })
        .children("ul")
        .css({ width: "500px", position: "absolute", top: "140px", right: "-144px" })
        .children("li").css({ marginTop: "20px" })
        .parent().prev()
        .css({ display: "flex", position: "absolute", width: "1000px" })
        .children("div")
        .css({ width: "500px", position: "relative" })
        .children("img")
        .css({ position: "relative" });
    // navs悬停设置
    var $ul = $("#header>ul");
    $ul.on("mouseenter", "li.tab", function () {
        var a = $(this)
            .find("a");
        var data1 = a.attr("data1"),
            data2 = a.attr("data2"),
            data3 = a.attr("data3"),
            data4 = a.attr("data4");
        a.css({ background: "#2F2C2F", color: "#fff" })
            .after(` <ul id="navPics" class="position_fixed margin_auto">
            <li><a href="javascript:;"><img src="${data1}" alt="1"><div class="hoax"><div></a></li>
            <li><a href="javascript:;"><img src="${data2}" alt="2"><div class="hoax"><div></a></li>
            <li><a href="javascript:;"><img src="${data3}" alt="3"><div class="hoax"><div></a></li>
            <li><a href="javascript:;"><img src="${data4}" alt="4"><div class="hoax"><div></a></li>
        </ul>`)
            .next()
            .animate({
                top: 50
            }, 300);
            /*导航栏悬停内部的图片蒙层*/ 
            $(".hoax").hover(
                function(e){
                $(e.target).animate({
                    opacity:0.2,
                    zIndex:-1
                },200)
            },
            function(e){
                $(e.target).animate({
                    opacity:0
                },200)
            }
            )
    })
        .on("mouseleave", "li.tab", function () {
            $(this)
                .find("a")
                .css({ background: "#fff", color: "#000" });
            $("#navPics")
                .remove();
        });


})()