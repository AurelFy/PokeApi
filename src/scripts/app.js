'use strict'; 

var inputText = document.querySelector('.search--input');

var btn = document.querySelector('.search--btn');
// sélectionner le h3 
var h3Title = document.querySelector('.pokemon--title');

var sprite = document.querySelector('.pokemon--sprite');

var listElement = document.querySelector('.pokemon--type');

var statsElement = document.querySelector('.pokemon--stat');

var card = document.querySelector('.pokemon')




    






btn.addEventListener('click', function () {

    var text = 'La valeur du champ est : ' + inputText.value; 
    console.log(text);
    // créer l'url qui correspond à la valeur du champs
    var url = 'https://web.mayfly.ovh/proxy/pokeapi.php?endpoint=pokemon/' + inputText.value;
    console.log(url)
    // faire un fetch pour avoir les données json
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            
            h3Title.innerHTML = data.name;
            sprite.src = data.sprites.front_default;

            

            data.types.forEach(function(type){
                var itemLi = document.createElement('li');
                itemLi.innerHTML = type.type.name;
                listElement.appendChild(itemLi);
            }); 

            data.stats.forEach(function(stat) {
                var statsLi = document.createElement('li'); 
                statsLi.innerHTML = stat.stat.name + " : " + stat.base_stat;
                statsElement.appendChild(statsLi); 
            })

        });
});