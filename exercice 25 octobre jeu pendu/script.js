"use strict";

/*
//afficher le mot
const p = document.querySelector('.class1');

//cacher le mot
let regex = /[a-zA-Z]/g;
let regex2 = /[a-zA-Z][^l]/g;

//variable pour décalrer le mot
let find = "snowball";
let find2 = find.replace(regex, '_')

//test changement lettre
let a = find.split('');
console.log("a: ", a);
console.log("a index 1:", a[1]);

let b = find2.split('');
console.log("b: ", b);
console.log("b index 1:", b[1]);




p.innerHTML += find2

find2.replace("_", "n")

/*

const btn =  document.querySelector('.btn');

btn.addEventListener("click", test);

// j'apui sur le bouton, il regarde si la lettre est présente sur le premier, si oui alors il l'affiche dans la variable cahcé

function test (){
    
        find2.replace("_", "n")
        p.innerHTML = find2
    }
*/

// caché les lettres et les faire apparaitre

/* 

let chance = 7;

let word = "snowball";
let wordlist = word.split("")
let wordlength = wordlist.length
console.log(wordlist);
console.log(wordlength);

let hiddenword = "";
for (let i=0; i < wordlength ; i++){
    hiddenword += "_"
}

document.getElementById("word").innerHTML = hiddenword;


let guessinput = document.getElementById("guess")
let submitbutton = document.getElementById("submit")
let result = document.getElementById("result")
let link = document.getElementById("link")

submitbutton.onclick = function(){
    let guess = guessinput.value;
    if(guess.lenght > 1 || guess.length == 0){
        result.innerHTML = "entrer une seule lettre";
    }
    else if(word.indexOf(guess) == -1){
        result.innerHTML = "Mauvaise lettre"

    }
    else {
        for( let i=0; i<wordlength; i++){
            if(word[i] == guess)
            hiddenword = hiddenword.substr(0, i) + guess + hiddenword.substr(i + 1)
        }
    }
    document.getElementById("word").innerHTML = hiddenword;
}

if(hiddenword === word ){
result.innerHTML = "Félicitation vous avez trouvé !"
guessinput.style.display = "none"
submitbutton.style.display = "none"
link.style.display = "block"
}

*/
//FIN VERSION 1 DEBUT VERSION 2

/* MEILLEUR VERSION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */



const url = "./mots.json"




fetch(url).then(handleFetch);



function handleFetch(response)
{
    if(response.ok)
    {
        response.json()
            .then(data=>{
                

                let random = Math.floor(Math.random()* 10)
                console.log(random);
               
                let word = data[random] //
                let wordlist = data[random].split('')
                console.log("word", word);
                console.log("wordlist", wordlist);
                const wordtoguess = wordlist
                //alert(wordtoguess)

                let wordlength = wordtoguess.length;
                
                
                let hiddenword = "";

                for (let i=0; i < wordlength ; i++){
                    hiddenword += "_"
                }

document.getElementById("word").innerHTML = hiddenword;





const essai = document.querySelector('.tentatives');

let tentative = 3;


let guessinput = document.getElementById("guess")
let submitbutton = document.getElementById("submit")
let result = document.getElementById("result")
let link = document.getElementById("link")


submitbutton.onclick = function(){
    let guess = guessinput.value;
    if(guess.length > 1 || guess.length == 0){
       essai.innerHTML = "entrer une seule lettre";
    }
    else if(wordtoguess.indexOf(guess) == -1){
        result.innerHTML = "Mauvaise lettre"
        essai.innerHTML = `il vous reste ${tentative -= 1} tentatives`

    }

    else {
        for( let i=0; i<wordlength; i++){
            if(wordtoguess[i] == guess) ///
            hiddenword = hiddenword.substr(0, i) + guess + hiddenword.substr(i + 1)
        }
    }
    document.getElementById("word").innerHTML = hiddenword;

    if(hiddenword === word ){
        result.innerHTML = `Félicitation vous avez trouvé le mot ${word}`
        guessinput.style.display = "none"
        submitbutton.style.display = "none"
        link.style.display = "block"
        }
    
    else if (tentative == 0){
        result.innerHTML = "Perdu !!"
        guessinput.style.display = "none"
        submitbutton.style.display = "none"
        link.style.display = "block"
    }
    
    
}



// construction clavier

const clavier = document.querySelector('.clavier');

const initGame = (button, clickedLetter) => {
    if(wordtoguess.includes(clickedLetter)) {
        [...wordtoguess].forEach((letter, index) => {
            if(letter == clickedLetter){
                hiddenword = hiddenword.substr(0, index) + letter + hiddenword.substr(index + 1)
            }
        })
    console.log(clickedLetter, "cette lettre existe")
    }
    else console.log(clickedLetter, "cette lettre n'existe PAS")
}

for (let i = 97; i <= 122 ; i++){
    console.log(String.fromCharCode(i));
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i)
    clavier.appendChild(button);

    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
}









})
.catch(error=>console.error(error));
}
else
{
console.error(response.statusText);
}
}
console.log("fin du code");

 /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */ 


/* NE PAS TOUCHER

let word = "snowball";
let wordlist = word.split("")
let wordlength = wordlist.length
console.log(wordlist);
console.log(wordlength);

let hiddenword = "";
for (let i=0; i < wordlength ; i++){
    hiddenword += "_"
}

document.getElementById("word").innerHTML = hiddenword;


let guessinput = document.getElementById("guess")
let submitbutton = document.getElementById("submit")
let result = document.getElementById("result")
let link = document.getElementById("link")

submitbutton.onclick = function(){
    let guess = guessinput.value;
    if(guess.lenght > 1 || guess.length == 0){
        result.innerHTML = "entrer une seule lettre";
    }
    else if(word.indexOf(guess) == -1){
        result.innerHTML = "Mauvaise lettre"

    }
    else {
        for( let i=0; i<wordlength; i++){
            if(word[i] == guess)
            hiddenword = hiddenword.substr(0, i) + guess + hiddenword.substr(i + 1)
        }
    }
    document.getElementById("word").innerHTML = hiddenword;
}

if(hiddenword === word ){
result.innerHTML = "Félicitation vous avez trouvé !"
guessinput.style.display = "none"
submitbutton.style.display = "none"
link.style.display = "block"
}
*/

