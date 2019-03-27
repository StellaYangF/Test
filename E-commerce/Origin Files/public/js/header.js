(() => {/*header navbar_item hover*/
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

    /*******not completed*******/
    $header = $("header");
    var navOffset = $header.offset().top;
    $(window).scroll(() => {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 500) {
            console.log(1);
            $header
                .addClass("fixed")
                .css({
                    background: "#fff"
                })
        } else {
            console.log(2);
            $header
                .removeClass("fixed")
                .css({
                    background: "transparent"
                })
        }
    })
})()