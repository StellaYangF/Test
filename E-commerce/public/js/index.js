(function() {
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
    $ul.on("mouseenter", "li", function() {
            $(this).css({
                    cursor: "pointer",
                    background: "#2F2C2F",
                    color: "#fff"
                })
                .children("a")
                .css({ color: "#fff" })
            $("#navPics")
                .css({ width: "1500px", height: "300px", background: "#2F2C2F", top: "80px", zIndex: 100 })
                .addClass("position_fixed margin_auto")
                .removeClass("display_none")
        })
        .on("mouseleave", "li", function() {
            $(this).css({
                    background: "#fff",
                    color: "#000"
                })
                .children("a")
                .css({ color: "#000" })
            $("#navPics")
                .mouseleave(function() {
                    $(this)
                        .addClass("display_none")
                })
        })
})()