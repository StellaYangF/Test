(() => {
    $(".more_info")
        .on("mouseenter", ".info_link", function() {
            $(this).find(".arrowRight")
                .css({
                    left: "5px"
                })
        })
        .on("mouseleave", ".info_link", function() {
            $(this).find(".arrowRight")
                .css({
                    left: "0px"
                })
        })
})()