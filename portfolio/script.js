"use strict";

const ingredients = document.querySelector(".ingredients");
const  options = {
    threshold: 0.5
    
};

const observer1 = new IntersectionObserver(setIndicator1, options);

observer1.observe(ingredients);

    function setIndicator1 (entries) {

        const entry = entries[0];
   
        if (entry.isIntersecting){
            entry.target.style.animationName = "apparition";
            entry.target.style.animationDuration = "2s";

        } else entry.target.style.animationName = "";
        console.log(entries);
    }


    ////////////////////

const explications = document.querySelector(".explications");



const observer2 = new IntersectionObserver(setIndicator2, options);

observer2.observe(explications);

    function setIndicator2 (entries) {

        const entry = entries[0];
   
        if (entry.isIntersecting){
            entry.target.style.animationName = "apparition2";
            entry.target.style.animationDuration = "2s";

        } else entry.target.style.animationName = "";
        console.log(entries);
    }
    
/////////////////////////////

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let p = document.querySelector('.p')

btn1.addEventListener('mouseover', ()=> {
    p.textContent = "Lorsque les temps d'attentes sont très longues, notre recette se pose et regarde pour se divertir quelques series ou films (Majoritairement en anglais !). Il emprunte parfois d'autres recettes (Cappucino ou divers thés) ou accessoires (Plaid) pour être le plus confortable possible ";    


})
btn2.addEventListener('mouseover', function () {
    p.textContent = "Passionné de guitare acoustique, vous pourrez admirez de temps en temps quelques mélodies interprétés pendant le temps de repos";
})


