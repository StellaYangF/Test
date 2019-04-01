(() => {
    /*******not completed*******/
    $header = $("header");
    $(window).scroll(() => {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 500) {
            $header
                .addClass("fixed")
                .css({
                    background: "#fff"
                });
            // 
            $(".location")
                .addClass("fixed");
        } else {
            $header
                .removeClass("fixed");
            $(".location")
                .removeClass("fixed");
        }
    })
})()