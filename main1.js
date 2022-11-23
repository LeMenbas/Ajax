'use strict'  // débugg ton code et te préviens sur console.

// console.log("c'est bon")


// document.addEventListener('DOMContentLoaded', console.log('Yes easy !') ); // le DOMContentLoaded va fonctionné une fois la page charger

// const btn = document.getElementById('xhr-button')
// btn.addEventListener('click', function() {
//     console.log('yes tu as appuyer')
// })

// // corrigé 


// document.addEventListener('DOMContentLoaded',function() {
//     btn.addEventListener('click',onClickXHRButton)
// })
// function onClickXHRButton(){console.log("j'ai cliqué sur le button !")}


// // new exo 

// const reponse = document.getElementById('xhr-response')

// // function respons (){
// //     reponse.textContent = " je suis un element rajouté"
// // }

// btn.addEventListener('click',function() {
//     reponse.textContent = " je suis rajouter via le button"
// })
 

// corrigé 2 

// document.addEventListener("DOMContentLoaded",function() {
//     document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
// });

// function onClickXHRButton() {
//     let container = document.getElementById("xhr-response")
//     container.innerHTML = "Ok je vois !";
// }

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById('xhr-button').addEventListener("click", onClickXHRButton)
// });

// function onClickXHRButton() {
//     const xhr = new XMLHttpRequest();

//     xhr.open('get', 'contenu-html.html', true);
    
//     xhr.addEventListener('load',function(){
//         console.log("Statut de la réponse : " + xhr.status + " - " + xhr.statusText);
//         const container = document.getElementById("xhr-response");
//         const response = xhr.responseText;
//         container.innerHTML = response;
//     } );

//     xhr.addEventListener('error', function() {
//         console.log("la requete à échouer ! ");
//     }) ;
    
//     xhr.send();
// }

// "use strict"; // Ajout de sécurité

// document.addEventListener("DOMContentLoaded", function() {

//     document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
// });

// function onClickXHRButton(){

//     const xhr = new XMLHttpRequest();

//     xhr.open('get','contenu-html.html');

//     xhr.addEventListener("load", function() {

//         console.log("Statut de la réponse: "+ xhr.status + " -  " + xhr.statusText);

//         const container = document.getElementById("xhr-response");
//         const response = xhr.responseText;
//         container.innerHTML = response;

//     });

//     xhr.addEventListener("error", function(){
//         console.log("La requte AJAX a échouée ! ☠")
//     })

//     xhr.send();
    
// }


// utilisé du json
// document.addEventListener("DOMContentLoaded", function() {

//         document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
//     });
    
//     function onClickXHRButton(){
    
//         const xhr = new XMLHttpRequest();
    
//         xhr.open('get','contenu-json.json');
    
//         xhr.addEventListener("load", function() {
    
//             console.log("Statut de la réponse: "+ xhr.status + " -  " + xhr.statusText);
    
//             const container = document.getElementById("xhr-response");

            
//             const jsonData = xhr.responseText;
//             container.innerHTML = jsonData;

//             const data = JSON.parse(jsonData);
//             // console.log(data)
//             // console.log(data[2].titre);
//             // console.log(jsonData);
//             for( let i = 0; i <= data.lengh; i++) {

//                 console.log(data[i])
//             }
//         });
    
//         xhr.addEventListener("error", function(){
//             console.log("La requte AJAX a échouée ! ☠")
//         })
    
//         xhr.send();
        
//     }
    

"use strict"; // Ajout de sécurité

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('xhr-button').addEventListener('click', onClickXHRButton)
});



function onClickXHRButton(){

    ajaxGetJson("contenu-json.json",(data)=>{console.log(data);});  // ceci est une fonction fléché
   

}