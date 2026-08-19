/*==================================================

                OUR STORY
                script.js
                PARTE 1

==================================================*/
document.body.classList.add("locked");
gsap.registerPlugin(ScrollTrigger);

/*========================

ELEMENTOS

========================*/

const introScreen =
document.getElementById("introScreen");

const passwordScreen =
document.getElementById("passwordScreen");

const story =
document.getElementById("story");

const openEnvelope =
document.getElementById("openEnvelope");

const passwordDisplay =
document.getElementById("passwordDisplay");

const music =
document.getElementById("music");

const hero =
document.querySelector(".hero");

const chapters =
document.querySelectorAll(".chapter");

const finalChapter =
document.getElementById("finalChapter");

const keys =
document.querySelectorAll(".key");

const clearPassword =
document.getElementById("clearPassword");

const confirmPassword =
document.getElementById("confirmPassword");

/*========================

CONFIGURACIÓN

========================*/

const PASSWORD = "2102";

/*
CAMBIAR DESPUÉS
POR EL ANIVERSARIO

Ejemplo

2405

*/

let typedPassword = "";

/*========================

ABRIR SOBRE

========================*/

openEnvelope.addEventListener(

"click",

()=>{

gsap.to(

"#envelope",

{

scale:1.15,

duration:.35

}

);

gsap.to(

introScreen,

{

opacity:0,

duration:.8,

onComplete(){

introScreen.style.display="none";

passwordScreen.style.display="flex";

gsap.from(

passwordScreen,

{

opacity:0,

duration:.7

}

);

}

}

);

}

);

/*========================

NUMPAD

========================*/

keys.forEach(button=>{

button.addEventListener(

"click",

()=>{

if(

typedPassword.length>=4

)

return;

typedPassword +=

button.dataset.number;

updatePassword();

}

);

});

clearPassword.addEventListener(

"click",

()=>{

typedPassword="";

updatePassword();

}

);

/*========================

DISPLAY

========================*/

function updatePassword(){

let dots=[];

for(

let i=0;

i<4;

i++

){

if(

i<typedPassword.length

){

dots.push("●");

}else{

dots.push("○");

}

}

passwordDisplay.innerHTML=

dots.join(" ");

}

/*========================

VALIDAR

========================*/

confirmPassword.addEventListener(

"click",

()=>{

if(

typedPassword===PASSWORD

){

unlockStory();
document.body.classList.remove("locked");

}else{

wrongPassword();

}

});

/*========================

ERROR

========================*/

function wrongPassword(){

gsap.fromTo(

".passwordCard",

{

x:-12

},

{

x:12,

repeat:5,

yoyo:true,

duration:.05,

onComplete(){

gsap.set(

".passwordCard",

{

x:0

}

);

typedPassword="";

updatePassword();

}

}

);

}

/*========================

DESBLOQUEAR

========================*/

function unlockStory(){

    music.loop = true;

    music.volume = .18;

    music.play().catch(()=>{});

    gsap.to(passwordScreen,{

        opacity:0,

        duration:.8,

        onComplete(){

            passwordScreen.style.display="none";

            story.style.display="flex";

            document.body.classList.remove("locked");

            document.body.style.overflowY="auto";

            document.body.style.position="static";

            document.body.style.height="auto";

            document.documentElement.style.overflowY="auto";

            gsap.to(story,{

                opacity:1,

                duration:1.2

            });

            ScrollTrigger.refresh();
            
            passwordScreen.style.display="none";

            story.style.display="flex";

            document.body.classList.remove("locked");

            document.documentElement.style.overflowY="auto";

            document.body.style.overflowY="auto";

            document.body.style.height="auto";

            window.scrollTo(0,0);

            ScrollTrigger.refresh();
        }

    });

    gsap.from(hero,{

        opacity:0,

        y:120,

        duration:1.4

    });

}

/*========================

APARICIÓN AL HACER SCROLL

========================*/

gsap.utils.toArray(".chapter").forEach((chapter)=>{

    gsap.fromTo(

        chapter,

        {

            opacity:0,

            y:120

        },

        {

            opacity:1,

            y:0,

            duration:1.2,

            ease:"power3.out",

            scrollTrigger:{

                trigger:chapter,

                start:"top 80%"

            }

        }

    );

});

/*========================

CAPÍTULO FINAL

========================*/

gsap.from(

"#finalChapter",

{

opacity:0,

y:120,

duration:1.5,

scrollTrigger:{

trigger:"#finalChapter",

start:"top 70%"

}

}

/*========================

PARALLAX FLORES

========================*/

);

gsap.utils.toArray(".flower").forEach((flower)=>{

gsap.to(

flower,

{

y:-70,

ease:"none",

scrollTrigger:{

trigger:flower,

scrub:true

}

}

);

});

/*========================

PARALLAX FOTOS

========================*/

gsap.utils.toArray(".memory").forEach((memory)=>{

gsap.from(

memory,

{

scale:.8,

opacity:0,

rotation:gsap.utils.random(-10,10),

duration:1,

scrollTrigger:{

trigger:memory,

start:"top 85%"

}

}

);

});

/*========================

PAPEL

========================*/

gsap.utils.toArray(".paper").forEach((paper)=>{

gsap.from(

paper,

{

y:80,

opacity:0,

duration:1.2,

ease:"power2.out",

scrollTrigger:{

trigger:paper,

start:"top 75%"

}

}

);

});

/*========================

HERO

========================*/

gsap.to(

".heroFlowers.left",

{

y:-60,

scrollTrigger:{

trigger:".hero",

scrub:true

}

}

);

gsap.to(

".heroFlowers.right",

{

y:60,

scrollTrigger:{

trigger:".hero",

scrub:true

}

}

);

/*========================

RAMO FINAL

========================*/

gsap.from(

"#mainBouquet",

{

scale:.6,

opacity:0,

duration:2,

ease:"elastic.out(1,.5)",

scrollTrigger:{

trigger:"#mainBouquet",

start:"top 75%"

}

}

);

/*========================

TEXTO FINAL

========================*/

gsap.from(

".endingText",

{

opacity:0,

y:100,

duration:1.4,

scrollTrigger:{

trigger:".endingText",

start:"top 75%"

}

}

);

/*========================

RESPIRACIÓN FLORES

========================*/

gsap.utils.toArray(".flower").forEach((flower)=>{

gsap.to(

flower,

{

rotation:gsap.utils.random(-4,4),

duration:gsap.utils.random(4,8),

repeat:-1,

yoyo:true,

ease:"sine.inOut"

}

);

});

/*========================

RESPIRACIÓN RAMO

========================*/

gsap.to(

"#mainBouquet",

{

scale:1.03,

duration:3,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

}

);
/*========================

PÉTALOS

========================*/

const petalOverlay =
document.getElementById("petalOverlay");

const PETAL_IMAGES = [

"assets/decor/petal1.png",
"assets/decor/petal2.png",
"assets/decor/petal3.png",
"assets/decor/petal4.png"

];

function createPetal(){

const petal =
document.createElement("img");

petal.className="petal";

petal.src=

PETAL_IMAGES[
Math.floor(
Math.random()*
PETAL_IMAGES.length
)];

petal.style.left=
Math.random()*100+"vw";

petal.style.animationDuration=
8+Math.random()*10+"s";

petal.style.animationDelay=
Math.random()*2+"s";

petal.style.width=
14+Math.random()*10+"px";

petal.style.opacity=
.08+Math.random()*.08;

petal.style.transform=

`rotate(${Math.random()*360}deg)`;

petalOverlay.appendChild(petal);

petal.addEventListener(

"animationend",

()=>{

petal.remove();

}

);

}

setInterval(createPetal,2800);

/*========================

DESTELLOS

========================*/

const sparkleOverlay =
document.getElementById("sparkleOverlay");

function createSpark(){

const spark =
document.createElement("div");

spark.className="spark";

spark.style.left=
Math.random()*100+"vw";

spark.style.top=
Math.random()*100+"vh";

spark.style.animationDuration=
4+Math.random()*6+"s";

sparkleOverlay.appendChild(spark);

setTimeout(

()=>{

spark.remove();

},

9000

);

}

setInterval(

createSpark,

500

);

/*========================

LUCES

========================*/

const lightOverlay =
document.getElementById("lightOverlay");

function createLight(){

const light =
document.createElement("div");

light.className="lightParticle";

light.style.left=
Math.random()*100+"vw";

light.style.top=
Math.random()*100+"vh";

light.style.width=
180+Math.random()*220+"px";

light.style.height=
light.style.width;

light.style.animationDuration=
12+Math.random()*12+"s";

lightOverlay.appendChild(light);

setTimeout(

()=>{

light.remove();

},

24000

);

}

for(

let i=0;

i<8;

i++

){

createLight();

}

setInterval(

createLight,

3500

);

/*========================

SCROLL PROGRESS

========================*/

window.addEventListener(

"scroll",

()=>{

const max =

document.documentElement.scrollHeight-
window.innerHeight;

const progress =

window.scrollY/max;

document.documentElement.style.setProperty(

"--scroll",

progress

);

});

/*========================

REVELAR HERO

========================*/

/*========================

EFECTO MEMORIAS

========================*/

document.querySelectorAll(

".memory"

).forEach(card=>{

card.addEventListener(

"mouseenter",

()=>{

gsap.to(

card,

{

y:-12,

rotation:0,

duration:.35

}

);

});

card.addEventListener(

"mouseleave",

()=>{

gsap.to(

card,

{

y:0,

rotation:gsap.utils.random(-5,5),

duration:.35

}

);

});

});

/*========================

MÚSICA

========================*/

music.volume=.25;

/*========================

FIN

========================*/

console.log(

"Our Story ❤️"

);
/*==================================================

            EFECTOS EXTRA
            PARTE 4

==================================================*/

/*========================

MOUSE PARALLAX

========================*/

const flowers = document.querySelectorAll(".flower");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;
const y=(e.clientY/window.innerHeight-.5)*20;

flowers.forEach((flower,index)=>{

gsap.to(

flower,

{

x:x*((index%5)+1)*.25,

y:y*((index%4)+1)*.25,

duration:2,

ease:"power2.out"

}

);

});

});

/*========================

LUCES HERO

========================*/

gsap.to(

".gradient",

{

rotation:360,

repeat:-1,

duration:180,

ease:"none"

}

);

gsap.to(

".gradient2",

{

rotation:-360,

repeat:-1,

duration:220,

ease:"none"

}

);

gsap.to(

".gradient3",

{

rotation:360,

repeat:-1,

duration:260,

ease:"none"

}

);

/*========================

TÍTULO HERO

========================*/

gsap.from(

".heroCenter h1",

{

opacity:0,

y:80,

duration:1.5,

ease:"power3.out"

}

);

gsap.from(

".heroCenter p",

{

opacity:0,

y:40,

delay:.4,

duration:1

}

);

/*========================

FADE INTRO

========================*/

window.addEventListener(

"load",

()=>{

gsap.from(

"#background",

{

opacity:0,

duration:2

}

);

});

/*========================

PAPEL

========================*/

document.querySelectorAll(".paper p")

.forEach((paragraph)=>{

gsap.from(

paragraph,

{

opacity:0,

y:25,

duration:.7,

scrollTrigger:{

trigger:paragraph,

start:"top 92%"

}

}

);

});

/*========================

MEMORIAS

========================*/

document.querySelectorAll(".memory")

.forEach((memory)=>{

memory.addEventListener(

"click",

()=>{

gsap.fromTo(

memory,

{

scale:1

},

{

scale:1.08,

duration:.25,

yoyo:true,

repeat:1

}

);

});

});

/*========================

SCROLL SUAVE

========================*/

let lastScroll=0;

window.addEventListener(

"scroll",

()=>{

const current=window.scrollY;

const speed=current-lastScroll;

lastScroll=current;

flowers.forEach((flower,index)=>{

gsap.to(

flower,

{

rotation:

"+="+speed*.03,

duration:.4,

overwrite:true

}

);

});

});

/*========================

EFECTO RAMO

========================*/

const bouquet=

document.getElementById(

"mainBouquet"

);

if(bouquet){

bouquet.addEventListener(

"mouseenter",

()=>{

gsap.to(

bouquet,

{

scale:1.08,

duration:.5

}

);

});

bouquet.addEventListener(

"mouseleave",

()=>{

gsap.to(

bouquet,

{

scale:1,

duration:.5

}

);

});

}

/*========================

FIN

========================*/

console.log(

"Proyecto cargado correctamente ❤️"

);
/*========================
    DEBUG
========================*/

window.addEventListener("load", () => {

    console.log("Página cargada correctamente.");

    console.log("Botón:", openEnvelope);

    console.log("Intro:", introScreen);

    console.log("Password:", passwordScreen);

});

const musicToggle=document.getElementById("musicToggle");

musicToggle.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicToggle.textContent="🔊";

    }else{

        music.pause();

        musicToggle.textContent="🔇";

    }

});