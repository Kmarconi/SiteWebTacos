const jsonTailles = '{"Tailles": [ { "Nom": "M", "Prix": "5", "NbGalettes": 1, "NbViandes" : 1 }, { "Nom": "L", "Prix": "6", "NbGalettes": 1, "NbViandes" : 2 }, { "Nom": "XL", "Prix": "9", "NbGalettes": 2, "NbViandes" : 3 }, { "Nom": "XXL", "Prix": "14", "NbGalettes": 3, "NbViandes" : 4 }, { "Nom": "Giga", "Prix": "22", "NbGalettes": 5, "NbViandes" : 5 } ] }';
const tailles = JSON.parse(jsonTailles);

const jsonViandes = '{ "Viandes": [ { "Nom": "Tenders", "Prix": 1, "PathImages": "to be defined"},{ "Nom": "Viande Hachée", "PathImages": "to be defined"},{ "Nom": "Cordon Bleu", "PathImages": "to be defined"},{ "Nom": "Nuggets", "PathImages": "to be defined"},{ "Nom": "Merguez", "PathImages": "to be defined"},{ "Nom": "Filet de Poulet", "PathImages": "to be defined"},{ "Nom": "Filet de Poulet Mariné", "PathImages": "to be defined"},{ "Nom": "Falafel", "PathImages": "to be defined"}]}';
const viandes = JSON.parse(jsonViandes);

const jsonSauces = '{ "Sauces": [ { "Nom": "Algérienne", "PathImages": "to be defined" }, { "Nom": "Barbecue", "PathImages": "to be defined" }, { "Nom": "Burger", "PathImages": "to be defined" }, { "Nom": "Chili Thai", "PathImages": "to be defined" }, { "Nom": "Curry", "PathImages": "to be defined" }, { "Nom": "Harissa", "PathImages": "to be defined" }, { "Nom": "Ketchup", "PathImages": "to be defined" }, { "Nom": "Mayonnaise", "PathImages": "to be defined" }, { "Nom": "Samourai", "PathImages": "to be defined" }, { "Nom": "Texane Pepper", "PathImages": "to be defined" }, { "Nom": "FUEGO", "PathImages": "to be defined" }, { "Nom": "Tabasco", "PathImages": "to be defined" }, { "Nom": "Biggy", "PathImages": "to be defined" } ]}';
const sauces = JSON.parse(jsonSauces);

const jsonSupplements = '{ "Suppléments": [ { "Nom": "Emmental", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Gouda", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Cheddar", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Raclette", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Boursin", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Chèvre", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Mozzarella", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Vache qui Rit", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Poivronnade", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Poulet", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Boeuf façon Bacon Fumé", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Jalapeño & Cheese Nuggets", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Oignons Caramélisés", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Lardons de Volailles", "Prix": 0.9, "PathImages": "to be defined" } ]}';
const supplements = JSON.parse(jsonSupplements);

var tailleSelect=document.getElementById("taille-select");
var page=document.getElementById("createTacos");
var tailleChosen = false;
var nbViandes = 0;
var nbSauce = 2;
var oui=1;
$(document).ready(function() {

    console.log(tailles['Tailles'][0])
    
    $.each(tailles['Tailles'], function(i, f){
      var option = "<option value="+f.NbViandes+">"+f.Nom+" ("+f.NbViandes+" viande(s))</option>";
      $(option).appendTo(tailleSelect);
    });
});

 function tailleSelected(select){
  if(select.value!="" && !tailleChosen){
    tailleChosen = true;
    nbViandes = select.value;
    createContent(select.value);
  }else if(tailleChosen){
    removeContent();
    if(select.value!=""){
      createContent(select.value);
      nbViandes=select.value;
    }else{
      tailleChosen=false;
    }
  }
 };

 function createContent(number){
  var viandeText = '<h3 id="viandeText">Choisir les viandes</h3>';
    $(page).append(viandeText);

    for(i=0; i<number; i++){
      var viandeSelect = '<select name="viande" id="viande-select'+i+'"><option value="">-- Choisir une viande --</option></select>';
      $(page).append(viandeSelect);
      viandeSelect = document.getElementById("viande-select"+i);
      $.each(viandes['Viandes'], function(i, f){
        var option = "<option value="+f.Prix+">"+f.Nom+"</option>";
        $(option).appendTo(viandeSelect);
      });
      viandeSelect.style.marginRight = "20px";
    }

    var sauceText = '<h3 id="sauceText">Choisir les sauces</h3>';
    $(page).append(sauceText);

    for(i=0;i<nbSauce;i++){
      var sauceSelect = '<select name="sauce" id="sauce-select'+i+'"><option value="">-- Choisir une sauce --</option></select>';
      $(page).append(sauceSelect);
      sauceSelect = document.getElementById("sauce-select"+i);
      $.each(sauces['Sauces'], function(i, f){
        var option = "<option value="+f.Nom+">"+f.Nom+"</option>";
        $(option).appendTo(sauceSelect);
      })
      sauceSelect.style.marginRight = "20px";
    }

    var supText = '<h3 id="supText">Des suppléments ?</h3>';
    $(page).append(supText);
    var buttonSup = '<button class="btn btn-action" id="buttonSup">Ajouter un supplément</button>';
    $(page).append(buttonSup);
    
 }

 function removeContent(){
  document.getElementById("viandeText").remove();
    for(i=0; i<nbViandes; i++){
      document.getElementById("viande-select"+i).remove();
    }
  document.getElementById("sauceText").remove();
  for(i=0;i<nbSauce;i++){
    document.getElementById("sauce-select"+i).remove();
  }
  document.getElementById("supText").remove();
  document.getElementById("buttonSup").remove();
 }