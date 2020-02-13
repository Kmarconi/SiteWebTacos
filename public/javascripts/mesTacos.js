var verifyResult;

var tacosTab;

$(document).ready(function() {

    //Récupérer de tous les tacos d'un utilisateur
    $.when(
        $.get("http://localhost:3000/mesTacos/getAll", {username: "Thibault"}, function(data,status) {
            tacosTab = data;
        },'json'),
    )
    .done(function() {
        //Utilisation du tableau de tacos
        alert(tacosTab);

        //Affichage de la note du premier par exemple
        alert(tacosTab[0].note);
    });
    var user = accessCookie("session");
    if (user!="")
    {
        $("#buttonSign").click(function () {
            document.cookie = "session=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
            document.location.reload();
        })
        .text("Deconnexion");
        $("#listTop").append('<li><a class="widget-title">Connecté en tant que '+user+'</a></li>');
        $("#signUpDownPage").click(function () {
            document.cookie = "session=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
            document.location.reload();
        })
        .text("Deconnexion").attr("href","index");
    }else
    {
        $("#buttonSign").text("SIGN IN / SIGN UP").attr("href","signin");
        $("#signUpDownPage").text("SIGN IN / SIGN UP").attr("href","signin");
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