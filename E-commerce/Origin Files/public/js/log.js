(() => {
    /*******register back to login*******/
    $(".backLogin").click(() => {
        $(".register_frame").addClass("collapse");
        $(".login_frame").removeClass("collapse");
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
    // login
    $(".login_frame").
        on("focus", ".user", function () { $(this).addClass("txt_focus"); })
        // function onfocus onblur
        .on("blur", ".user", function () { $(this).removeClass("txt_focus") })

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
                verifyFocus($(this), ".email", "包含正确邮箱地址");
            })

        // function onfocus onblur
        .on("blur", ".user", function () {
            // remove txt_focus
            $(this).removeClass("txt_focus");
            // verify uname exist
            if ($(this).is(".uname")) {
                var uname = $(this).val();
                if (!/^[\w]{3,10}$/.test(uname)) {
                    $(this).siblings('.msg')
                        .html("账号名不规范")
                        .removeClass("vali_success")
                        .addClass("vali_fail");
                } else {
                    $.ajax({
                        url: "http://localhost:3000/user/verifyUname",
                        type: "get",
                        data: { uname },
                    }).then(function (res) {
                        if (res.code == 1) {
                            $(this).html(res.msg);
                            return;
                        } else {
                            $(this).siblings('.msg')
                                .addClass("vali_success")
                                .removeClass("vali_fail")
                                .html("格式正确");
                        }
                    })
                }
            }
            // verify email tel upwd
            verifyBlur($(this), ".email", /^\w{1,}@[a-zA-Z](.com)|(.cn)$/, "邮箱不规范");
            verifyBlur($(this), ".tel", /^((\+86|0086)\s+)?1[3-8]\d{9}$/, "手机号不规范");
            verifyBlur($(this), ".upwd", /^[\w]{6,12}$/, "密码不规范");
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
})()
