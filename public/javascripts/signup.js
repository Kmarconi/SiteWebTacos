var verifyResult;

$(document).ready(function() {

    $("#buttonInscription").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();
        var passwordConfirm = $("#passwordConfirm").val();
        $.when(
            $.post("http://localhost:3000/signup/register", {username: username, password: password, passwordConfirm:passwordConfirm},function(data,status) {
                verifyResult = data;
              },'text')
            )
        .done(function() {
            console.log(username,password,passwordConfirm);
            if (verifyResult == "refused")
            {
                alert("Nom d'utilisateur déjà existant");
            }
            else if(verifyResult == "accepted")
            {
                alert("Compte créé");
                window.location.href="http://localhost:3000/index";
            }
        });  

    });
});