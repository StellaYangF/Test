(() => {
    /***** import header.html *****/
    $(function() {
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
    $(function() {
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
    $(function() {
        $.ajax({
            url: "featureContainer.html",
            type: "get",
            success: (res) => {
                $(".feature_container.two")
                    .html(res);
            }
        })
    });
    /***** products event *****/
    $(".prod_info")
        .on("click", ".info", function() {
            $(this).css({
                    borderBottom: "2px solid rgb(203,170,149)",
                    color: "#2F2C2F"
                })
                .siblings().css({
                    color: "#BAB3B3",
                    borderBottom: "none"
                });
            if ($(this).is(".one")) {
                $(".description")
                    .removeClass("collapse")
                    .siblings().addClass("collapse")
            } else if ($(this).is(".two")) {
                $(".pdetails")
                    .removeClass("collapse")
                    .siblings().addClass("collapse")
            } else {
                $(".comments")
                    .removeClass("collapse")
                    .siblings().addClass("collapse")
            }
        })
})()