let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navlist.classList.toggle('open');
// }
menu.addEventListener('click', () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
})


ScrollReveal().reveal('.hero-text',{delay:200,distance : '65px',duration : 2600,reset : true, origin:'top'});
ScrollReveal().reveal('.hero-img',{delay:450,distance : '65px',duration : 2600,reset : true, origin:'top'});
ScrollReveal().reveal('.icons',{delay:500,distance : '65px',duration : 2600,reset : true, origin:'left'});
ScrollReveal().reveal('.scroll-down',{delay:500,distance : '65px',duration : 2600,reset : true, origin:'right'});
ScrollReveal().reveal('.pieds',{delay:500,distance : '65px',duration : 2600,reset : true, origin:'bottom'});
ScrollReveal().reveal('.formulaire',{delay:500,distance : '65px',duration : 2600,reset : true, origin:'top'});

const btn = document.querySelector(".scroll-down");
const content = document.querySelector(".show_btn");

btn.addEventListener('click',function(){
    if(getComputedStyle(content).visibility != 'visible'){
        content.style.visibility='visible';
    }
    else{
        content.style.visibility='hidden';
    }
})