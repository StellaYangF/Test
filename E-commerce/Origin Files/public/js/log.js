(() => {
    /*******register back to login*******/
    $(".backLogin").click(() => {
        $(".register_frame").addClass("collapse");
        $(".login_frame").removeClass("collapse")
    });

    /*******login  jump to register*******/
    $(".register").click(() => {
        $(".login_frame").addClass("collapse");
        $(".register_frame").removeClass("collapse");
    })

    /*******close event*******/
    $(".close").click(() => {
        $(".log_container").addClass("collapse");
        // init two frames status 
        $(".register_frame").addClass("collapse");
        $(".login_frame").removeClass("collapse");
    })

    /*******log verify*******/
    $(".login_frame").
        on("focus", ".user", function () { $(this).addClass("txt_focus"); })
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
                            if(res.code==1){
                                // login success
                                sessionStorage=res.data.uid;
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

    // register
    $(".register_frame").
        on("focus", ".user",
            function () {
                // add txt_focus
                $(this).addClass("txt_focus");
                // verify uname
                verifyFocus($(this), ".uname", "3~10个字符以内的字母、数字或下划线的组合");
                // verify upwd
                verifyFocus($(this), ".upwd", "6~12个字符以内的字母、数字或下划线的组合");
                // verify email
                verifyFocus($(this), ".email", "须包含正确邮箱地址");
            })

        // function onfocus onblur
        .on("blur", ".user", verifyBtn($(this)))
        .on("click", '.btn.reg',
            () => {
                var uname = $(".uname").val(),
                    upwd = $(".upwd").val(),
                    email = $(".email").val(),
                    tel = $(".tel").val(),
                    sex = $(':checked').val();
                console.log(uname);
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

    // function to show tips
    function verifyFocus($parent, $txt, $msg) {
        if ($parent.is($txt)) {
            $parent.siblings('.msg').html($msg)
                .removeClass("vali_success vali_fail");
        }
    };

    // function to verify msg
    function verifyBlur($parent, $txt, $reg, $msgFail) {
        if ($parent.is($txt)) {
            var $val = $parent.val();
            if (!$reg.test($val)) {
                $parent.siblings('.msg')
                    .html($msgFail)
                    .removeClass("vali_success")
                    .addClass("vali_fail");
                return;
            } else {
                $parent.siblings('.msg')
                    .addClass("vali_success")
                    .removeClass("vali_fail")
                    .html("格式正确");
            }
        }
    }
    function verifyBtn($parent) {
        // remove txt_focus
        $parent.removeClass("txt_focus");
        // verify uname exist
        if ($parent.is(".uname")) {
            var txt = $parent;
            var uname = $parent.val();
            if (!/^[\w]{3,10}$/.test(uname)) {
                txt.siblings('.msg')
                    .html("账号名不规范")
                    .removeClass("vali_success")
                    .addClass("vali_fail");
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
                        return;
                    } else {
                        txt.siblings('.msg')
                            .addClass("vali_success")
                            .removeClass("vali_fail")
                            .html("格式正确");
                    }
                })
            }
        }
        // verify email tel upwd
        verifyBlur($parent, ".email", /^\w{1,}@[a-zA-Z]\+(.com)|(.cn)$/, "邮箱不规范");
        verifyBlur($parent, ".tel", /^((\+86|0086)\s+)?1[3-8]\d{9}$/, "手机号不规范");
        verifyBlur($parent, ".upwd", /^[\w]{6,12}$/, "密码不规范");
    }
})()
