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

    static getCart(){
        $.ajax({
            url: 'http://localhost:3000/cart/list',
            data: { uid: sessionStorage.getItem('uid') },
            type: 'get',
            dataType: 'json'
        }).then((result) => {
            var html = '',
                total = 0,
                list = result.data;
            if (!list) {
                $('.productList').html('购物车空空如也，赶快添加商品~');
            } else {
                for (var item of list) {
                    var pid = item.pid;
                    total += (item.count * item.price);
                    html += ` <li>
                <input type="checkbox">
                <img src="img/fashion/fashion_details/sm_${pid}_1.jpg" alt=${pid}>
                <div class='productDetail'>
                    <h5 class='pTitle'>Zara CHECK SHIRT</h5>
                    <p>单价：
                        <span class='pPrice'>¥${item.price.toFixed(2)}</span>
                    </p>
                    <p>数量：
                        <span>${item.count}</span>
                    </p>
                    <p>金额：
                        <span class='total'>¥${(item.count * item.price).toFixed(2)}</span>
                    </p>
                </div>
                <span class='deleteOne'>×</span>
                </li>`;
                };
                $('.productList').html(html);
            }
            html = `<li>
            <span>
                    <input type="checkbox">全选
                    </span>
            <span class="deleteAll">删除</span>
            </li>
            <li>
            <span>总计</span>
            <span class='sum'>${total.toFixed(2)}</span>
            </li>`;
            $('.summary').html(html);
        })
    }

    static login(){
                $.ajax({
            url: 'http://localhost:3000/cart/list',
            data: { uid: sessionStorage.getItem('uid') },
            type: 'get',
            dataType: 'json'
        }).then((result) => {
            var html = '',
                total = 0,
                list = result.data;
            if (!list) {
                $('.productList').html('购物车空空如也，赶快添加商品~');
            } else {
                for (var item of list) {
                    var pid = item.pid;
                    total += (item.count * item.price);
                    html += ` <li>
                <input type="checkbox">
                <img src="img/fashion/fashion_details/sm_${pid}_1.jpg" alt=${pid}>
                <div class='productDetail'>
                    <h5 class='pTitle'>Zara CHECK SHIRT</h5>
                    <p>单价：
                        <span class='pPrice'>¥${item.price.toFixed(2)}</span>
                    </p>
                    <p>数量：
                        <span>${item.count}</span>
                    </p>
                    <p>金额：
                        <span class='total'>¥${(item.count * item.price).toFixed(2)}</span>
                    </p>
                </div>
                <span class='deleteOne'>×</span>
                </li>`;
                };
                $('.productList').html(html);
            }
            html = `<li>
            <span>
                    <input type="checkbox">全选
                    </span>
            <span class="deleteAll">删除</span>
            </li>
            <li>
            <span>总计</span>
            <span class='sum'>${total.toFixed(2)}</span>
            </li>`;
            $('.summary').html(html);
        })
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