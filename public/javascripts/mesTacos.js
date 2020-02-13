var verifyResult;

var tacosTab;
var page=$('#page');
$(document).ready(function() {

    //Récupérer de tous les tacos d'un utilisateur
    $.when(
        $.get("http://localhost:3000/mesTacos/getAll", {username: "Thibault"}, function(data,status) {
            tacosTab = data;
        },'json'),
    )
    .done(function() {
        //Utilisation du tableau de tacos
        //alert(tacosTab);

        //Affichage de la note du premier par exemple
        //alert(tacosTab[0].note);
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
        $.when(
            $.get("http://localhost:3000/mesTacos/getAll", {username: user}, function(data,status) {
                tacosTab = data;
            },'json'),
        )
        .done(function() {
            $.each(tacosTab, function(i, f){
                var prix=0;
                var tacosText = '<div id="tacosDisplay'+i+'" class="page-header" style="width:66.66666666666666%"></div>'
                $(page).append(tacosText);
                var tacosDisplay = $('#tacosDisplay'+i);
                var tailleText='<h3>'+(i+1)+': Tacos '+f.taille+'</h3></br>';
                $(tacosDisplay).append(tailleText);
    
                var viandeText = '<h4>Viande(s) : ';
                var viandes = f.viandes;
                for(i=0; i<viandes.length;i++){
                    if(i !=0){ viandeText += ', ' }
                    viandeText += viandes[i];
                }
                viandeText += '</h4>';
                $(tacosDisplay).append(viandeText);
    
                var sauces = f.sauces;
                if(sauces.length>0){
                    var sauceText = '<h4>Sauce(s) : ';
                    
                    for(i=0; i<sauces.length;i++){
                        if(i !=0){ sauceText += ', ' }
                        sauceText += sauces[i];
                    }
                    sauceText += '</h4>';
                    $(tacosDisplay).append(sauceText);
                }
                
                var supplements = f.suppléments;
                if(supplements.length>0){
                    var supplementsText = '<h4>Supplément(s) : ';
                    
                    for(i=0; i<supplements.length;i++){
                        if(i !=0){ supplementsText += ', ' }
                        supplementsText += supplements[i];
                    }
                    supplementsText += '</h4>';
                    $(tacosDisplay).append(supplementsText);
                }
                $(tacosDisplay).append('</br><p><h3>Prix : '+Math.max( Math.round(f.prix * 10) / 10, 2.8 ).toFixed(2)+' €  |  Note : '+f.note+'</h3>');
                $(tacosDisplay).append('<button id="'+f.id+'" onClick="deleteTacos(this.id)"><img src="style/images/trash.png"></img></button></p>');
            });
        });
        
    }else
    {
        alert("Il faut être connecté pour accéder à ses tacos !");
        $("#buttonSign").text("Connexion / Inscription").attr("href","signin");
        $("#signUpDownPage").text("Connexion / Inscription").attr("href","signin");
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

function deleteTacos(id){
    alert(id);
}