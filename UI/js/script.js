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
ScrollReveal().reveal('.pieds',{delay:500,distance : '65px',duration : 2600,reset : true, origin:'bottom'});
ScrollReveal().reveal('.formulaire',{delay:500,distance : '65px',duration : 2600,reset : true, origin:'top'});
ScrollReveal().reveal('#img_user',{delay:500,distance : '65px',duration : 2600,reset : true, origin:'top'});


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

function scroll(){
    document.getElementsByTagName("header").item(0).className="newClass";
}
const search = document.querySelector(".loop");
const searchber = document.querySelector(".search");

search.addEventListener('click',function(){
    if(getComputedStyle(searchber).visibility != 'visible'){
        searchber.style.visibility='visible';
    }
    else{
        searchber.style.visibility='hidden';
    }
})
// images defilentes 
image=new Array("livrer1.jpg","livrer2.jpg","livrer3.jpg","livrer4.jpg");
im=0;
op=0;
sop="cr";
function album(){
   setTimeout("album()",20);
   document.getElementById("idImage").src="assets/img/caroussel/"+image[im%4];
   try{
      document.getElementById("idImage").filters.alpha.opacity=op*100;
   }
   catch(e){
      document.getElementById("idImage").style.opacity=op;
   }
   if(sop=="cr"){
      op+=0.02;
      if(op>2)
         sop="dcr";
   }
   if(sop=="dcr"){
      op-=0.02;
      if(op<=0){
         sop="cr";
         im+=1;
      }
   }
}