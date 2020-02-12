var verifyResult;

$(document).ready(function() {

    $("#buttonInscription").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();
        var passwordConfirm = $("#passwordConfirm").val();

        if(password != passwordConfirm) {
            alert("Veuillez saisir des mots de passes identiques.")
        }

        $.when(
            $.post("http://localhost:3000/signup/register", {username: username, password: password},function(data,status) {
                verifyResult = data;
              },'text')
            )
        .done(function() {
            if(verifyResult == "accepted")
            {
                //alert("Compte créé");
                createCookie("session",username,2);
                window.location.href="http://localhost:3000/index";
            }
            else
            {
                alert("Nom d'utilisateur déjà existant.");
            }
        });  

    });
});

function createCookie(cookieName,cookieValue,daysToExpire)
{
    var date = new Date();
    date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}