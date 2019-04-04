(() => {
    /******* back to login*******/
    $(".backLogin").click(() => {
        $(".register_frame").addClass("collapse").find(".user").val(``);
        $(".login_frame").removeClass("collapse").find(".user").val(``)
    });

    /*******login  jump to register*******/
    $(".register").click(() => {
        $(".login_frame").addClass("collapse").find(".user").val(``);
        $(".register_frame").removeClass("collapse").find(".user").val(``);
    })

    /*******close event*******/
    $(".close").click(() => {
        $(".log_container").addClass("collapse");
        // init two frames status 
        $(".register_frame").addClass("collapse").find(".user").val(``);
        $(".login_frame").removeClass("collapse").find(".user").val(``);
    })

    /*******login verify*******/
    $(".login_frame")
        .on("focus", ".user", function () { $(this).addClass("txt_focus"); })
        // function onfocus onblur
        .on("blur", ".user", function () { $(this).removeClass("txt_focus") })
        // btn.login
        .on("click", ".btn.login", () => {
            var chkName = checkLogin($(".uname"), "用户名"),
                uname = $(".uname").val(),
                upwd = $(".upwd").val();
            if (chkName) {
                var chkPwd = checkLogin($(".upwd"), "密码");
                if (chkPwd) {
                    $.ajax({
                        url: "http://localhost:3000/user/login",
                        type: "post",
                        data: { uname, upwd },
                    }).then((res) => {
                        $(".resMsg").html(res.msg);
                        $(".uname").val(``).addClass("txt_focus");
                        $(".upwd").val(``);
                        setTimeout(() => {
                            $(".resMsg").html(``);
                        }, 1500)
                        if (res.code == 1) {
                            // login success
                            sessionStorage = res.data.uid;
                            $(".log_container").addClass("collapse");
                            $(".u_info").first("li").html(uname)
                        }
                    })
                }
            }
        })

    // check login uname & upwd
    function checkLogin(input, msg) {
        var value = input.val();
        if (!value) {
            input
                .addClass("txt_focus")
                .siblings(".msg").html(`${msg}不能为空`);
            return false;
        } else {
            input
                .removeClass(".txt_focus")
                .siblings(".msg").html(``);
            return true;
        }
    }

    /*******register verify*******/
    $(".register_frame")
        .on("focus", ".user", function () {
            var txt = $(this);
            txt.addClass('txt_focus')
            if (txt.is('.uname')) { $('.msg.one').html('3~10个字符以内的字母、数字或下划线的组合') };
            if (txt.is('.email')) { $('.msg.two').html('须包含正确邮箱地址') }
            if (txt.is('.tel')) { $('.msg.three').html('有效的联系方式') }
            if (txt.is('.upwd')) { $('.msg.four').html('6~16个字符以内的字母、数字或下划线的组合') }
        })
        .on("blur", ".user", function () {
            $(this).removeClass("txt_focus")
                .siblings('.msg').html(``);
        })
        .on("click", ".reg.btn", function () {
            var uname = $('.uname').val(),
                email = $('.email').val(),
                tel = $('.tel').val(),
                upwd = $('.upwd').val(),
                sex = $(':checked').val(),
                regUname = /^\w{3,10}$/,
                regEmail = /^\w{1,}@[0-9a-zA-Z]{1,}(.com)|(.cn)$/,
                regTel = /^((\+86|0086)\s+)?1[3-8]\d{9}$/,
                regUpwd = /^\w{6,16}$/;
            if (!regUname.test(uname)) {
                $('.msg.one').val('非法账号名').addClass('vali_fail');
            } else {
                $.ajax({
                    url: "http://localhost:3000/user/verifyUname",
                    type: "get",
                    data: { uname },
                }).then(function (res) {
                    // verify database whether the uname exists
                    if (res.code == 1) {
                        txt
                            .siblings('.msg')
                            .removeClass("vali_success")
                            .addClass("vali_fail")
                            .html(res.msg);
                    } else {
                        txt.siblings('.msg')
                            .addClass("vali_success")
                            .removeClass("vali_fail")
                            .html(res.msg);
                    }
                })
            }
        })
        .on("click", '.btn.reg',
            () => {
                var uname = $(".uname").val(),
                    upwd = $(".upwd").val(),
                    email = $(".email").val(),
                    tel = $(".tel").val(),
                    sex = $(':checked').val();
                if (verifyBlur($parent, ".uname", /^[\w]{3,10}$/, "账号名不规范")) {
                    if (verifyBlur($parent, ".uname", /^[\w]{3,10}$/, "账号名不规范")) {

                    }
                }
                if (!sex) {
                    $("#woman")
                        .next("msg")
                        .html("性别须勾选")
                        .addClass("vali_fail");
                    return;
                } else {
                    $("#woman")
                        .next("msg")
                        .html()
                }
                $.ajax({
                    url: "http://localhost:3000/user/register",
                    type: "post",
                    data: { uname, upwd, email, tel, sex }
                }).then((res) => {
                    console.log(res);
                })
            })
})()
