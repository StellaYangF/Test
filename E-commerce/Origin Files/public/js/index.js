(() => {
    $(".themeGreen")
        .css({ width: "1500px", position: "relative" })
        .children("ul")
        .css({ width: "500px", position: "absolute", top: "149px", left: "187px" })
        .children("li").css({ marginTop: "20px" })
        .parent().next()
        .css({ display: "flex", position: "absolute", width: "1000px" })
        .children("div")
        .css({ width: "500px", position: "relative" })
        .children("img")
        .css({ position: "relative" });
    $(".themeWhite")
        .css({ width: "1500px", position: "relative" })
        .children("ul")
        .css({ width: "500px", position: "absolute", top: "140px", right: "-144px" })
        .children("li").css({ marginTop: "20px" })
        .parent().prev()
        .css({ display: "flex", position: "absolute", width: "1000px" })
        .children("div")
        .css({ width: "500px", position: "relative" })
        .children("img")
        .css({ position: "relative" });

    /*  navs hover setting*/
    var $ul = $("#header>ul");
    $ul.on("mouseenter", "li.tab", function() {
            var a = $(this)
                .find("a");
            var data1 = a.attr("data1"),
                data2 = a.attr("data2"),
                data3 = a.attr("data3"),
                data4 = a.attr("data4");
            // Change navPics picture:
            a.css({ background: "#2F2C2F", color: "#fff" })
                .after(` <ul id="navPics" class="fixed margin_auto">
            <li><a href="javascript:;" class="jumpPage"><div class="hoax"><img src="${data1}" alt="1"></div></a></li>
            <li><a href="javascript:;" class="jumpPage"><div class="hoax"><img src="${data2}" alt="2"></div></a></li>
            <li><a href="javascript:;" class="jumpPage"><div class="hoax"><img src="${data3}" alt="3"></div></a></li>
            <li><a href="javascript:;" class="jumpPage"><div class="hoax"><img src="${data4}" alt="4"></div></a></li>
        </ul>`)
                .next()
                .animate({
                    top: 50
                }, 300);
            /*navbar pic shadow*/
            $(".hoax").hover(
                (e) => {
                    $(e.target).animate({
                        opacity: 0.7,
                    }, 200)
                },
                (e) => {
                    $(e.target).animate({
                        opacity: 1
                    }, 200)
                }
            );
            /***** jumPage ******/ 
            $("#navPics").on("click",".jumpPage",function(){
                $(this).attr({
                    // node server to revise
                    // href:"http://localhost:3000/products.html"
                    // text code
                    href:"http://127.0.0.1:5500/000PROJECT/Test/E-commerce/Origin%20Files/public/products.html",
                    target:"_blank"
                })
            })
        })
        .on("mouseleave", "li.tab", function() {
            $(this)
                .find("a")
                .css({ background: "#fff", color: "#000" });
            $("#navPics")
                .remove();
        });


    /*carousel*/
    var i = 0;
    var moved = -500;
    setInterval(() => {
        if (i < 11) {
            $(".carousel_img").css({
                marginLeft: `${moved * i}px`
            });
            i++;
        } else {
            i = 0;
        }
    }, 3000)
})()