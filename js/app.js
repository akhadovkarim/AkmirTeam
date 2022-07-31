let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle("open-menu")
    menu.classList.toggle("move");
};
window.onscroll = () => {
  navbar.classList.remove("open-menu")
  menu.classList.remove("move");

}
// Swiper 


  // Email
  function validate() {
    let name = document.querySelector('.text');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click',(e) => {
      e.preventDefault();

      if(name.value == "" || email.value == ""|| msg.value =="") {
        emptyerror();
      } else {
        sendmail(name.value,email.value,msg.value);
        success();
      }
    })
  }
  validate();

  function sendmail(name,email,msg){
    emailjs.send("service_sxacwik","template_mt7hfk8",{
      from_name: email,
      to_name: name,
      message: msg
      });
  }

  function emptyerror () {
    swal({
      title: "Oh No... ",
      text: "Fields cannot be empty!",
      icon: "error",
    });
  }
  function success () {
    swal({
      title: "Email sent successfuly",
      text: "We try to reply in 24 hours",
      icon: "success",
    });
  }

  // header
let header = document.querySelector("header")

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);

});

let scrollTop = document.querySelector(".scroll-top")

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active ", window.scrollY >= 400);

});














  // Loader 

  // let loader = document.getElementById("preloader");

  // window.addEventListener("load",function(){
  //   loader.style.display = "none"
  // },);

  let loader = document.querySelector(".preloader")

  window.addEventListener("load",vanish);

  function vanish() {
    preloader.classList.add("disppear");
  };






  // Mouse Cursor
  let mouseCursur = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(".navbar li ");

  window.addEventListener('mousemove', cursor);
  
  function cursor(e) {
    mouseCursur.style.top = e.pageY + "px";
    mouseCursur.style.left = e.pageX + "px";

  }
 

  navLinks.forEach(link => {
    link.addEventListener('mouseleave',() => {
      mouseCursur.classList.remove('link-grow')
      link.classList.remove('hovered-link')
    } );
    link.addEventListener('mouseover',() => {
      mouseCursur.classList.add('link-grow')
      link.classList.add('hovered-link')
    } );
  });



  const currentLocation = location.href;
  const menuItem = document.querySelectorAll('a');
  const menuLength = menuItem.length 
  for (let i = 0; i < menuLength; i++){
    if(menuItem[i].href === currentLocation) {
      menuItem[i].className = "active"
    }
  }


  

  // My swiper




  // Preloader

  const tll = gsap.timeline({
    paused: "true"
});
tll.to("#percent, #bar",{
    duration:.2,
    opacity: 0,
    zIndex: -1
});
tll.to("#preloader1",{
    duration: .8,
    width: "0%"
});
tll.from(".container-loader",{
    duration: 1.5,
    y: "-150%"
},"-=.2");
tll.to(".container-loader h1",{
    opacity:1,
    textShadow: "12px 20px rgba(255,255,255,0.23)",
    skewY: 10,
    y: "10%",
    stagger: {
        amount: .4
    }
});
var width = 1;
var bar = document.getElementById("barconfrm");
var id;
function move(){
    id = setInterval(frame,10);

}
function frame(){
    if(width>=100){
        clearInterval(id);
        tll.play();
    }
    else{
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}