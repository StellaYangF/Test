(() => {
    /******* back to login*******/
    $(".backLogin").click(() => {
        $(".register_frame").addClass("collapse").find(".user").val(``);
        $(".login_frame").removeClass("collapse").find(".user").val(``).siblings('.msg').html(``).removeClass('vali_success vali_fail');
        $('.uname.one').focus();
    });

    /*******login  jump to register*******/
    $(".register").click(() => {
        $(".login_frame").addClass("collapse").find(".user").val(``);
        $(".register_frame").removeClass("collapse").find(".user").val(``).siblings('.msg').html(``).removeClass('vali_success vali_fail');
        $('.uname.two').focus();
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
        .on("focus", ".user", function() { $(this).addClass("txt_focus").siblings('.msg').html(''); })
        // function onfocus onblur
        .on("blur", ".user", function() {
            $(this).removeClass("txt_focus")
                .siblings('.msg').html('');
        })
        // btn.login
        .on("click", ".btn.login", () => {
            var uname = $(".uname").val(),
                upwd = $(".upwd").val(),
                timer = null,
                count = 3;
            if (!uname) {
                $('.uname.one').focus().siblings('.msg').html('用户名不能为空');
            } else {
                if (!upwd) {
                    $('.upwd.one').focus().siblings('.msg').html('密码不能为空')
                } else {
                    $.ajax({
                        url: "http://localhost:3000/user/login",
                        type: "post",
                        data: { uname, upwd },
                    }).then((result) => {
                        console.log(result);
                        if (result.code == -1) {
                            $('.resMsg').html(result.msg);
                            $('.login_frame')
                                .find('.user').val(``)
                                .siblings('.msg').html(``);
                            $('.uname.one').focus();
                            setTimeout(() => {
                                $('.resMsg').html(``)
                            }, 1500)
                        } else {
                            sessionStorage.setItem('uid', result.data);
                            sessionStorage.setItem('uname', uname);
                            timer = setInterval(() => {
                                $('.resMsg').html(result.msg + `，${count}秒后跳转登购买页`);
                                count--;
                            }, 1000)
                            setTimeout(() => {
                                clearInterval(timer);
                                $('.log_container').addClass('collapse');
                            }, 4000)
                            $('.u_info li').first().html(`欢迎` + uname)
                        }
                    })
                }
            }
        })

    /*******register verify*******/
    $(".register_frame")
        .on("focus", ".user", function() {
            var txt = $(this);
            txt.addClass('txt_focus').siblings('.msg').removeClass('vali_fail').removeClass('vali_success')
            if (txt.is('.uname')) { $('.msg.one').html('3-10个字符以内的字母、数字或下划线的组合') };
            if (txt.is('.email')) { $('.msg.two').html('须包含正确邮箱地址') }
            if (txt.is('.tel')) { $('.msg.three').html('有效的联系方式') }
            if (txt.is('.upwd')) { $('.msg.four').html('6-16个字符以内的字母、数字或下划线的组合') }
        })
        .on("blur", ".user", function() {
            $(this).removeClass("txt_focus").siblings('.msg').removeClass('vali_fail').removeClass('vali_success');
            var uname = $('.uname.two').val(),
                email = $('.email').val(),
                tel = $('.tel').val(),
                upwd = $('.upwd.two').val(),
                regUname = /^\w{3,10}$/,
                regEmail = /^\w{1,}@[0-9a-zA-Z]{1,}(.com)|(.cn)$/,
                regTel = /^((\+86|0086)\s+)?1[3-8]\d{9}$/,
                regUpwd = /^\w{6,12}$/;
            if ($(this).is('.uname')) {
                if (!regUname.test(uname)) {
                    $('.msg.one')
                        .html('用户名格式有误').addClass('vali_fail');
                } else {
                    $.ajax({
                        url: "http://localhost:3000/user/verifyUname",
                        type: "get",
                        data: { uname },
                    }).then(function(res) {
                        // verify database whether the uname exists
                        if (res.code == 1) {
                            $('.uname')
                                .siblings('.msg')
                                .addClass("vali_fail")
                                .html(res.msg);
                        } else {
                            $('.uname').siblings('.msg')
                                .addClass("vali_success")
                                .html(res.msg);
                        }
                    })
                }
            };
            if ($(this).is('.email')) {
                if (!regEmail.test(email)) {
                    $('.msg.two')
                        .html('邮箱地址格式有误').addClass('vali_fail');
                } else {
                    $('.email').siblings('.msg')
                        .addClass("vali_success").html('格式正确')
                }
            };
            if ($(this).is('.tel')) {
                if (!regTel.test(tel)) {
                    $('.msg.three')
                        .html('联系方式格式有误').addClass('vali_fail');
                } else {
                    $('.tel').siblings('.msg')
                        .addClass("vali_success").html('格式正确')
                }
            }
            if ($(this).is('.upwd')) {
                if (!regUpwd.test(upwd)) {
                    $('.msg.four')
                        .html('密码格式有误').addClass('vali_fail');
                } else {
                    $('.upwd').siblings('.msg')
                        .addClass("vali_success").html('格式正确')
                }
            };
        })
        .on("click", ".reg.btn", function() {
            var uname = $('.uname.two').val(),
                email = $('.email').val(),
                tel = $('.tel').val(),
                upwd = $('.upwd.two').val(),
                sex = $(':checked').val(),
                regUname = /^\w{3,10}$/,
                regEmail = /^\w{1,}@[0-9a-zA-Z]{1,}(.com)|(.cn)$/,
                regTel = /^((\+86|0086)\s+)?1[3-8]\d{9}$/,
                regUpwd = /^\w{3,10}$/;
            if (!regUname.test(uname)) {
                $('.uname').focus();
                $('.msg.one')
                    .html('用户名格式有误').addClass('vali_fail');
                return;
            } else {
                $.ajax({
                    url: "http://localhost:3000/user/verifyUname",
                    type: "get",
                    data: { uname },
                }).then(function(res) {
                    // verify database whether the uname exists
                    if (res.code == 1) {
                        $('.uname').focus()
                            .siblings('.msg')
                            .addClass("vali_fail")
                            .html(res.msg);
                        return;
                    } else {
                        $('.uname').siblings('.msg')
                            .addClass("vali_success")
                            .html(res.msg);
                    }
                })
            }
            if (!regEmail.test(email)) {
                $('.email').focus();
                $('.msg.two')
                    .html('邮箱地址格式有误').addClass('vali_fail');
                return;
            } else {
                $('.email').siblings('.msg')
                    .addClass("vali_success").html('格式正确')
            }
            if (!regTel.test(tel)) {
                $('.tel').focus();
                $('.msg.three')
                    .html('联系方式格式有误').addClass('vali_fail');
                return;
            } else {
                $('.tel').siblings('.msg')
                    .addClass("vali_success").html('格式正确')
            }
            if (!regUpwd.test(upwd)) {
                $('.upwd').focus();
                $('.msg.four')
                    .html('密码格式有误').addClass('vali_fail');
                return;
            } else {
                $('.upwd').siblings('.msg')
                    .addClass("vali_success").html('格式正确')
            }
            if (!sex) {
                $('.msg.five').html('性别不明确').addClass('vali_fail');
                return;
            }
            $.ajax({
                url: 'http://localhost:3000/user/register',
                data: { uname, email, tel, upwd, sex },
                type: 'post'
            }).then((result) => {
                $('.msg.six').html(result.msg);
                if (result.code == -1) {
                    $('.register_frame')
                        .find('.user').val(``)
                        .siblings('.msg').html(``);
                    $('.uname.two').focus();
                    setTimeout(() => {
                        $('.resMsg').html(``)
                    }, 1500)
                } else {
                    $('.msg.six').html(result.msg + `，3秒后跳转登录页面`);
                    setTimeout(() => {
                        $(".register_frame").addClass("collapse").find(".user").val(``);
                        $(".login_frame").removeClass("collapse").find(".user").val(``).siblings('.msg').html(``).removeClass('vali_success vali_fail');
                        $('.uname.one').focus();
                    }, 3000)
                }
            })
        })

})();