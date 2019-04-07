// utilities 
// import login
class Utils {
    static importHtml(url, html) {
        $.ajax({
            url: url,
            type: "get",
            success: (res) => {
                $(html)
                    .html(res);
            }
        })
    }
}




function EnvInfo() {

}
EnvInfo.loginUrl = "login.html";
EnvInfo.headerUrl = "header.html";
EnvInfo.footerUrl = "footer.html";
EnvInfo.headerHtml = "header";
EnvInfo.footerHtml = "footer";
EnvInfo.loginHtml = "log_container";