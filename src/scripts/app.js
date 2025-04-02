'use strict'; 

var inputText = document.querySelector('.search--input');
var btn = document.querySelector('.search--btn');

btn.addEventListener('click', function () {
    var text = 'La valeur du champ est : ' + inputText.value; 
    console.log(text);
    // créer l'url qui correspond à la valeur du champs
    var url
    // faire un fetch pour avoir les données json
});