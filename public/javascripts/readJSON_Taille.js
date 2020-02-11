var tailles;
var viandes;
var sauces;
var supplements;

var tailleSelect=document.getElementById("taille-select");
var page=document.getElementById("createTacos");
var tailleChosen = false;
var nbViandes = 0;
var nbSup = 0;
var idSup = 0;
const nbSauce = 2;
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
        var option = "<option value="+f['NbViandes']+">"+f['Nom']+" ("+f['NbViandes']+" viande(s))</option>";
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

 function addSupplement(){
  if(nbSup<4){
    //var supDiv = '<div id="supDiv'+nbSup+'" class="supplements"></div>'
    var supSection = '<section id="supSection'+idSup+'"></Section>'
    var supSelect = '<select name="supplement" id="sup-select'+idSup+'"><option value="">-- Choisir un supplément --</option></select>';
    var buttonDel = '<button id="delButton'+idSup+'" value="'+idSup+'" onclick="deleteSupplement(this)">x</button>';
    $(document.getElementById("supplement-section")).append(supSection);
    $(document.getElementById("supSection"+idSup)).append(supSelect);
    $(document.getElementById("supSection"+idSup)).append(buttonDel);
    var supSelect = document.getElementById("sup-select"+idSup);
    $.each(supplements['Suppléments'], function(i, f){
      var option = "<option value="+f['Prix']+">"+f['Nom']+" ("+f['Prix']+"€)</option>";
      $(option).appendTo(supSelect);
    });
    nbSup ++;
    idSup ++;
  }
}

function deleteSupplement(button){
  $(document.getElementById("supSection"+button.value)).remove();
  nbSup--;
  
}

 function createContent(number){
  var viandeText = '<h3 id="viandeText">Choisir les viandes</h3>';
    $(page).append(viandeText);

    for(i=0; i<number; i++){
      var viandeSelect = '<select name="viande" id="viande-select'+i+'"><option value="">-- Choisir une viande --</option></select>';
      $(page).append(viandeSelect);
      viandeSelect = document.getElementById("viande-select"+i);
      $.each(viandes['Viandes'], function(i, f){
        var option = "<option value="+f['Prix']+">"+f['Nom']+"</option>";
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
        var option = "<option value="+f['Nom']+">"+f['Nom']+"</option>";
        $(option).appendTo(sauceSelect);
      })
      sauceSelect.style.marginRight = "20px";
    }

    var supText = '<h3 id="supText">Des suppléments ?</h3>';
    $(page).append(supText);
    var supplementSection = '<section id="supplement-section"></section>';
    $(page).append(supplementSection);
    var buttonSup = '<button class="btn btn-action" id="buttonSup" onclick="addSupplement()">Ajouter un supplément</button>';
    $(page).append(buttonSup);
    document.getElementById("buttonSup").style.marginRight = "20px";
    var buttonValidate = '<button class="btn btn-action" id="buttonValidate" onclick="validateTacos()">Valider le tacos</button>';
    $(page).append(buttonValidate);
    
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
  $(document.getElementById("supplement-section")).remove();
  nbSup=0;
  document.getElementById("buttonSup").remove();
  document.getElementById("buttonValidate").remove();
 }

 function validateTacos(){
    for(i=0; i<nbViandes; i++){
      if(document.getElementById("viande-select"+i).value == ""){
        alert('Veuillez sélectionner les viandes avant de valider');
        return;
      }
    }
    var supplementSection = document.getElementById("supplement-section");
    for(i=0; i<supplementSection.childElementCount; i++){
      if(supplementSection.children[i].firstChild.value == ""){
        alert('Veuillez sélectionner les suppléments avant de valider');
        return;
      }
    }
    var prix=0;
    var tacosText='<h3>Votre Tacos (';
    var tailleSelected = document.getElementById("taille-select");
    $.each(tailles['Tailles'], function(i, f){
      if(tailleSelected.value == f['NbViandes']){
        tacosText += f['Nom'];
        prix+=Number(f['Prix']);
      }
    });
    tacosText += ') :</h3></br>';
    $(page).append(tacosText);

    var viande = '<h4>Viande(s) : ';
    for(i=0; i<tailleSelected.value;i++){
      var viandeSelected = document.getElementById("viande-select"+i);
      if(i !=0){ viande += ', ' }
      viande += viandes['Viandes'][viandeSelected.selectedIndex-1]['Nom'];
      if(viandes['Viandes'][viandeSelected.selectedIndex-1]['Prix'] != null){
        prix += Number(viandes['Viandes'][viandeSelected.selectedIndex-1]['Prix']);
      }
    }
    viande += '</h4>';
    $(page).append(viande);

    var sauce = "";
    for(i=0; i<2;i++){
      var sauceSelected = document.getElementById("sauce-select"+i);
      if(sauceSelected.selectedIndex != 0){
        if(i !=0){ sauce += ', ' } else { sauce = '<h4>Sauce(s) : '; }
        sauce += sauces['Sauces'][sauceSelected.selectedIndex-1]['Nom'];
      }
    }
    if(sauce.length != 0){
      sauce += '</h4>';
      $(page).append(sauce);
    }

    var sup = "";
    var supplementSection = document.getElementById("supplement-section");
    for(i=0; i<supplementSection.childElementCount; i++){
      if(i !=0){ sup += ', ' } else { sup = '<h4>Supplément(s) : '; }
      sup += supplements['Suppléments'][supplementSection.children[i].firstChild.selectedIndex-1]['Nom'];
      prix += Number(supplements['Suppléments'][supplementSection.children[i].firstChild.selectedIndex-1]['Prix']);
    }
    if(sup.length != 0){
      sup += '</h4>';
      $(page).append(sup);
    }
    
    $(page).append('</br><h3>Prix : '+prix+' €</h3>');
    $(page).append('<a id="buttonNewTacos" class="btn btn-default btn-lg" role="button" href="CreationTacos">Faire un autre tacos</a>');
    $(page).append('<a class="btn btn-action btn-lg" role="button" href="CreationTacos/add/?taille=>Ajouter à "mes tacos"</a>');
    var buttonNewTacos = document.getElementById("buttonNewTacos");
    buttonNewTacos.style.marginRight="20px";


    removeContent()
    document.getElementById("taille-select").remove();
    document.getElementById("tailleText").remove();
  }

