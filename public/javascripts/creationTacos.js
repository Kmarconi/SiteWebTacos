var verifyResult;

$(document).ready(function() {
    
    
    var user = accessCookie("session");
    if (user!="")
    {
        $("#buttonSign").click(function () {
            document.cookie = "session=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
            document.location.reload();
        })
        .text("Deconnexion");
    }else
    {
        $("#buttonSign").text("SIGN IN / SIGN UP").attr("href","signin");
    }
});
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