"use strict";

// test boucle tant que

/*

 // ----------------- 5.1 --------------------

////// Version 1

let repete = prompt("voulez-vous un café ? (o/n)");

while(repete != "o"){
    repete = prompt("un café ? (o/n)")
    
} 

// Version 2



let repeat


while(repeat != "o"){
    repeat = prompt("voulez-vous un café vindediou? (o/n)");

} 

*/

// ----------------- 5.2 --------------------

//// Version 1

/*

let guess = 13;

let nombre = prompt("Choisi un nombre entre 10 et 20");

while ( nombre != guess){
    
        if (nombre < guess){
            nombre = prompt("Choisi un nombre plus grand");
        }
        else if (nombre > guess){
            nombre = prompt("Choisi un nombre plus petit");
        }     
}

/*

//// Version 2 erreur à ne pas faire - double demande de chiffres ! 

//  si changement de message, déclarer la variable à 'intérieur de la boucle.

let guess = 13;
let nombre ;



while ( nombre != guess){
    nombre = prompt("Choisi un nombre entre 10 et 20");
        if (nombre < guess)
            nombre = prompt("Choisi un nombre plus grand");
        else if (nombre > guess)
            nombre = prompt("Choisi un nombre plus petit");  
}

*/

// ----------------- 5.3 --------------------

//// Version 1 boucle while

/*

let nombre = prompt("choisissez un nombre");
let i = 0;

while ( i != 10) {
        console.log("le nombre vaut" + nombre + "i vaut" + i);
        i++;
        nombre++;
    if (nombre == 30){
        break;
    }
    else if(i == 30){
        break;
    }
}

*/

///// Version 2 avec boucle for

/*

let nombre = prompt("choisissez un nombre");

for(let i=0; i<11; i++){
    nombre++
    console.log("i " + i + "nombre vaut" + nombre);
}

*/

// ----------------- 5.4 --------------------

///// version 1 avec variable

/*

let nombre = prompt("de quelle nombre voulez-vous en faire la table de multiplication ?")

for(let i=0; i<11; i++){
    let total;
    total = nombre*i;
    console.log(total);
}

*/

///// version 2 sans variable

/*

let nombre = prompt("de quelle nombre voulez-vous en faire la table de multiplication ?")

for(let i=0; i<11; i++){
    console.log(nombre*i);

*/

///// version 3 erreur a ne pas faire

/*

let nombre = prompt("de quelle nombre voulez-vous en faire la table de multiplication ?")

for(let i=0; i<11; i++){
    nombre === nombre*i // -> undefined
    nombre = nombre*i //+
    console.log(nombre); //+// -> sans variable reprend le nombre donné initialement (ex: 2,2,2,2,2 ..; 3,3,3,3,3...)
}

*/

// ----------------- 5.5 --------------------

/*

let nombre = prompt("choisisser un nombre pour l'additionner factoriellement")*1;
let somme = 0;
console.log(typeof nombre);


    J'aimerais que i commence au nombre choisis par l'utilisateur.
    Décrémenter le nombre à chaque tour.
    Faire le total et l'afficher.

    problème : le chiffre commence bien au nombre choisit, il se décrémente mais ne s'ajoute pas au total comme une somme.
    par contre si let i = 5, cela fonctionne.

    NE PAS OUBLIER LE *1 SINON IL L'IMTERPRETE COMME UN STRING


for (let i=nombre; i > 0; i--){
    console.log(somme += i);
    console.log(typeof somme);
}

console.log("la somme factorielle est de " + somme);

*/

// ----------------- 5.6 --------------------

/*

let nombre = prompt("choisisser un nombre pour l'additionner factoriellement")*1;
let somme = 1;
console.log(typeof nombre);

for (let i=nombre; i > 0; i--){
    console.log(somme *= i);
    console.log(typeof somme);
}

console.log("la somme factorielle est de " + somme);

*/

// ----------------- 5.7 --------------------
// trouver le nombre le plus grand et indiquer l'index

/*

let array = [];


for (let i=0; i<3; i++){
    let nombre = prompt("choisissez un nombre")*1;
    array.push(nombre);
}

let max = Math.max(...array);
let index = array.indexOf(max);

console.log(max, index);

// le numéro max est trouvé,
// l'index est inconnu, retourne -1.



//console.log(array, array.length, typeof max, typeof index);





let nb, max, pos;

for(let i = 0; i<=5; i++){
    nb = parseInt(prompt("Donne moi un fichu nombre !"));
    if(i==0 || max<nb){
        max = nb;
        pos = i;
    }
    console.log("nb :" + nb + "max" + max + "pos" + pos  +"i" + i);
}
console.log(`Le nombre le plus grand est ${max} et a été donné à la saisie numéro ${pos}`);

*/


// ----------------- 5.8 --------------------

//--------------6.1-------

let tableau = [];

for (let i=0; i<8; i++){
    let nombre = prompt("choisissez votre chiffre")*1
    tableau.push(nombre*0)
    
}

console.log(tableau);

//--------------6.1-------