$('.slider').slick({
    dots: true,
    arrows:false,
    fade: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 540,
            settings: {
                variableWidth: 100
            }
        }

    ]
   
    
    
});


const roadPath = {
    curviness: 1.2,
    autoRotate: true,
    values: [
        {x:50, y:20},
        {x:-50, y:200},
        {x:80, y:400},
        {x:-30, y:600},
        {x:100, y:800},
        {x:-20, y:1000},
        {x:70, y:1200},
        {x:0, y:1400},
        {x:100, y:1400}
    ]

}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.motorcycle',3,{
        bezier: roadPath,
        ease: Power1.easeInOut,
    })

)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.motorcycle-animation',
    duration: 2000,
    triggerHook: 0.7
})
  .setTween(tween)
  .addTo(controller);


var scroll = new SmoothScroll('a[href*="#"]');

function menuOpen() {
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("hamburger-menu").style.display = "block";
    document.getElementById("hamburger-menu").style.animationName = "opening";


}
function menuClose() {
    document.getElementById("body").style.overflowY = "visible";
    document.getElementById("hamburger-menu").style.display = "none";
    
}


