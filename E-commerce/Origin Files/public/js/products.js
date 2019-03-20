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
            var marginLeft = `-${moved * size}px`;
            if (moved < count) {
                $(".carousel_group")
                    .animate({
                        marginLeft
                    }, 300);
                moved++;
            } else {
                $(".carousel_group")
                    .animate({
                        marginLeft: 0
                    }, 0);
                moved = 0;
            }
        }, time)
    };
    /*window load finished then invoke the slide()*/
    $(window).load(() => {
        slide(2000);
    });

    /*navbar_item hover*/
    $('.list1').hover(function() {
        $('.fashion_women').toggleClass('collapse')
    });
    $('.list2').hover(function() {
        $('.fashion_men').toggleClass('collapse')
    });
})();