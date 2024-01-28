function smoothScroll(){
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
}
smoothScroll();



function MainCursor(){
  var page5Content=document.querySelector(".main");
var cursor5=document.querySelector("#main_cursor");

page5Content.addEventListener("mousemove",function(dets){
  cursor5.style.left=dets.x+"px"
  cursor5.style.top=dets.y+"px"
})

page5Content.addEventListener("mouseenter",function(){
  cursor5.style.scale=1;
  cursor5.style.opacity=1;
})
page5Content.addEventListener("mouseleave",function(){
  cursor5.style.scale=0;
  cursor5.style.opacity=0;
})
}
MainCursor();




function menuCursor(){
  var page5Content=document.querySelector(".menu-details");
var cursor5=document.querySelector(".cursorNew");

page5Content.addEventListener("mousemove",function(dets){
  cursor5.style.left=dets.x+"px"
  cursor5.style.top=dets.y+"px"
})

page5Content.addEventListener("mouseenter",function(){
  cursor5.style.scale=1;
  cursor5.style.opacity=1;
})
page5Content.addEventListener("mouseleave",function(){
  cursor5.style.scale=0;
  cursor5.style.opacity=0;
})
}
menuCursor();




function orangeCursor(){
var page1Content=document.querySelector(".page1-content");
var cursor=document.querySelector(".cursor");


// when mouse will move in page1Content then the function will be excuted
//gsap is js library which helps to make moving animation
page1Content.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
})

page1Content.addEventListener("mouseenter",function(){
  cursor.style.scale=1;
  cursor.style.opacity=1;
})
page1Content.addEventListener("mouseleave",function(){
    cursor.style.scale=0;
    cursor.style.opacity=0;
})
}
orangeCursor();



function blackCursor(){
  var page5Content=document.querySelector(".page5-content");
var cursor5=document.querySelector(".cursor5");

page5Content.addEventListener("mousemove",function(dets){
  cursor5.style.left=dets.x+"px"
  cursor5.style.top=dets.y+"px"
})

page5Content.addEventListener("mouseenter",function(){
  cursor5.style.scale=1;
  cursor5.style.opacity=1;
})
page5Content.addEventListener("mouseleave",function(){
  cursor5.style.scale=0;
  cursor5.style.opacity=0;
})
}
blackCursor();



//display menu bar 
document.getElementById("menuu").addEventListener("click",function(){
  gsap.to(".menu-details",{
    duration:0.3,
    display:"block",
    stagger:0.2,

    
  })

  gsap.from(".menu-details",{
    y:-200,
    duration:0.5,
    opacity:0,
    display:"block",
    stagger:0.2
    
  })
})

document.getElementById("cancel").addEventListener("click",function(){
  gsap.to(".menu-details",{

    display:"none",
    delay:0.2,
    duration:0.3,
    
  })
})




//scroll triger codepen is used because locomotive is used it doesn't allow others to work properly -smooth trigger 



//display loader

var tl=gsap.timeline()

tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1.5,
  stagger:0.1,
  delay:1
})
tl.to("#loader h3",{
  opacity:0,
  x:-10,
  stagger:0.1,
  duration:1.5
})

tl.to("#loader",{
  opacity:0
})

tl.from(".page1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.4,
  
})

tl.to("#loader",{
  display:"none"
})
tl.to(".page7 img",{
  duration:0.2,
  stagger:0.1,
  repeat:-1
})


gsap.from(".newdiv h1",{
  y:120,
  stagger:0.2,
  duration:1,

  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start:"top 47%",
    end:"top 46%",
    markers:true,
    scrub:2
  }

})





