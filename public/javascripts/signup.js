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
                alert("Compte créé");
                window.location.href="http://localhost:3000/index";
            }
            else
            {
                alert("Nom d'utilisateur déjà existant.");
            }
        });  

    });
});