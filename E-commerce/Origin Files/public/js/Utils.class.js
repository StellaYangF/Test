class Utils {
    constructor() { }

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

        var moved = 1,
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
    }

}


class EnvInfo {
    constructor() { }
}
EnvInfo.headerUrl = "header.html";
EnvInfo.footerUrl = "footer.html";
EnvInfo.loginUrl = "login.html";
EnvInfo.headerHtml = "header";
EnvInfo.footerHtml = "footer";
EnvInfo.loginHtml = ".log_container";
EnvInfo.loginFrame = $('.login_frame')

