let features = document.querySelector(".feature");
let arrival = document.querySelector(".arrivalBox");
let arvbox = document.querySelectorAll(".arvBox");


//  ANIMATING CARDS 
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 80) {
    features.classList.add("fadeInUp");
  } else {
    features.classList.remove("fadeInUp");
  }
  if (window.scrollY >= 1700) {
    arrival.classList.add("fadeInUp");
  } else {
    arrival.classList.remove("fadeInUp");
  }

  if(window.scrollY>2200){
    Array.from(arvbox).forEach((item)=>{
      item.children[0].classList.add('fadeInLeft')
      item.children[1].classList.add('fadeInLeft')
    })
  }else{
    Array.from(arvbox).forEach((item)=>{
      item.children[0].classList.remove('fadeInLeft')
      item.children[1].classList.remove('fadeInLeft')
    })
  }

});


//  NAVBAR AUTO HIDE 

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};


feature_img = Array.from(document.querySelectorAll('.img_div'))
featureImageModal = document.getElementsByClassName("featureImageModal")[0]
feature_close_btn = document.getElementById("feature_close_btn")

feature_img.forEach((element , index) => {
     element.addEventListener("click" , ()=>{
          featureImageModal.style.backgroundImage = `url('${element.childNodes[1].src}')`
          featureImageModal.style.display = "block"
          featureImageModal.classList.remove('zoomOutDown')
          featureImageModal.classList.add('zoomIn')

     })
});

feature_close_btn.addEventListener('click',()=>{
  featureImageModal.classList.remove('zoomIn')
  featureImageModal.classList.add('zoomOutDown')
})




// MENU BAR 

let bar =  document.querySelector('.bar')
let navbar =  document.querySelector('#navbar')
let shutter_icon =  document.querySelector('#shutter_icon')

let items_in_navbar = Array.from((navbar.children)).length
navbarChild = navbar.children
bar.addEventListener('click',()=>{
  disableScroll()
  navbar.style.clipPath = ''
  anime.timeline({
    targets:'#navbar li ',
    duration:300
  }).add({
    rotateX:[-90 , 0],
    easing:"easeInExpo",
    delay:anime.stagger(100)
  })
})

shutter_icon.addEventListener('click',()=>{
  anime.timeline({
    targets:'#navbar li ',
    duration:300
  }).add({
    rotateX:[0 , -90],
    easing:"easeOutExpo",
    delay:anime.stagger(100 , {direction:"reverse"}),
  })
  enableScroll()
})


















function disableScroll() { 
  document.body.classList.add("remove-scrolling"); 
} 
function enableScroll() { 
  document.body.classList.remove("remove-scrolling"); 
}
