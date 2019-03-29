(() => {
    /***** import header.html *****/
    $(function () {
        $.ajax({
            url: "header.html",
            type: "get",
            success: (res) => {
                $("header")
                    .html(res);
            }
        })
    })
    /***** import footer.html *****/
    $(function () {
        $.ajax({
            url: "footer.html",
            type: "get",
            success: (res) => {
                $("footer")
                    .html(res);
            }
        })
    });
    /***** import feature_container.html *****/
    $(function () {
        $.ajax({
            url: "featureContainer.html",
            type: "get",
            success: (res) => {
                $(".feature_container.two")
                    .html(res);
            }
        })
    });
    /***** nav arrow event *****/
    $(".nav_content")
        .on("mouseenter", 'li', function () {
            $(this)
                .css({
                    color: "#F9DEAA"
                })
                .find(".mui-icon")
                .css({
                    transform: "translate(5px)"
                })
        })
        .on("mouseleave", 'li', function () {
            $(this)
                .css({
                    color: "#fff"
                })
                .find(".mui-icon")
                .css({
                    transform: "translate(-5px)"
                })
        })

    /***** sort css setting*****/
    $("select").on("hover", "option", function () {
        $(this).css({
            color:"#EA9191",
            background:"#fff"
        })
    })
})()