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
                        <p class="price sm">¥20.79</p>
                    </div>
                </div>
                <div class="card">
                    <a href="javascript:;">
                        <img src="img/fashion/fashion_women/sm/2_sm.jpg" alt="2">
                    </a>
                    <div class="card_item_two">
                        <p><a href="javascript:;" class="title">Zara OVERSIZED PARKA</a></p>
                        <p class="desc">Fashion has always been so temporary and uncertain....</p>
                        <p class="price sm">¥20.79</p>
                    </div>
                </div>
                <div class="card">
                    <a href="javascript:;">
                        <img src="img/fashion/fashion_women/sm/3_sm.jpg" alt="3">
                    </a>
                    <div class="card_item_two">
                        <p><a href="javascript:;" class="title">Zara OVERSIZED PARKA</a></p>
                        <p class="desc">Fashion has always been so temporary and uncertain....</p>
                        <p class="price sm">¥20.79</p>
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
                    <div class="btn_page">
                    <button class="prev"><span class="mui-icon mui-icon-arrowleft"></span></button>
                    <button class="pageOne">1</button>
                    <button class="pageTwo">2</button>
                    <button class="pageThree">3</button>
                    <button class="next"><span class="mui-icon mui-icon-arrowright"></span></button>
                </div>
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
                    <button class="prev"><span class="mui-icon mui-icon-arrowleft"></span></button>
                    <button class="pageOne">1</button>
                    <button class="pageTwo">2</button>
                    <button class="pageThree">3</button>
                    <button class="next"><span class="mui-icon mui-icon-arrowright"></span></button>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- footer import -->
    <footer></footer>`);
    $("body").prepend($elem);

    // database get list并封装函数多次调用
    function getList(pno = 1) {
        $.ajax({
            url: 'http://localhost:3000/product/list',
            data: { pno },
            type: 'get',
            dataType: 'json',
        }).then((res) => {
            var list = res.data;
            var html = '';
            for (var item of list) {
                html += `<li class="list_item"><a href="http://localhost:3000/productDetails.html?pid=${item.pid}"class="img_item img_bg "><img src=${item.img_front} data-imgFront=${item.img_front} data-imgBack=${item.img_back} alt=${item.pid} ></a><div class="card_body"><p class="pname"><a href="javascript:;">${item.pname}</a></p><p class="price">¥${item.price.toFixed(2)}</p><div class="tools"><a href="javascript:;"><span class=" mui-icon mui-icon-extra mui-icon-extra-heart"></span></a><a href="javascript:;"><span class="mui-icon mui-icon-search"></span></a><a id="icon-gear" href="javascript:;"><span class="mui-icon mui-icon-gear"></span></a></div></div></li>`
            };
            $('.feature_container.two')
                .html(html)
                // list_item hover event
                .on('mouseenter', 'img', function () {
                    var alt = $(this).attr('alt');
                    if (alt < 21) {
                        var src = $(this).attr('data-imgBack');
                        $(this).attr({ src })
                    }
                })
                .on('mouseleave', 'img', function () {
                    var src = $(this).attr('data-imgFront');
                    $(this).attr({ src })
                });
        })
    }

    Utils.importHtml(EnvInfo.headerUrl, EnvInfo.headerHtml)
    Utils.importHtml(EnvInfo.footerUrl, EnvInfo.footerHtml)
    Utils.importHtml(EnvInfo.loginUrl, EnvInfo.loginHtml)

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

    // home_link
    $('.home_link').click(function () {
        $(this).attr({
            href: 'http://localhost:3000/products.html'
        });
    });

    $(window).load(() => {
        // 初始默认显示第一页工12个商品
        getList();
        // 保存页码所对应pno
        var pno = 1;
        // 翻页/选择页面按钮事件
        // 上一页初始化禁用
        $('.prev').prop('disabled', true)
            // 默认第一页选中
            .next('button').addClass('selected');
        // 按钮点击事件
        $('.btn_page').on('click', 'button', function () {
            var btn = $(this);
            // 点击下一页pno++,，并调用页面更新
            if (btn.is('.next')) {
                $('.prev').prop('disabled', false);
                pno++;
                getList(pno);
                if (pno == 2) {
                    $('.pageTwo').addClass('selected').siblings()
                        .removeClass('selected');
                }
                if (pno == 3) {
                    $('.pageThree').addClass('selected').siblings()
                        .removeClass('selected');
                    $('.next').prop('disabled', true);
                    return;
                }
            }
            // 点击上一页pno--
            if (btn.is('.prev')) {
                $('.next').prop('disabled', false);
                pno--;
                getList(pno);
                if (pno == 2) {
                    $('.pageTwo').addClass('selected').siblings()
                        .removeClass('selected');
                }
                if (pno == 1) {
                    $('.pageOne').addClass('selected').siblings()
                        .removeClass('selected');
                    $('.prev').prop('disabled', true);
                    return;
                }
            }
            // 点击页码1显示
            if (btn.is('.pageOne')) {
                if (pno != 1) {
                    pno = 1;
                    $('.pageOne').addClass('selected').siblings().removeClass('selected');
                    getList();
                    $('.next').prop('disabled',false);
                    $('.prev').prop('disabled',true)
                }
            }
            // 点击页面2
            if(btn.is('.pageTwo')){
                if (pno != 2) {
                    pno = 2;
                    $('.pageTwo').addClass('selected').siblings().removeClass('selected');
                    getList(pno);
                    $('.next').prop('disabled',false)
                }
            }            
            // 点击页面3
            if(btn.is('.pageThree')){
                if (pno != 3) {
                    pno = 3;
                    $('.pageThree').addClass('selected').siblings().removeClass('selected');
                    getList(pno);
                    $('.next').prop('disabled',true);
                    $('.prev').prop('disabled',false)
                }
            }
        })
    })
})()