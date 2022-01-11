gsap.from(".letter", {x:100, duration:1.5, scale:6, delay:1, rotation:230, opacity:0, stagger:1})
gsap.from(".myletters", {y:800, delay:1, stagger:.3, opacity:0})
gsap.to(".letter", {y:-600, duration:1, scale:4, delay:6.5, opacity:0})
gsap.to(".myletters", {y:-500, duration:1, scale:4, delay:6.5, opacity:0})
gsap.from(".presentOne", {y:-200, delay:6.2, duration:.5, ease:"bounce", opacity: 0})
gsap.to(".presentOne", {delay: 8.5, duration: .1, rotation: 6})
gsap.to(".presentOne", {delay: 8.6, duration: .1, rotation: -6})
gsap.to(".presentOne", {delay: 8.7, duration: .1, rotation: 6})
gsap.to(".presentOne", {delay: 8.8, duration: .1, rotation: -6})
gsap.to(".presentOne", {delay: 8.9, duration: .1, rotation: 6, opacity: 0})
gsap.from(".presentTwo", {delay:9, duration:.3, scale: 0.1, rotation: -50, opacity: 0})

gsap.from(".myskills", {opacity:0, delay:9.1, duration:1, stagger:.6})
gsap.to(".one", {x:-350, y:-400, delay: 10, duration: 1, rotation:360})
gsap.to(".two", {x:-150, y:-400, delay: 11, duration: 1, rotation:360})
gsap.to(".three", {x:50, y:-400, delay: 12, duration: 1, rotation:360})
gsap.to(".four", {x:250, y:-400, delay: 13, duration: 1, rotation:360})

gsap.from(".myskillsTwo", {opacity:0, delay:11.5, duration:2, stagger:.7})
gsap.to(".five", {x:-350, y:-100, delay: 14.5, duration: 1, rotation:360})
gsap.to(".six", {x:-150, y:-100, delay: 15.5, duration: 1, rotation:360})
gsap.to(".seven", {x:50, y:-100, delay: 16.5, duration: 1, rotation:360})
gsap.to(".eight", {x:250, y:-100, delay: 17.5, duration: 1, rotation:360})
gsap.to(".presentTwo", {delay:16, duration:4, scale: .5, rotation: -230, opacity:0})
//---------------------------------------------------------------------
const tl = gsap.timeline();

tl.fromTo('.second', {x: 0}, {x: '-100%'})
tl.fromTo('.third', {x: '-100%'}, {x: '-200%'})
tl.fromTo('.fourth', {x: '-200%'}, {x: '-300%'})

const main = document.querySelector('.main');

ScrollTrigger.create({
    animation: tl,
    trigger: '.site_container',
    start: 'top top',
    end: () => main.offsetWidth / 2,
    scrub: true,
    pin: true,
});


gsap.from(".photo", {y: 200, x: -100, delay:21,duration:3, scale:.8, opacity:0})
// gsap.to(".photo", {delay:27,duration:4,opacity: 0})
gsap.from(".photoflag", {x: 80, y: -50, delay:25, duration:2, scale:.2, rotation:360, opacity:0})

gsap.to(".welcome",{
    text:"Hello, my name is Larisa. Welcome!",
    delay:20,
    duration: 1.5,
    repeat: 3,
    repeatDelay:.7,
    ease:"pover1.in",
    yoyo: true 
})

// gsap.to(".aboutme",{
//     text:`I'm taking my first steps in programming. And this work absolutely captivated me! I create websites and applications perfectly adapted for any mobile device. My motto: "If you can imagine - you can achieve it!"  I'm located in Toronto, Canada. You can reach me here:`,
//     delay:27,
//     duration: 8,    
//     ease:"pover1.in" 
// })

// ---------------------------------------------------------------------------
let c = init("canvas"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);

    class firefly{
        constructor(){
            this.x = Math.random()*w;
            this.y = Math.random()*h;
            this.s = Math.random()*2;
            this.ang = Math.random()*2*Math.PI;
            this.v = this.s*this.s/4;
        }
        move(){
            this.x += this.v*Math.cos(this.ang);
            this.y += this.v*Math.sin(this.ang);
            this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
        }
        show(){
            c.beginPath();
            c.arc(this.x,this.y,this.s,0,2*Math.PI);
            // c.fillStyle="#fddba3";
            c.fillStyle="rgb(255, 47, 134)"
            c.fill();
        }
    }
    let f = [];

function draw() {
    if(f.length < 100){
    for(let j = 0; j < 10; j++){
        f.push(new firefly());
    }
    }
  //animation
    for(let i = 0; i < f.length; i++){
    f[i].move();
    f[i].show();
    if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
        f.splice(i,1);
        }
    }
}
let mouse = {};
let last_mouse = {};

canvas.addEventListener(
    "mousemove",
    function(e) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    },
    false
);
function init(elemid) {
    let canvas = document.getElementById(elemid),
    c = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
    c.fillStyle = "rgba(30,30,30,1)";
    c.fillRect(0, 0, w, h);
    return c;
}

window.requestAnimFrame = (function() {
    return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
    window.setTimeout(callback);
    }
    );
});

function loop() {
    window.requestAnimFrame(loop);
    c.clearRect(0, 0, w, h);
    draw();
}

window.addEventListener("resize", function() {
    (w = canvas.width = window.innerWidth),
    (h = canvas.height = window.innerHeight);
    loop();
});

loop();
setInterval(loop, 1000 / 60);
//------------------------------------------------------------------------------
const showQuiz = document.querySelector("#imgquiz");
const showGame = document.querySelector("#imggame");
const showNotes = document.querySelector("#imgnotes");
const showRelax = document.querySelector("#imgrelax");
const showSplit = document.querySelector("#imgsplit");
const showSearch = document.querySelector("#imgsearch");
const showFortune = document.querySelector("#imgfortune");
const showWeather = document.querySelector("#imgweather");
const showInvitation = document.querySelector("#imginvit");
const showChristmas = document.querySelector("#imgchristmas");
const showGithub = document.querySelector("#imggithub");
const showCompany = document.querySelector("#imgcompany");
const showBakery = document.querySelector("#imgbakery");
const showPhotogr = document.querySelector("#imgphotogr");
const showFitness = document.querySelector("#imgfitness");


const par = document.querySelector(".quiz");
const parGame = document.querySelector(".game");
const parNotes = document.querySelector(".notes");
const parRelax = document.querySelector(".relax");
const parSplit = document.querySelector(".split");
const parSearch = document.querySelector(".search");
const parFortune = document.querySelector(".fortune");
const parWeather = document.querySelector(".weather");
const parInvitation = document.querySelector(".invitation");
const parChristmas = document.querySelector(".christmas");
const parGithub = document.querySelector(".github");
const parCompany = document.querySelector(".company");
const parBakery = document.querySelector(".bakery");
const parPhotogr = document.querySelector(".photogr");
const parFitness = document.querySelector(".fitness");

par.addEventListener("mouseover", ()=> {
        showQuiz.style.display = "block";
        gsap.to("#imgquiz", {x:200, y:-460, duration:.01, scale:4})
})
par.addEventListener("mouseout", ()=> {
    showQuiz.style.display = "none";    
})

parGame.addEventListener("mouseover", ()=> {
    showGame.style.display = "block";
    gsap.to("#imggame", {x:720, y:-400, duration:.01, scale:2.5})
})
parGame.addEventListener("mouseout", ()=> {
    showGame.style.display = "none";    
})

parNotes.addEventListener("mouseover", ()=> {
    showNotes.style.display = "block";
    gsap.to("#imgnotes", {x:850, y:-450, duration:.01, scale:2.5})
})
parNotes.addEventListener("mouseout", ()=> {
    showNotes.style.display = "none";    
})

parRelax.addEventListener("mouseover", ()=> {
    showRelax.style.display = "block";
    gsap.to("#imgrelax", {x:900, y:-420, duration:.01, scale:2.8})
})
parRelax.addEventListener("mouseout", ()=> {
    showRelax.style.display = "none";    
})

parSplit.addEventListener("mouseover", ()=> {
    showSplit.style.display = "block";
    gsap.to("#imgsplit", {x:170, y:-350, duration:.01, scale:2.5})
})
parSplit.addEventListener("mouseout", ()=> {
    showSplit.style.display = "none";    
})

parSearch.addEventListener("mouseover", ()=> {
    showSearch.style.display = "block";
    gsap.to("#imgsearch", {x:130, y:-400, duration:.01, scale:2.5})
})
parSearch.addEventListener("mouseout", ()=> {
    showSearch.style.display = "none";    
})

parFortune.addEventListener("mouseover", ()=> {
    showFortune.style.display = "block";
    gsap.to("#imgfortune", {x:250, y:-450, duration:.01, scale:3.2})
})
parFortune.addEventListener("mouseout", ()=> {
    showFortune.style.display = "none";    
})

parWeather.addEventListener("mouseover", ()=> {
    showWeather.style.display = "block";
    gsap.to("#imgweather", {x:330, y:-350, duration:.01, scale:3.4})
})
parWeather.addEventListener("mouseout", ()=> {
    showWeather.style.display = "none";    
})

parInvitation.addEventListener("mouseover", ()=> {
    showInvitation.style.display = "block";
    gsap.to("#imginvit", {x:400, y:-400, duration:.01, scale:3.2})
})
parInvitation.addEventListener("mouseout", ()=> {
    showInvitation.style.display = "none";    
})

parChristmas.addEventListener("mouseover", ()=> {
    showChristmas.style.display = "block";
    gsap.to("#imgchristmas", {x:650, y:-400, duration:.01, scale:2.6})
})
parChristmas.addEventListener("mouseout", ()=> {
    showChristmas.style.display = "none";    
})

parGithub.addEventListener("mouseover", ()=> {
    showGithub.style.display = "block";
    gsap.to("#imggithub", {x:400, y:-430, duration:.01, scale:1.8})
})
parGithub.addEventListener("mouseout", ()=> {
    showGithub.style.display = "none";    
})

parCompany.addEventListener("mouseover", ()=> {
    showCompany.style.display = "block";
    gsap.to("#imgcompany", {x:150, y:-410, duration:.01, scale:2.4})
})
parCompany.addEventListener("mouseout", ()=> {
    showCompany.style.display = "none";    
})

parBakery.addEventListener("mouseover", ()=> {
    showBakery.style.display = "block";
    gsap.to("#imgbakery", {x:150, y:-410, duration:.01, scale:2.4})
})
parBakery.addEventListener("mouseout", ()=> {
    showBakery.style.display = "none";    
})

parPhotogr.addEventListener("mouseover", ()=> {
    showPhotogr.style.display = "block";
    gsap.to("#imgphotogr", {x:150, y:-410, duration:.01, scale:2.4})
})
parPhotogr.addEventListener("mouseout", ()=> {
    showPhotogr.style.display = "none";    
})

parFitness.addEventListener("mouseover", ()=> {
    showFitness.style.display = "block";
    gsap.to("#imgfitness", {x:150, y:-410, duration:.01, scale:2.4})
})
parFitness.addEventListener("mouseout", ()=> {
    showFitness.style.display = "none";    
})

