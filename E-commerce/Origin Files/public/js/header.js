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

    /*******header scroll event*******/
    $header = $("header");
    $(window).scroll(() => {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 500) {
            $header
                .addClass("fixed")
                .css({
                    background: "#fff",
                    boxShadow: " 0 0.1px 20px 1px #E2E1D9",
                    paddingTop:0
                });
                $(".location")
                .addClass("fixed");
        } else {
            $header
                .removeClass("fixed")
                .css({
                    background: "transparent",
                    boxShadow: "none",
                    paddingTop:"30px"
                });
                $(".location").removeClass("fixed");
        }
    })
})()