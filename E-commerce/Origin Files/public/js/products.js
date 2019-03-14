(() => {
    /*carousel slide*/
    function slide(time) {
        var count = $(".carousel_item").length,
            iWidth = $(".carousel_item img").css("width"),
            iHeight = $(".carousel_item img").css("height"),
            gWidth = count * iWidth.replace("px", "");
        /*set style of carousel_group*/
        $(".carousel_group").css({
            width: gWidth,
            height: iHeight,
            display: "flex"
        });
        /*set style of carousel_item*/
        $(".carousel_item_link").css({
            width: iWidth,
            height: iHeight,
            display: "inline-block"
        });

        /*set style of carousel*/
        $(".carousel").css({
            width: iWidth,
            height: iHeight,
            overflow: "hidden"
        });

        /*carousel slide setting*/
        var moved = 0;
        size = iWidth.replace("px", "");
        setInterval(() => {
            var marginLeft = `-${moved*size}px`;
            if (moved < count) {
                $(".carousel_group")
                    .css({
                        marginLeft,
                    });
                moved++;
            } else {
                moved = 0;
            }
        }, time)
    };
    /*window load finished then invoke the slide()*/
    $(window).load(() => {
        slide(5000);
    });
})();