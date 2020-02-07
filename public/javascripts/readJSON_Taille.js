var tailles;
var viandes;
var sauces;
var supplements;

var tailleSelect=document.getElementById("taille-select");
var page=document.getElementById("createTacos");
var tailleChosen = false;
var nbViandes = 0;
var nbSauce = 2;
var oui=1;
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
    .done(function() {
      $.each(tailles['Tailles'], function(i, f){
        var option = "<option value="+f.NbViandes+">"+f.Nom+" ("+f.NbViandes+" viande(s))</option>";
        $(option).appendTo(tailleSelect);
      })
    })

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

