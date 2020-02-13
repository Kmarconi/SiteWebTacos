var tailles;
var viandes;
var sauces;
var supplements;

var randomTaille = 0;
var randomNbSauce=0;
var randomSupp = 0;
var randomNbSupp=0;
var randomIndexViande=0;
var randomViande=0;
var randomIndexSauce=0;
var randomSauce=0;
var randomIndexSupp=0;
var randomSupp=0;

var prixTacos=Number(0);
var tailleTacos = "";
var page = document.getElementById("randomTacos");
var boutonRandom =document.getElementById("btnRandom");
var tampSauce="";
var dictTacos={};
var checkBoxSupp=document.getElementById("supplementCheckB");
var boolSupp=false;
var viandesTacos = [];
var saucesTacos = [];
var supplementsTacos = [];
var verifyResult;

$(document).ready(function() {
    $.when(
        $.get("http://localhost:3000/dataTacos/tailles",function(data,status) {
          tailles = data;
        },'json'),
        $.get("http://localhost:3000/dataTacos/viandes",function(data,status) {
          viandes = data;
        },'json'),
        $.get("http://localhost:3000/dataTacos/sauces",function(data,status) {
          sauces = data;
        },'json'),
        $.get("http://localhost:3000/dataTacos/supplements",function(data,status) {
          supplements = data;
        },'json')
      )
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

function generateRandomTaille()
{
    
    viandesTacos = [];
    saucesTacos = [];
    supplementsTacos = [];
    boolSupp=checkBoxSupp.checked;
    dictTacos={};
    randomTaille=1+Math.round(Math.random()*4);
    tailleTacos=tailles['Tailles'][randomTaille-1]['Nom'];
    prixTacos=Number(tailles['Tailles'][randomTaille-1]['Prix']);
    
    //var tacosJSON=tailles['Tailles'][randomTaille];
    for(let i=1;i<=randomTaille;i++)
    {
        randomIndexViande=Math.round(Math.random()*(viandes['Viandes'].length-1));
        console.log("Index Viande : "+randomIndexViande);
        randomViande=viandes['Viandes'][randomIndexViande]['Nom'];
        try {
            var boolTenders = viandes['Viandes'][randomIndexViande]['Prix'];
            if(boolTenders!=null)prixTacos+=Number(boolTenders);
        } catch (error) {
            console.log(error);
        }
        dictTacos["Viande"+i.toString()]=randomViande;
    }
    randomNbSauce=1+Math.round(Math.random());
    console.log("RandomNbSauce : "+randomNbSauce);
    for(let i=1;i<=randomNbSauce;i++)
    {
        randomIndexSauce=Math.round(Math.random()*(sauces['Sauces'].length-1));
        randomSauce=sauces['Sauces'][randomIndexSauce]['Nom'];
        while(randomSauce == tampSauce)
        {
            randomIndexSauce=Math.round(Math.random()*(sauces['Sauces'].length-1));
            randomSauce=sauces['Sauces'][randomIndexSauce]['Nom'];
        }
        tampSauce=randomSauce;
        dictTacos["Sauce"+i.toString()]=randomSauce;
    }
    if(boolSupp)
    {
        randomNbSupp=1+Math.round(Math.random()*3);
        //console.log("Nombre de suppléments : "+randomNbSupp);
        for(let i=1;i<=randomNbSupp;i++)
        {
            randomIndexSupp=Math.round(Math.random()*(supplements['Suppléments'].length-1));
            randomSupp=supplements['Suppléments'][randomIndexSupp]['Nom'];
            prixTacos+=Number(supplements['Suppléments'][randomIndexSupp]['Prix']);
            dictTacos["Supplément"+i.toString()]=randomSupp;
        }
    }
    
    $(".element").remove(); //Clean old generated tacos
    $(".btn-default").remove(); //Clean registerTacos button

    
    var labelToAdd='<h3 class =element>Votre Tacos ('+tailleTacos+') : </h3>';
    $(page).append(labelToAdd);
    //$(page).append('</br>');
    var viandeOfTacos = "<h4 class=element> Viande(s) : ";
    var saucesOfTacos = "<h4 class=element> Sauce(s) : ";
    var suppOfTacos   = "<h4 class=element> Supplément(s) : ";
    for(var key in dictTacos)
    {
        if(key.includes("Viande")){
            viandeOfTacos+=dictTacos[key] +", ";
            viandesTacos.push(dictTacos[key]);
        }
        else if(key.includes("Sauce")){
            saucesOfTacos+=dictTacos[key]+", ";
            saucesTacos.push(dictTacos[key]);
        }
        else if(key.includes("Supplément")){
            suppOfTacos+=dictTacos[key]+", ";
            supplementsTacos.push(dictTacos[key]);
        }
    }
    viandeOfTacos=viandeOfTacos.substring(0,viandeOfTacos.length-2);
    saucesOfTacos=saucesOfTacos.substring(0,saucesOfTacos.length-2);
    suppOfTacos=suppOfTacos.substring(0,suppOfTacos.length-2);
    viandeOfTacos+='</h4>';
    saucesOfTacos+='</h4>';
    suppOfTacos+='</h4>';
    //var labelToAdd='<h4 class=element>'+f+'</h4>';
    $(page).append(viandeOfTacos);
    $(page).append(saucesOfTacos);
    if(boolSupp)$(page).append(suppOfTacos);
    prixTacos = Math.max( Math.round(prixTacos * 10) / 10, 2.8 ).toFixed(2);
    var labelToAdd='<h3 class =element>Prix : '+prixTacos+' € </h3>';
    $(page).append(labelToAdd);
    boutonRandom.style.marginRight="20px";
    $(boutonRandom).after('<button id="buttonAddTacos" class="btn btn-default btn-lg" marginLeft=25px>Enregistrer le tacos</button>');

    $("#buttonAddTacos").click(function() {
        var user = accessCookie("session");
        if(user != ""){
          var note = prompt("Quelle note sur 10 voulez-vous attribuer à ce tacos ?");
          if(note <=10 && note >=0 && note != null){
            var jsonTacos = new Object();
            jsonTacos.user = user;
            jsonTacos.taille = tailleTacos;
            jsonTacos.viandes = viandesTacos;
            jsonTacos.sauces = saucesTacos;
            jsonTacos.supplements = supplementsTacos;
            jsonTacos.prix = prixTacos;
            jsonTacos.note = note;
            $.post("http://localhost:3000/creationTacos/add", {jsonTacos:JSON.stringify(jsonTacos)},function(data,status) {
                      verifyResult = data;
                    },'text');
            alert("Tacos rajouté dans ta liste !")
          }else{
            if(note != null){
                alert("Note incorrecte");
            }
          }
        }else{
          alert("Il faut être connecté pour ajouter un tacos à sa liste");
        }
        
    });
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