const minutes = 1;

var verifyResult;

$(document).ready(function() {

    $("#testConnexionButton").click(function() {
        checkCookie();
    });
    
    $("#verifyConnexionButton").click(function() {

        var username = $("#username").val();
        var password = $("#password").val();

        $.when(
            $.get("http://localhost:3000/signin/verify", {username: username, password: password},function(data,status) {
                verifyResult = data;
              },'text')
            )
        .done(function() {
            $('#verifyResultText').text(function(i, oldText) {
                return verifyResult;
            });

            if(verifyResult == "accepted") {
                createCookie("session",username,2);
                window.location.href="http://localhost:3000/index";
            }
            else if(verifyResult == "refused")
            {
                alert("Mot de passe ou nom d'utilisateur incorrect");
            }

        });

    });
});
function deconnection(cookieName)
{
    document.cookie = cookieName+"=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}
function createCookie(cookieName,cookieValue,daysToExpire)
{
    var date = new Date();
    date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}
function accessCookie(cookieName)
{
    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    for(var i=0; i<allCookieArray.length; i++)
    {
        var temp = allCookieArray[i].trim();
        if (temp.indexOf(name)==0)
        return temp.substring(name.length,temp.length);
    }
    return "";
}
function checkCookie()
{
    var user = accessCookie("session");
    if (user!="")
    {
        alert("Welcome Back " + user + "!!!");
    }
}