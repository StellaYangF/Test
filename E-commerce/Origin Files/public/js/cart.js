$(window).load(() => {
    $('.closeCart').click(() => {
        $('.cartContainer').addClass('collapse');
    });
    $('.headerCart').click(() => {
        Utils.login();
    })
})