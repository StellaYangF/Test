(() => {
    /***** document content padding *****/
    var $elem = $(`<table></table>
    <header id="header">
    <div class=" log_container collapse"></div>
        <ul id="navs">
            <li class="tab"><a href="javascript:;" class="color_black link_style_none" data1="img/home/Fashion-1.jpg"
                    data2="img/home/Fashion-2.jpg" data3="img/home/Fashion-3.jpg" data4="img/home/Fashion-4.jpg">时尚</a>
            </li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none" data1="img/home/Furniture-1.jpg"
                    data2="img/home/Furniture-2.jpg" data3="img/home/Furniture-3.jpg"
                    data4="img/home/Furniture-4.jpg">家私</a></li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none"
                    data1="img/home/Electronics-1.jpg" data2="img/home/Electronics-2.jpg"
                    data3="img/home/Electronics-3.jpg" data4="img/home/Electronics-4.jpg">电子产品</a></li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none" data1="img/home/SpareParts-1.jpg"
                    data2="img/home/SpareParts-2.jpg" data3="img/home/SpareParts-3.jpg"
                    data4="img/home/SpareParts-4.jpg">汽车产品</a></li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none"
                    data1="img/home/Supermarket-1.jpg" data2="img/home/Supermarket-2.jpg"
                    data3="img/home/Supermarket-3.jpg" data4="img/home/Supermarket-4.jpg">生活用品</a></li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none" data1="img/home/Lingerie-1.jpg"
                    data2="img/home/Lingerie-2.jpg" data3="img/home/Lingerie-3.jpg"
                    data4="img/home/Lingerie-4.jpg">女士内衣</a></li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none" data1="img/home/Jewelry-1.jpg"
                    data2="img/home/Jewelry-2.jpg" data3="img/home/Jewelry-3.jpg"
                    data4="img/home/Jewelry-4.jpg">珠宝首饰</a></li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none" data1="img/home/Bike-1.jpg"
                    data2="img/home/Bike-2.jpg" data3="img/home/Bike-3.jpg" data4="img/home/Bike-4.jpg">自行车</a></li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none" data1="img/home/Kids-1.jpg"
                    data2="img/home/Kids-2.jpg" data3="img/home/Kids-3.jpg" data4="img/home/Kids-4.jpg">儿童用品</a></li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none"
                    data1="img/home/Beauty-store-1.jpg" data2="img/home/Beauty-store-2.jpg"
                    data3="img/home/Beauty-store-3.jpg" data4="img/home/Beauty-store-4.jpg">化妆产品</a></li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none" data1="img/home/Pets-1.jpg"
                    data2="img/home/Pets-2.jpg" data3="img/home/Pets-3.jpg" data4="img/home/Pets-4.jpg">宠物</a></li>
            <li class="tab"><a href="javascript:;" class="color_black link_style_none" data1="img/home/Tools-1.jpg"
                    data2="img/home/Tools-2.jpg" data3="img/home/Tools-3.jpg" data4="img/home/Tools-4.jpg">工具产品</a></li>
        </ul>
        <!-- append ul -->
        <!-- 
        <ul id="navPics" class="fixed margin_auto">
            <li>
                <a href="javascript:;">
                    <img src="img/home/Fashion-1.jpg" alt="1">
                    <div class="hoax"><div>
                </a>
            </li>
            <li><a href="javascript:;"><img src="img/home/Fashion-2.jpg" alt="2"></a></li>
            <li><a href="javascript:;"><img src="img/home/Fashion-3.jpg" alt="3"></a></li>
            <li><a href="javascript:;"><img src="img/home/Fashion-4.jpg" alt="4"></a></li>
        </ul>
         -->
    </header>
    <section id="content" class="position_relative">
        <table></table>
        <ul class="text_align_center">
            <li><img src="img/logo/logo.png"></li>
            <li>
                <p class="letter_spacing_3">电商平台</p>
            </li>
            <li class="text_align_center mt-20">
                <a href="javascript:;" class="font_bold word_spacing btn_pink_hover btn_pink">
                    立即购买
                </a></li>
        </ul>
        <div class="carousel position_absolute">
            <div class="carousel_img">
                <img class="slider_img_size" src="img/home/slider-home-1.png">
                <img class="slider_img_size" src="img/home/slider-home-2.png">
                <img class="slider_img_size" src="img/home/slider-home-3.png">
                <img class="slider_img_size" src="img/home/slider-home-4.png">
                <img class="slider_img_size" src="img/home/slider-home-5.png">
                <img class="slider_img_size" src="img/home/slider-home-6.png">
                <img class="slider_img_size" src="img/home/slider-home-7.png">
                <img class="slider_img_size" src="img/home/slider-home-8.png">
                <img class="slider_img_size" src="img/home/slider-home-9.png">
                <img class="slider_img_size" src="img/home/slider-home-10.png">
                <img class="slider_img_size" src="img/home/slider-home-11.png">
            </div>
        </div>
    </section>
    <div id="info">
        <a class="word_spacing font_bold rounded display_block" href="javascript:;">下拉查看本店商铺</a>
    </div>
    <div id="fashion" class="themeGreen">
        <ul>
            <li>
                <img src="img/logo/logo-1.png">
                <ul>
                    <li>电商平台</li>
                    <li>时尚服饰</li>
                </ul>
            </li>
            <li>不可错过的时尚单品</li>
            <li>
                <a href="javascript:;">了解更多
                </a>
            </li>
        </ul>
        <div>
            <div>
                <img src="img/home/home11.png">
                <img src="img/home/home12.png">
            </div>
            <div>
                <img src="img/home/home13.png">
                <img src="img/home/home14.png">
            </div>
        </div>
    </div>
    <div id="furniture" class="themeWhite">
        <div>
            <div>
                <img src="img/home/home24.png">
                <img src="img/home/home25.png">
                <img src="img/home/home26.png">
            </div>
            <div>
                <img src="img/home/home21.png">
                <img src="img/home/home22.png">
                <img src="img/home/home23.png">
            </div>
        </div>
        <ul>
            <li>
                <img src="img/logo/logo-2.png">
                <ul>
                    <li>电商平台</li>
                    <li>爱家家居</li>
                </ul>
            </li>
            <li>一线设计师设计出品</li>
            <li>
                <a href="javascript:;">了解更多</a>
            </li>
        </ul>
    </div>
    <div id="electronics" class="themeGreen">
        <ul>
            <li>
                <img src="img/logo/logo-3.png">
                <ul>
                    <li>电商平台</li>
                    <li>移动设备</li>
                </ul>
            </li>
            <li>可配置全屋的电子设备</li>
            <li>
                <a href="javascript:;">了解更多
                </a>
            </li>
        </ul>
        <div>
            <div>
                <img src="img/home/home31.png">
                <img src="img/home/home32.png">
            </div>
            <div>
                <img src="img/home/home33.png">
                <img src="img/home/home34.png">
            </div>
        </div>
    </div>
    <div id="car" class="themeWhite">
        <div>
            <div>
                <img src="img/home/home44.png">
                <img src="img/home/home45.png">
            </div>
            <div>
                <img src="img/home/home41.png">
                <img src="img/home/home42.png">
                <img src="img/home/home43.png">
            </div>
        </div>
        <ul>
            <li>
                <img src="img/logo/logo-4.png">
                <ul>
                    <li>电商平台</li>
                    <li>出行工具</li>
                </ul>
            </li>
            <li>汽车之家</li>
            <li>
                <a href="javascript:;">了解更多</a>
            </li>
        </ul>
    </div>
    <div id="goods" class="themeGreen">
        <ul>
            <li>
                <img src="img/logo/logo-5.png">
                <ul>
                    <li>电商平台</li>
                    <li>生活用品</li>
                </ul>
            </li>
            <li>种类齐全，应有尽有</li>
            <li>
                <a href="javascript:;">了解更多
                </a>
            </li>
        </ul>
        <div>
            <div>
                <img src="img/home/home51.png">
                <img src="img/home/home52.png">
            </div>
            <div>
                <img src="img/home/home53.png">
                <img src="img/home/home54.png">
            </div>
        </div>
    </div>
    <div id="underwear" class="themeWhite">
        <div>
            <div>
                <img src="img/home/home63.png">
                <img src="img/home/home64.png">
            </div>
            <div>
                <img src="img/home/home61.png">
                <img src="img/home/home62.png">
            </div>
        </div>
        <ul>
            <li>
                <img src="img/logo/logo-6.png">
                <ul>
                    <li>电商平台</li>
                    <li>内搭服饰</li>
                </ul>
            </li>
            <li>女士专区</li>
            <li>
                <a href="javascript:;">了解更多</a>
            </li>
        </ul>
    </div>
    <div id="jewelry" class="themeGreen">
        <ul>
            <li>
                <img src="img/logo/logo-7.png">
                <ul>
                    <li>电商平台</li>
                    <li>珠宝首饰</li>
                </ul>
            </li>
            <li>各大品牌专区</li>
            <li>
                <a href="javascript:;">了解更多</a>
            </li>
        </ul>
        <div>
            <div>
                <img src="img/home/home71.png">
                <img src="img/home/home72.png">
            </div>
            <div>
                <img src="img/home/home73.png">
                <img src="img/home/home74.png">
            </div>
        </div>
    </div>
    <div id="bike" class="themeWhite">
        <div>
            <div>
                <img src="img/home/home83.png">
                <img src="img/home/home84.png">
                <img src="img/home/home85.png">
            </div>
            <div>
                <img src="img/home/home81.png">
                <img src="img/home/home82.png">
            </div>
        </div>
        <ul>
            <li>
                <img src="img/logo/logo-8.png">
                <ul>
                    <li>电商平台</li>
                    <li>健康自行</li>
                </ul>
            </li>
            <li>自行车之家</li>
            <li>
                <a href="javascript:;">了解更多</a>
            </li>
        </ul>
    </div>
    <div id="kids" class="themeGreen">
        <ul>
            <li>
                <img src="img/logo/logo-9.png">
                <ul>
                    <li>电商平台</li>
                    <li>儿童专区</li>
                </ul>
            </li>
            <li>各大儿童品牌专区</li>
            <li>
                <a href="javascript:;">了解更多</a>
            </li>
        </ul>
        <div>
            <div>
                <img src="img/home/home91.png">
                <img src="img/home/home92.png">
            </div>
            <div>
                <img src="img/home/home93.png">
                <img src="img/home/home94.png">
            </div>
        </div>
    </div>
    <div id="cosmetic" class="themeWhite">
        <div>
            <div>
                <img src="img/home/home104.png">
                <img src="img/home/home105.png">
            </div>
            <div>
                <img src="img/home/home101.png">
                <img src="img/home/home102.png">
                <img src="img/home/home103.png">
            </div>
        </div>
        <ul>
            <li>
                <img src="img/logo/logo-10.png">
                <ul>
                    <li>电商平台</li>
                    <li>完美护肤</li>
                </ul>
            </li>
            <li>天然呵护肌肤</li>
            <li>
                <a href="javascript:;">了解更多</a>
            </li>
        </ul>
    </div>
    <div id="pet" class="themeGreen">
        <ul>
            <li>
                <img src="img/logo/logo-11.png">
                <ul>
                    <li>电商平台</li>
                    <li>宠物乐园</li>
                </ul>
            </li>
            <li>宠物之家</li>
            <li>
                <a href="javascript:;">了解更多</a>
            </li>
        </ul>
        <div>
            <div>
                <img src="img/home/home111.png">
            </div>
            <div>
                <img src="img/home/home112.png">
                <img src="img/home/home113.png">
            </div>
        </div>
    </div>
    <div id="tool" class="themeWhite">
        <div>
            <div>
                <img src="img/home/home122.png">
                <img src="img/home/home123.png">
                <img src="img/home/home124.png">
            </div>
            <div>
                <img src="img/home/home121.png">
                <img src="img/home/home125.png">
            </div>
        </div>
        <ul>
            <li>
                <img src="img/logo/logo-10.png">
                <ul>
                    <li>电商平台</li>
                    <li>完美护肤</li>
                </ul>
            </li>
            <li>天然呵护肌肤</li>
            <li>
                <a href="javascript:;">了解更多</a>
            </li>
        </ul>
    </div>
    <div id="advantage">
        <h4>UNIQUE ADVANTAGES</h4>
        <h3>What makes the theme so spectacular</h3>
        <p>View the main features and developments in this best-advanced PrestaShop theme</p>
        <div>
            <ul>
                <li><img src="img/home/feature-1.png" alt=""></li>
                <li>JX LookBook</li>
                <li>Present the collection of your products in a creative way and let your customers see products
                    visually in real contexts.</li>
            </ul>
            <ul>
                <li><img src="img/home/feature-2.png" alt=""></li>
                <li>JX Advanced Filter</li>
                <li>Implement a quick search of the needed product based on the key features. Create filters with the
                    unlimited number of search criteria.</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><img src="img/home/feature-3.png" alt=""></li>
                <li>JX Wishlist</li>
                <li>Allow the customers to create and manage wish lists of products making it easy to relocate and
                    purchase them in the future.</li>
            </ul>
            <ul>
                <li><img src="img/home/feature-4.png" alt=""></li>
                <li>JX Mega Layout</li>
                <li>Organize your content according to your needs, create and place extra content in any position and
                    any layout. Totally redesign the look of your template in a few seconds only.</li>
            </ul>
        </div>
    </div>
    <div id="new">
        <span>new</span>
        <div>
            <ul>
                <li>
                    <h3>JX Products Manager</h3>
                </li>
                <li>
                    <p>Manage your products with 16 helpful options of the module with ease saving your time. The module
                        can be very helpful for managing stores with many products, which have to be constantly revised.
                    </p>
                </li>
            </ul>
            <img src="img/home/jx-products-manager.jpg" alt="">
        </div>
    </div>
    <div id="tip">
        <h3>Get 10+ Premium Modules and save over $450</h3>
        <h6>Make your website more productive and appealing with premium PrestaShop modules. Check them out below:</h6>
        <div>
            <ul>
                <li><img src="img/home/module-1.png" alt=""></li>
                <li>JX Mega Menu</li>
                <li>Create complex menus and allow your visitors to access different categories in no time. Build
                    compound menu with custom blocks, banners,links, icons, and buttons.</li>
            </ul>
            <ul>
                <li><img src="img/home/module-2.png" alt=""></li>
                <li>JX Search</li>
                <li>Add live product search to your online store and allow your customers selecting a specific category
                    for searching within its content.</li>
            </ul>
            <ul>
                <li><img src="img/home/module-3.png" alt=""></li>
                <li>JX Header account</li>
                <li>Give your customers access to login and registration form and let them create an account or log in
                    to the existing one.</li>
            </ul>
            <ul>
                <li><img src="img/home/module-4.png" alt=""></li>
                <li>JX Manufactures Block</li>
                <li>Point out the information about manufacturers of your products. It is possible to show both the
                    names and logos of the manufacturers for better recognition.</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><img src="img/home/module-5.png" alt=""></li>
                <li>JX Mosaic Products</li>
                <li>Create beautiful presentation of your grid-based view.</li>
            </ul>
            <ul>
                <li><img src="img/home/module-6.png" alt=""></li>
                <li>JX Category Products</li>
                <li>Add products from different categories to the front page of your store. Products can be displayed
                    either in tabs or as independent blocks with carousel slider functionality.</li>
            </ul>
            <ul>
                <li><img src="img/home/module-7.png" alt=""></li>
                <li>JX Products slider</li>
                <li>Display an unlimited amount of products with diverse information in spectacular slideshow.</li>
            </ul>
            <ul>
                <li><img src="img/home/module-8.png" alt=""></li>
                <li>JX Media Parallax</li>
                <li>Add a video or background image to the blocks on the site with multi-layered parallax effect.</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><img src="img/home/module-9.png" alt=""></li>
                <li>JX Homepage Category Gallery</li>
                <li>Let your customers browse by categories easier. Turn the homepage of your store into a gallery of
                    product category blocks.</li>
            </ul>
            <ul>
                <li><img src="img/home/module-10.png" alt=""></li>
                <li>JX Deal of the Day</li>
                <li>Create a daily deal for any product and display it on your site with a countdown timer. Inform your
                    customers of how much time is left until your product release.</li>
            </ul>
        </div>
    </div>
    <footer>
        <ul>
            <li>Don’t miss a chance to conquer new peaks</li>
            <li><a href="javascript:;" class="btn_pink_hover btn_pink">PURCHASE NOW</a></li>
            <li>Enjoy the theme? Don’t forget to <b>rate it with five stars</b>!</li>
            <li><img src="img/home/star.png" alt=""></li>
            <li>Drop us an email if you <b>have any comments or suggestions</b> regarding Eveprest 1.7</li>
            <li><img src="img/home/letter.jpg" alt=""></li>
        </ul>
    </footer>
    <!-- location to top -->
    <a class="location" href="#">
        <span class="mui-icon mui-icon-arrowup"></span>
    </a>`);
    $("body").prepend($elem);

    /***** theme style setting *****/
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

    /*******not completed*******/
    $header = $("#header");
    $(window).scroll(() => {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 500) {
            $header
                .addClass("fixed")
                .css({
                    background: "#fff"
                });
            // 
            $(".location")
                .addClass("fixed");
        } else {
            $header
                .removeClass("fixed");
            $(".location")
                .removeClass("fixed");
        }
    })

    /*****   navs hover setting*****/
    var $ul = $("#header>ul");
    $ul.on("mouseenter", "li.tab", function () {
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

        /****** navbar pic shadow ******/
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
        $("#navPics").on("click", ".jumpPage", function () {
            $(this).attr({
                href: "http://localhost:3000/products.html"
            })
        })
    })
        .on("mouseleave", "li.tab", function () {
            $(this)
                .find("a")
                .css({ background: "#fff", color: "#000" });
            $("#navPics")
                .remove();
        });


    /******carousel******/
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
    }, 3000);

    Utils.importHtml(EnvInfo.loginUrl, EnvInfo.loginHtml)
})()