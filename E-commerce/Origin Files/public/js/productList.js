(() => {
    /***** document content padding *****/
    $elem = $(`<table></table>
    <!-- header import -->
    <header></header>
    <div class=" log_container collapse"></div>
    <!-- first floor -->
    <div class="first_floor">
        <div class="nav">
            <span><a href="javascript:;" class="home_link">首页</a> </span>
            <span class="mui-icon mui-icon-arrowright"></span>
            <span>女士专区</span>
        </div>
        <!-- navbar below image -->
        <div class="nav_img">
            <img src="img/fashion/fashion_women/women.jpg" alt="women">
            <div class="nav_container">
                <h3>Women</h3>
                <p>Fashion has always been so temporary and uncertain. You can’t keep up with it. This social phenomenon
                    is very whimsical, thus we as the consumers always try to stay in touch with all the latest fashion
                    tendencies.</p>
                <ul class="nav_content">
                    <li><span class="mui-icon mui-icon-arrowright"></span>Clothing</li>
                    <li><span class="mui-icon mui-icon-arrowright"></span>Shoes</li>
                    <li><span class="mui-icon mui-icon-arrowright"></span>Accessories</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- second floor -->
    <div class="second_floor">
        <!-- left navlists -->
        <div class="nav_list">
            <ul class="list_content one">
                <li class="nav_item_head"><a href="javascript:;">Suppliers</a></li>
                <li class="nav_item"><a href="javascript:;">Anne Klein</a></li>
                <li class="nav_item"><a href="javascript:;">ESPRIT</a></li>
                <li class="nav_item"><a href="javascript:;">Jack and Jones</a></li>
                <li class="nav_item"><a href="javascript:;">Jack Wolfskin</a></li>
                <li class="nav_item"><a href="javascript:;">Levi's</a></li>
            </ul>
            <ul class="list_content two">
                <li class="nav_item_head"><a href="javascript:;">Brands</a></li>
                <li class="nav_item"><a href="javascript:;">Anne Klein</a></li>
                <li class="nav_item"><a href="javascript:;">DKNY</a></li>
                <li class="nav_item"><a href="javascript:;">DOLCE&GABBANA</a></li>
                <li class="nav_item"><a href="javascript:;">GIORGIO ARMANI</a></li>
                <li class="nav_item"><a href="javascript:;">HUGO BOSS
                    </a></li>
            </ul>
            <div class="list_content three">
                <h5>On sale</h5>
                <div class="card">
                    <a href="javascript:;">
                        <img src="img/fashion/fashion_women/sm/1_sm.jpg" alt="1">
                    </a>
                    <div class="card_item_two">
                        <p><a href="javascript:;" class="title">Zara OVERSIZED PARKA</a></p>
                        <p class="desc">Fashion has always been so temporary and uncertain....</p>
                        <p class="price sm">$20.79</p>
                    </div>
                </div>
                <div class="card">
                    <a href="javascript:;">
                        <img src="img/fashion/fashion_women/sm/2_sm.jpg" alt="2">
                    </a>
                    <div class="card_item_two">
                        <p><a href="javascript:;" class="title">Zara OVERSIZED PARKA</a></p>
                        <p class="desc">Fashion has always been so temporary and uncertain....</p>
                        <p class="price sm">$20.79</p>
                    </div>
                </div>
                <div class="card">
                    <a href="javascript:;">
                        <img src="img/fashion/fashion_women/sm/3_sm.jpg" alt="3">
                    </a>
                    <div class="card_item_two">
                        <p><a href="javascript:;" class="title">Zara OVERSIZED PARKA</a></p>
                        <p class="desc">Fashion has always been so temporary and uncertain....</p>
                        <p class="price sm">$20.79</p>
                    </div>
                </div>
            </div>
            <button class="btn_black">折扣商品集</button>
        </div>
        <!-- right product list -->
        <div class="p_list">
            <!-- filter -->
            <div class="icon_group">
                <button class="btn_black sm">
                    <span class="mui-icon-extra mui-icon-extra-filter"></span>筛选</button>
                <div class="icon_pic">
                    <div class="btn_grp">
                        <div class="grid"><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <div class="list"><span></span><span></span></div>
                    </div>
                    <div class="select">
                        <select name="sort" id="">
                            <option value="one">综合</option>
                            <option value="two">销量</option>
                            <option value="three">价格降序</option>
                            <option value="four">价格升序</option>
                            <option value="five">信用</option>
                        </select>
                        <span class="mui-icon mui-icon-arrowdown"></span>
                    </div>
                    <span class="show_list">Showing 1-12 of 31 item(s)</span>
                </div>
            </div>
            <!-- product list -->
            <ul class="feature_container two">
            </ul>
            <!-- btn_group_page -->
            <div class="btn_group_page">
                <div>
                    <span class="show_list">Showing 1-12 of 31 item(s)</span>
                </div>
                <!-- btn_item -->
                <div class="btn_page">
                    <button><span class="mui-icon mui-icon-arrowleft"></span></button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button><span class="mui-icon mui-icon-arrowright"></span></button>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- footer import -->
    <footer></footer>`);
    $("body").prepend($elem);

    Utils.importHtml(EnvInfo.headerUrl, EnvInfo.headerHtml)
    Utils.importHtml(EnvInfo.footerUrl, EnvInfo.footerHtml)
    Utils.importHtml(EnvInfo.loginUrl, EnvInfo.loginHtml)
    /***** import feature_container.html *****/
    Utils.importHtml("featureContainer.html", ".feature_container.two")

    /***** nav arrow event *****/
    $(".nav_content")
        .on("mouseenter", 'li', function () {
            $(this)
                .css({
                    color: "#F9DEAA"
                })
                .find(".mui-icon")
                .css({
                    transform: "translate(5px)"
                })
        })
        .on("mouseleave", 'li', function () {
            $(this)
                .css({
                    color: "#fff"
                })
                .find(".mui-icon")
                .css({
                    transform: "translate(-5px)"
                })
        })

    /***** sort css setting*****/
    $("select").on("hover", "option", function () {
        $(this).css({
            color: "#EA9191",
            background: "#fff"
        })
    })


})()