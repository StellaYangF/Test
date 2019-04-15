class Utils {
    constructor() {}

    static importHtml(url, html) {
        $.ajax({
            url: url,
            type: 'get',
        }).then((res) => {
            $(html).html(res)
        })
    }

    static slide(time) {
        var count = $(".carousel_item").length,
            iWidth = $(".carousel_item img").css("width"),
            iHeight = $(".carousel_item img").css("height"),
            gWidth = count * iWidth.replace("px", "");

        $(".carousel_group").css({
            width: gWidth,
            height: iHeight,
            display: "flex"
        });

        $(".carousel_item_link").css({
            width: iWidth,
            height: iHeight,
            display: "inline-block"
        });

        $(".carousel").css({
            width: iWidth,
            height: iHeight,
            overflow: "hidden"
        });

        setInterval(() => {
            $(".carousel_group").animate({ marginLeft: '-1500px' }, 800, () => {
                $('.carousel_item:first').appendTo('.carousel_group');
                $('.carousel_group')
                    .css({ marginLeft: 0 })
            })
        }, time)
    }

}


class EnvInfo {
    constructor() {}
}
EnvInfo.headerUrl = "header.html";
EnvInfo.footerUrl = "footer.html";
EnvInfo.loginUrl = "login.html";
EnvInfo.cartUrl = "cart.html";
EnvInfo.headerHtml = "header";
EnvInfo.footerHtml = "footer";
EnvInfo.loginHtml = ".log_container";
EnvInfo.cartHtml = ".cartContainer";
EnvInfo.loginFrame = $('.login_frame');