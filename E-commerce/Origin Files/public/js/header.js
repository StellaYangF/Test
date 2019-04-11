(() => { /*header navbar_item hover*/
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
        if (scrollPos > 300) {
            $header
                .addClass("fixed")
                .css({
                    background: "#fff",
                    boxShadow: " 0 0.1px 20px 1px #E2E1D9",
                    paddingTop: 0
                });
            $(".location")
                .addClass("fixed");
        } else {
            $header
                .removeClass("fixed")
                .css({
                    background: "transparent",
                    boxShadow: "none",
                    paddingTop: "30px"
                });
            $(".location").removeClass("fixed");
        }
    });

    /*******header icon-person click event*******/
    $(".mui-icon-person").click(() => {
        $(".log_container")
            .removeClass("collapse");
        $('.msg').removeClass('vali_fail').removeClass('vali_success').html('');
    })


    // pages toggle
    $('.navbar').on('click', '.navbar_item_link', function() {
        $(this).attr({
            href: "http://localhost:3000/productList.html"
        })
    })


    // header ul_info
    $(function() {
        if (sessionStorage.uid) {
            $('.u_info li').first().html(`欢迎<br>` + sessionStorage.uname);
        }
    })

    // header_logo_content event jump to index.html
    $('.header_logo_content').click(function(){
        $(this).attr({href:'http://localhost:3000/index.html'});
    })
})()