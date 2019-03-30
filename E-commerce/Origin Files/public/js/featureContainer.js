(() => {
    /***** feature_container tools event *****/
    $(".feature_container")
        .on("mouseenter", ".list_item", function () {
            $(this).find(".tools")
                .css({
                    opacity: .5,
                    top: 0
                })
        })
        .on("mouseleave", ".list_item", function () {
            $(this).find(".tools")
                .css({
                    opacity: 0,
                    top: "27px"
                })
        });

})()