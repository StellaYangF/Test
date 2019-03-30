(() => {
    /***** import header.html *****/
    $(function () {
        $.ajax({
            url: "header.html",
            type: "get",
            success: (res) => {
                $("header")
                    .html(res);
            }
        })
    })
    /***** import footer.html *****/
    $(function () {
        $.ajax({
            url: "footer.html",
            type: "get",
            success: (res) => {
                $("footer")
                    .html(res);
            }
        })
    });
})()