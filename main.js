'use strict'  // débugg ton code et te préviens sur console.

console.log("c'est bon")


document.addEventListener('DOMContentLoaded', console.log('Yes easy !') ); // le DOMContentLoaded va fonctionné une fois la page charger

const btn = document.getElementById('xhr-button')
btn.addEventListener('click', function() {
    console.log('yes tu as appuyer')
})

// corrigé 


document.addEventListener('DOMContentLoaded',function() {
    btn.addEventListener('click',onClickXHRButton)
})
function onClickXHRButton(){console.log("j'ai cliqué sur le button !")}


// new exo 

const reponse = document.getElementById('xhr-response')

// function respons (){
//     reponse.textContent = " je suis un element rajouté"
// }

btn.addEventListener('click',function() {
    reponse.textContent = " je suis rajouter via le button"
})


// corrigé 2 

document.addEventListener("DOMContentLoaded",function() {
    document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
});

function onClickXHRButton() {
    let container = document.getElementById("xhr-response")
    container.innerHTML = "Ok je vois !";
}