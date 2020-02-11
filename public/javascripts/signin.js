const minutes = 1;

var verifyResult;

$(document).ready(function() {

    /*$("#testConnexionButton").click(function() {

        if($.cookie("session")) {
            $('#verifyResultText').text(function(i, oldText) {
                return "Verified !!";
            });
        }
    });*/
    
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

            /*if(verifyResult == "accepted") {
                var date = new Date();
                date.setTime(date.getTime() + (minutes * 60000));
                $.cookie("session", username, { expires: date });
            }*/

        });

    });
});

function signin() {

    
}