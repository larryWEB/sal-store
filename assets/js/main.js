


let open = document.querySelector('.open');
let menu = document.querySelector('#menu-bar');
let  close = document.querySelector('#close');


//A and B represent (open and close)
//The reason for formatting the function this way is......
 //to avoid repitition incase i have  many buttons i want to use same function for!
common = (a,b,c) => {
  a.addEventListener('click', () => { 
    //I  created a property(.hide) in css and i set the value to(hidden)
    //That is what i will be using to (hide) and at the same time (display) the open menu and close ICONs
    a.classList.toggle('hide');  
    b.classList.toggle('hide');   

    if(c == 'slide-in'){
      menu.classList.toggle('slide')
    }

    if(c == 'slide-out'){
      menu.classList.toggle('slide')
    }
  })
}

//if you dont repeat the call vice-versa it wont work
common(open,close,'slide-in'); //when i click on (open menu) = i want you to display the close button
common(close,open,'slide-out');//when i click on (close) = i want you to display the open menu button




//function for sliding images
var index = 0;
const slides = document.querySelectorAll('.home-img');


function changeSlide(){

  if(index < 0){
    index = slides.length-1;
  }
  
  if(index > slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
  }
  
  slides[index].style.display= "block";
  
  index++;
  
  setTimeout(changeSlide,15000);
  
}

changeSlide();  






/*FAQ */

const faqHeaders = document.querySelectorAll(".faq-header")
faqHeaders.forEach(faqHeaders => {
  faqHeaders.addEventListener("click", event => {
    faqHeaders.classList.toggle("active");
    const faqAnswer = faqHeaders.nextElementSibling;
    if(faqHeaders.classList.contains("active")){
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    }
    else{
      faqAnswer.style.maxHeight = 0;
    }
});
});

/*FAQ */







/* SCROLL TO TOP FUNCTION */


let toUP = document.querySelector(".scrollTop");

window.onscroll = function() {scrollFunction()};

 function scrollFunction(){
if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050){
    toUP.style.display = "block";
}else {
    toUP.style.display = "none";
}
};
scrollFunction();

toUP.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) =>{
scrollFunction();
})







