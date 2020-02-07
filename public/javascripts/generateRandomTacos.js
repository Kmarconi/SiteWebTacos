const jsonTailles = '{"Tailles": [ { "Nom": "M", "Prix": "5", "NbGalettes": 1, "NbViandes" : 1 }, { "Nom": "L", "Prix": "6", "NbGalettes": 1, "NbViandes" : 2 }, { "Nom": "XL", "Prix": "9", "NbGalettes": 2, "NbViandes" : 3 }, { "Nom": "XXL", "Prix": "14", "NbGalettes": 3, "NbViandes" : 4 }, { "Nom": "Giga", "Prix": "22", "NbGalettes": 5, "NbViandes" : 5 } ] }';
const tailles = JSON.parse(jsonTailles);

const jsonViandes = '{ "Viandes": [ { "Nom": "Tenders", "Prix": 1, "PathImages": "to be defined"},{ "Nom": "Viande Hachée", "PathImages": "to be defined"},{ "Nom": "Cordon Bleu", "PathImages": "to be defined"},{ "Nom": "Nuggets", "PathImages": "to be defined"},{ "Nom": "Merguez", "PathImages": "to be defined"},{ "Nom": "Filet de Poulet", "PathImages": "to be defined"},{ "Nom": "Filet de Poulet Mariné", "PathImages": "to be defined"},{ "Nom": "Falafel", "PathImages": "to be defined"}]}';
const viandes = JSON.parse(jsonViandes);

const jsonSauces = '{ "Sauces": [ { "Nom": "Algérienne", "PathImages": "to be defined" }, { "Nom": "Barbecue", "PathImages": "to be defined" }, { "Nom": "Burger", "PathImages": "to be defined" }, { "Nom": "Chili Thai", "PathImages": "to be defined" }, { "Nom": "Curry", "PathImages": "to be defined" }, { "Nom": "Harissa", "PathImages": "to be defined" }, { "Nom": "Ketchup", "PathImages": "to be defined" }, { "Nom": "Mayonnaise", "PathImages": "to be defined" }, { "Nom": "Samourai", "PathImages": "to be defined" }, { "Nom": "Texane Pepper", "PathImages": "to be defined" }, { "Nom": "FUEGO", "PathImages": "to be defined" }, { "Nom": "Tabasco", "PathImages": "to be defined" }, { "Nom": "Biggy", "PathImages": "to be defined" } ]}';
const sauces = JSON.parse(jsonSauces);

const jsonSupplements = '{ "Suppléments": [ { "Nom": "Emmental", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Gouda", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Cheddar", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Raclette", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Boursin", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Chèvre", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Mozzarella", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Vache qui Rit", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Poivronnade", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Poulet", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Boeuf façon Bacon Fumé", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Jalapeño & Cheese Nuggets", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Oignons Caramélisés", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Lardons de Volailles", "Prix": 0.9, "PathImages": "to be defined" } ]}';
const supplements = JSON.parse(jsonSupplements);

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

$(document).ready(function() {

});

function generateRandomTaille()
{
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
    $(page).append('</br>');
    var viandeOfTacos = "<h4 class=element> Viande(s) : ";
    var saucesOfTacos = "<h4 class=element> Sauce(s) : ";
    var suppOfTacos   = "<h4 class=element> Supplément(s) : ";
    for(var key in dictTacos)
    {
        //console.log(key);
        if(key.includes("Viande"))viandeOfTacos+=dictTacos[key] +", ";
        else if(key.includes("Sauce"))saucesOfTacos+=dictTacos[key]+", ";
        else if(key.includes("Supplément"))suppOfTacos+=dictTacos[key]+", ";
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
    
    var labelToAdd='<h3 class =element>Prix : '+Math.max( Math.round(prixTacos * 10) / 10, 2.8 ).toFixed(2)+' € </h3>';
    $(page).append(labelToAdd);
    boutonRandom.style.marginRight="20px";
    $(boutonRandom).after('<button class="btn btn-default btn-lg" marginLeft=25px role="button" onclick="mesTacos.ejs">Enregistrer le tacos</button>');

    //console.log(dictTacos);
    //console.log("Prix : " +prixTacos +" €");
}