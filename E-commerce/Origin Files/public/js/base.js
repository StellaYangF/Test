(() => {
    /*******not completed*******/
    $header = $("header");
    $(window).scroll(() => {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 500) {
            console.log(1);
            $header
                .addClass("fixed")
                .css({
                    background: "#fff"
                });
                // 
                $(".location")
        } else {
            console.log(2);
            $header
                .removeClass("fixed")
        }
    })
})()