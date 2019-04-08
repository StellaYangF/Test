(() => {
    /***** document content padding *****/
    $elem = $(`<table></table>
    <header></header>
    <!--body -->
    <section>
    <div class=" log_container collapse"></div>
        <!-- first floor -->
        <div class="first_floor">
            <div class="nav">
                <span><a href="javascript:;" class="home_link">首页</a> </span>
                <span class="mui-icon mui-icon-arrowright"></span>
                <span>T恤</span>
            </div>
        </div>
        <!-- second floor -->
        <div class="second_floor">
            <div class="pics">
                <div class="pics_sm">
                    <span class="mui-icon mui-icon-arrowup prev"></span>
                    <div class="img_group">
                        <img src="img/fashion/fashion_details/sm/shirt_sm_1.jpg" alt="1">
                        <img src="img/fashion/fashion_details/sm/shirt_sm_2.jpg" alt="2">
                        <img src="img/fashion/fashion_details/sm/shirt_sm_3.jpg" alt="3">
                        <img src="img/fashion/fashion_details/sm/shirt_sm_4.jpg" alt="4">
                        <img src="img/fashion/fashion_details/sm/shirt_sm_5.jpg" alt="5">
                        <img src="img/fashion/fashion_details/sm/shirt_sm_5.jpg" alt="5">
                    </div>
                    <span class="mui-icon mui-icon-arrowdown next"></span>
                </div>
                <div class="pics_md">
                    <img src="img/fashion/fashion_details/md/shirt_md_1.jpg" alt="1">
                </div>
            </div>
            <ul class="details">
                <li>參考 <span class="rfc">00113</span></li>
                <li class="title">T恤</li>
                <li class="stock">有现货</li>
                <li class="price">¥25.99</li>
                <li class="sz">
                    <span>尺寸</span>
                    <span class="mui-icon mui-icon-arrowdown"></span>
                    <select name="size" id="psize">
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </li>
                <li class="clr">
                    <span class="color">颜色</span>
                    <div>
                        <span class="clr_white"></span>
                        <span class="clr_red"></span>
                    </div>
                </li>
                <li class="cnt">
                    <div class="count">
                        <input type="text" value="1">
                        <span class="mui-icon mui-icon-arrowup plus"></span>
                        <span class="mui-icon mui-icon-arrowdown minus"></span>
                    </div>
                    <button class="btn_cart">加入购物车</button>
                </li>
                <li class="tool">
                    <span class=" mui-icon mui-icon-extra mui-icon-extra-heart" title="加入愿望清单"></span>
                    <span class="mui-icon mui-icon-search" title="比较"></span>
                </li>
                <li class="share">
                    <span class="mui-icon mui-icon-weibo" title="微博"></span>
                    <span class="mui-icon mui-icon-weixin" title="微信"></span>
                    <span class="mui-icon mui-icon-pengyouquan" title="朋友圈"></span>
                    <span class="mui-icon mui-icon-chat" title="信息"></span>
                </li>
            </ul>
        </div>
        <!-- third floor -->
        <div class="third_floor">
            <div class="prod_info">
                <span class="info one">商品描述</span>
                <span class="span">/</span>
                <span class="info two">宝贝详情</span>
                <span class="span">/</span>
                <span class="info three">累计评论</span>
            </div>
            <div class="prod_content">
                <div class="description">
                    <p>
                        时尚一直是如此暂时和不确定。你无法跟上它。这种社交现象非常异想天开，因此我们作为消费者总是试图与所有最新的时尚趋势保持联系。显然没有错，因为时尚满足了我们吸引人的意愿。时尚也是繁荣和社会地位的探索者。因此，我们穿着时髦服装的自然愿望有许多原因，如历史，社交等。因此，时尚花费了很多钱。但是现在时尚并不像几个世纪前那样无法获得。我们很幸运有机会购买定性，时尚和实惠的服装。

                    </p>
                    <p>
                        因此，我们很高兴为您提供我们的产品，我们确信只有我们选择的服装才能最适合您。我们的产品是通用的，因为它适合不同客户的不同需求。我们向您保证这非常重要，它表明我们的产品具有灵活性等能力。这对你有好处，因为我们都知道人们会随着时间的推移改变他们的主张，而且我们的善意将会持续很长时间。购买衣服的主要原因是公平的价格，非凡的风格和完美的品质的独特组合。在这里你可以找到各种尺寸，颜色，款式和面料的服装。
                    </p>
                    <p>
                        它最适合你。因为我们都生活在消费无数商品和服务的时代，这已经成为我们社会所谓的消费文化快速增长的主要原因。因此，这种情况迫使所有领先的成功公司深入探讨不同潜在客户群体的所有需求和愿望。这就是为什么我们为您提供伟大的市场和技术研究的结果 - 我们的宏伟产品。我们的员工努力制作这种商品。我们的优势是由最好的专家在最先进的技术的帮助下组成的，它使我们有权将此产品视为优质产品。
                    </p>
                </div>
                <div class="pdetails collapse">
                    <div class="summary">
                        <span>有货</span>
                        <span>100件商品</span>
                        <span>品牌</span>
                        <span>伊芙丽</span>
                        <span>参考</span>
                        <span>00101</span>
                    </div>
                    <ul class="pdesc">
                        <li>
                            <span>场合</span>
                            <span>随意</span>
                        </li>
                        <li>
                            <span>样式</span>
                            <span>花色</span>
                        </li>
                        <li>
                            <span>外形尺寸</span>
                            <span>2*3*1英寸</span>
                        </li>
                    </ul>
                </div>
                <ul class="comments collapse">
                    <li>
                        <div class="input_group">
                            <input type="checkbox" checked>全部
                            <input type="checkbox">图片<span>(110)</span>
                            <input type="checkbox">追评<span>(320)</span>
                            <input type="checkbox">好评<span>(1524)</span>
                            <input type="checkbox">中评<span>(123)</span>
                            <input type="checkbox">差评<span>(0)</span>
                        </div>
                        <div class="com_order">
                            <span class="mui-icon mui-icon-arrowdown"></span>
                            <select name="comment_order" id="cmt_order">
                                <option value="recmend">推荐排序</option>
                                <option value="latest">最近评价</option>
                            </select>
                        </div>
                    </li>
                    <li class="comment_content">
                        <img src="img/avatar/getAvatar_1.jpg" alt="1">
                        <div>
                            <p>
                                仔细看一下 真的裤子质量很棒 有你们黑粉水军说的那么夸张吗 什么裤子穿着会染色 简直是无稽之谈 要做良心买家 质量真的不好你可以退货 黑人家就不对了 嘿嘿，原谅我这个正义使者的垃圾吐槽 哈哈 反正裤子质量很好 我还没过水洗过 穿了之后我会给追评的 超级满意
                            </p>
                            <div class="rcmd_pics">
                                <img src="img/comment/1.jpg" alt="1">
                            </div>
                            <div class="c_info">
                                <span class="ctime">2019年3月31日</span>
                                <span>颜色分类: 浅蓝色[偏小一码]</span>
                                <span>尺寸: S</span>
                            </div>
                        </div>
                    </li>
                    <li class="comment_content">
                        <img src="img/avatar/getAvatar_1.jpg" alt="1">
                        <div>
                            <p>
                                仔细看一下 真的裤子质量很棒 有你们黑粉水军说的那么夸张吗 什么裤子穿着会染色 简直是无稽之谈 要做良心买家 质量真的不好你可以退货 黑人家就不对了 嘿嘿，原谅我这个正义使者的垃圾吐槽 哈哈 反正裤子质量很好 我还没过水洗过 穿了之后我会给追评的 超级满意
                            </p>
                            <div class="rcmd_pics">
                                <img src="img/comment/1.jpg" alt="1">
                            </div>
                            <div class="c_info">
                                <span class="ctime">2019年3月31日</span>
                                <span>颜色分类: 浅蓝色[偏小一码]</span>
                                <span>尺寸: S</span>
                            </div>
                        </div>
                    </li>
                    <li class="comment_content">
                        <img src="img/avatar/getAvatar_1.jpg" alt="1">
                        <div>
                            <p>
                                仔细看一下 真的裤子质量很棒 有你们黑粉水军说的那么夸张吗 什么裤子穿着会染色 简直是无稽之谈 要做良心买家 质量真的不好你可以退货 黑人家就不对了 嘿嘿，原谅我这个正义使者的垃圾吐槽 哈哈 反正裤子质量很好 我还没过水洗过 穿了之后我会给追评的 超级满意
                            </p>
                            <div class="rcmd_pics">
                                <img src="img/comment/1.jpg" alt="1">
                            </div>
                            <div class="c_info">
                                <span class="ctime">2019年3月31日</span>
                                <span>颜色分类: 浅蓝色[偏小一码]</span>
                                <span>尺寸: S</span>
                            </div>
                        </div>
                    </li>
                    <li class="comment_content">
                        <img src="img/avatar/getAvatar_1.jpg" alt="1">
                        <div>
                            <p>
                                仔细看一下 真的裤子质量很棒 有你们黑粉水军说的那么夸张吗 什么裤子穿着会染色 简直是无稽之谈 要做良心买家 质量真的不好你可以退货 黑人家就不对了 嘿嘿，原谅我这个正义使者的垃圾吐槽 哈哈 反正裤子质量很好 我还没过水洗过 穿了之后我会给追评的 超级满意
                            </p>
                            <div class="rcmd_pics">
                                <img src="img/comment/1.jpg" alt="1">
                            </div>
                            <div class="c_info">
                                <span class="ctime">2019年3月31日</span>
                                <span>颜色分类: 浅蓝色[偏小一码]</span>
                                <span>尺寸: S</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- fourth floor -->
        <div class="fourth_floor">
            <h2>你可能还喜欢</h2>
            <!-- product list -->
            <ul class="feature_container two"></ul>
        </div>
    </section>
    <footer></footer>`);
    $("body").prepend($elem);

    // database get list
    $.ajax({
            url: 'http://localhost:3000/product/list',
            type: 'get',
            dataType: 'json',
            data: { pno: 1, psize: 8 }
        }).then((res) => {
            var list = res.data;
            var html = '';
            for (var item of list) {
                html += `<li class="list_item"><a href="http://localhost:3000/productDetails.html?pid=${item.pid}"class="img_item img_bg "><img src=${item.img_front} 
       data-imgFront=${item.img_front} data-imgBack=${item.img_back} alt=${item.pid} ></a><div class="card_body"><p class="pname"><a href="javascript:;">${item.pname}</a></p><p class="price">¥${item.price.toFixed(2)}</p><div class="tools"><a href="javascript:;"><span class=" mui-icon mui-icon-extra mui-icon-extra-heart"></span></a><a href="javascript:;"><span class="mui-icon mui-icon-search"></span></a><a id="icon-gear" href="javascript:;"><span class="mui-icon mui-icon-gear"></span></a></div></div></li>`
            };
            $('.feature_container.two').html(html)
                // list_item hover event
                .on('mouseenter', 'img', function() {
                    var src = $(this).attr('data-imgBack');
                    $(this).attr({ src })
                })
                .on('mouseleave', 'img', function() {
                    var src = $(this).attr('data-imgFront');
                    $(this).attr({ src })
                });
        })
        // header ul_info
    Utils.importHtml(EnvInfo.headerUrl, EnvInfo.headerHtml)
    Utils.importHtml(EnvInfo.footerUrl, EnvInfo.footerHtml)
    Utils.importHtml(EnvInfo.loginUrl, EnvInfo.loginHtml)

    /***** products event *****/
    $(".prod_info")
        .on("click", ".info", function() {
            $(this).css({
                    borderBottom: "2px solid rgb(203,170,149)",
                    color: "#2F2C2F"
                })
                .siblings().css({
                    color: "#BAB3B3",
                    borderBottom: "none"
                });
            if ($(this).is(".one")) {
                $(".description")
                    .removeClass("collapse")
                    .siblings().addClass("collapse")
            } else if ($(this).is(".two")) {
                $(".pdetails")
                    .removeClass("collapse")
                    .siblings().addClass("collapse")
            } else {
                $(".comments")
                    .removeClass("collapse")
                    .siblings().addClass("collapse")
            }
        })
})()