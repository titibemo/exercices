"use strict";



//message interface
let inputnumber = document.querySelector('.inputnumber');
let value = inputnumber.value;
let p = document.querySelector('.message');
let submit = document.querySelector('.sub');

//tentatives
let rejouer = document.querySelector('.again');
let gagneRejouer = document.querySelector('.again2');
let b = 0;
let c = 7;


//interface rejouer si perdu
  let oui = document.querySelector('.oui');
  let reponseoui = oui.value;
 

  ////interface rejouer si gagné
  let oui2 = document.querySelector('.oui2');
  let reponseoui2 = oui2.value;

//TODO test carte retourne

let carte0 = document.querySelector('.carte');
let carte1 = document.querySelector('.carteCache1');
let carte2 = document.querySelector('.carteCache2');

//nombres de parties perdues
let nbrep = 0;
let parties = document.querySelector('.parties');
parties.textContent = `nombres de partie perdu : ${nbrep}`;

// bêtise triche

let triche = document.querySelector('.triche');
triche.addEventListener("click", f=>{
triche.textContent = "Essaies 42, c'est la réponse à tout"; 
});



jouer();
function jouer (){
    p.textContent = "Trouver un numéros entre 0 et 100, vous avez 7 chances !"
    let guess = Math.floor(Math.random()*100);
    submit.addEventListener("click", e=>{
    b++
    console.log("b", b);
    e.preventDefault();
    let value = inputnumber.value;
    if (value == guess){
        gagneRejouer.style.display = "block"; 
        oui2.addEventListener("click", f=>{
            b = 0;
            guess = Math.floor(Math.random()*100);
            console.log("guess2", guess);
            p.textContent = `tentatives restantes : 7`
            gagneRejouer.style.display = "";
        });
    }
    else if (b == 7){
        nbrep = nbrep+1;

        carte1.style.display = "none";
        carte2.style.display = "block";

        carte0.style.position = "relative";
        carte0.style.animationName = ("appear3");
        carte0.style.animationDuration= ("3s"); 
        carte0.style.animationDirection= ("normal"); 
        carte0.style.animationIterationCount = ("1"); 
        carte0.style.animationTimingFunction = ("ease-in");





        carte2.textContent = `le chiffre à trouver était  ${guess}`

        
        rejouer.style.display = "block";
        oui.addEventListener("click", f=>{          
            b = 0;
            guess = Math.floor(Math.random()*100);
            console.log("guess2", guess);
            p.textContent = `tentatives restantes : 7`
            rejouer.style.display = "";
            carte1.style.display = "";
            carte2.style.display = "";
            triche.textContent = "je veux tricher";
            parties.textContent = `nombres de partie perdu : ${nbrep}`;
            
            })
        }
    else if (value == 42)
    p.textContent = `C'était une blague le numéro ${value}, mais ça aurait pu ! tentatives restantes : ${c-b}`;        
       
    else if(value < guess)
        p.textContent = `C'est plus que ${value}, tentatives restantes : ${c-b}`;
    else if (value > guess)
        p.textContent = `C'est moins que ${value}, tentatives restantes : ${c-b}`;
    }
        
    );
    console.log("b", b);
    console.log("guess", guess);

}



/* FONCTIONNE SAVE EN CAS DE CASSAGE */

/*

//message interface
let inputnumber = document.querySelector('.inputnumber');
let value = inputnumber.value;
let p = document.querySelector('.message');
let submit = document.querySelector('.sub');

//tentatives
let rejouer = document.querySelector('.again');
let gagneRejouer = document.querySelector('.again2');
let b = 0;
let c = 7;


//interface rejouer si perdu
  let oui = document.querySelector('.oui');
  let reponseoui = oui.value;
 

  ////interface rejouer si perdu
  let oui2 = document.querySelector('.oui2');
  let reponseoui2 = oui2.value;

// test carte retourne

let carte = document.querySelector('.carteCache');




jouer();
function jouer (){
    let guess = Math.floor(Math.random()*100);
    
    submit.addEventListener("click", e=>{
    b++
    console.log("b", b);
    e.preventDefault();
    let value = inputnumber.value;
    if (b == 7){
        carte.style.backgroundImage = "blue";
        rejouer.style.display = "block";
        oui.addEventListener("click", f=>{
            b = 0;
            guess = Math.floor(Math.random()*100);
            console.log("guess2", guess);
            p.textContent = `tentatives restantes : 7`
            rejouer.style.display = "";
            
            })

            


        }        
    else if(value < guess)
        p.textContent = `C'est plus que ${value}, tentatives restantes : ${c-b}`;
    else if (value > guess)
        p.textContent = `C'est moins que ${value}, tentatives restantes : ${c-b}`;
    else if (value == guess){
        gagneRejouer.style.display = "block";
        
        oui2.addEventListener("click", f=>{
            b = 0;
            guess = Math.floor(Math.random()*100);
            console.log("guess2", guess);
            p.textContent = `tentatives restantes : 7`
            gagneRejouer.style.display = "";
        });


    }
    }
        
    );
    console.log("b", b);
    console.log("guess", guess);

}

*/



// fonctionne presque code en cas de cassage

/*

jouer();
function jouer (){
    let guess = Math.floor(Math.random()*100);
    b+=1
    submit.addEventListener("click", e=>{
    
    console.log("b", b);
    e.preventDefault();
    let value = inputnumber.value;
    if (b == 3){
        rejouer.style.display = "block";
        oui.addEventListener("click", f=>{
            rejouer.style.display = "";
            b = 0;
            guess = Math.floor(Math.random()*100);
            jouer();
            })
        }        
    else if(value < guess)
        p.textContent = "c'est petit";
    else if (value > guess)
        p.textContent = "c'est très graand";
    
    }
        
    );
    console.log("b", b);
    console.log("guess", guess);

}

*/












/*
            submit.addEventListener("click", e=>{
            console.log("b", b);
            e.preventDefault();
            let guess = Math.floor(Math.random()*100);
            b++
            let value = inputnumber.value ;
            

            });

                b = 0;
                guess = Math.floor(Math.random()*100);
                jouer();
            }

            else if (again == "n"){
                break;
            }

            if (again != ("y")||("n")){
                again = prompt("alors...encore ?")
            }
            */














/* sauvegarde en cas de cassage


function jouer(){
    let guess = Math.floor(Math.random()*100);
    let nombre = prompt("Choisi un nombre entre 10 et 20")*1;
    let b = 0;

    while ( nombre != guess){
        b+=1;
        if (b == 3){
            let again = prompt("Voulez-vous rejouer ?");
            while (again != ("y")||("n")){
        
                if (again == "y"){
                    b = 0;
                    guess = Math.floor(Math.random()*100);
                    jouer();
                }
                else if (again == "n"){
                    break;
                }

                else if (again != ("y")||("n")){
                    again = prompt("alors...encore ?")
                }
            }
                    
            
        }

        else if (nombre < guess){
            nombre = prompt("Choisi un nombre plus grand")*1;
        }
        else if (nombre > guess){
            nombre = prompt("Choisi un nombre plus petit")*1;
        }
        
        console.log("b boucle", b);    
        console.log("chiffre", guess);    
    }
}

*/

