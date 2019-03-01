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
    $ul.on("mouseenter", "li", function () {
        $(this)
            .find("a")
            .css({ background: "#2F2C2F", color: "#fff" })
            .after(` <ul id="navPics" class="position_fixed margin_auto"></ul>`)
            .next()
            .removeClass("display_none")
            .animate({
                top: 50     
            }, 300)
    })
        .on("mouseleave", "li", function () {
            $(this)
            .find("a")
            .css({background: "#fff",color: "#000"})
                .children("a")
                .css({ color: "#000" })
           $("#navPics")
                .remove();
        })
})()