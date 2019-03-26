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
        var moved = 1;
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
                    .css({
                        marginLeft: 0
                    });
                moved = 0;
            }
        }, time)
    };
    /*window load finished then invoke the slide()*/
    $(window).load(() => {
        slide(5000);
    });

    /*navbar_item hover*/
    $('.list1')
        .mouseenter(() => {
            $(".arrow1").css({
                transform: "rotate(-90deg)"
            })
            $('.fashion_women').removeClass('collapse');
        })
        .mouseleave(() => {
            $(".arrow1").css({
                transform: "rotate(90deg)"
            })
            $('.fashion_women').addClass('collapse');
        });
    $('.list2').mouseenter(() => {
            $(".arrow2").css({
                transform: "rotate(-90deg)"
            })
            $('.fashion_men').removeClass('collapse');
        })
        .mouseleave(() => {
            $(".arrow2").css({
                transform: "rotate(90deg)"
            })
            $('.fashion_men').addClass('collapse');
        });
    $('.list3')
        .mouseenter(() => {
            $(".arrowR").css({
                marginLeft: "154px",
                color: "#BABABA"
            })
            $('.card_link_nav').removeClass('collapse');
        })
        .mouseleave(() => {
            $(".arrowR").css({
                marginLeft: "150px",
                color: "#767676"
            })
            $('.card_link_nav').addClass('collapse');
        });
        /*** fifth floor card_container hover  ***/ 
        $(".card_content.one")
        .mouseenter(()=>{
            $(".line.one").css({
                width:"300px"
            })
        })
        .mouseleave(()=>{
            $(".line.one").css({
                width:"500px"
            })
        });
        $(".card_content.two")
        .mouseenter(()=>{
            $(".line.two").css({
                width:"300px"
            })
        })
        .mouseleave(()=>{
            $(".line.two").css({
                width:"500px"
            })
        });
        /** import footer.html **/
        $(function(){
            $.ajax({
                url:"footer.html",
                type:"get",
                success:(res)=>{
                    console.log(res);
                    $("footer")
                    .html(res);
                }
            })
        })
})(); 

