// ======================================
// GLOBAL VARIABLES
// ======================================

let music = null;

// ======================================
// INITIAL APP
// ======================================

window.onload = () => {

    document.getElementById("splash").style.display="flex";

    document.getElementById("secret").style.display="none";

    document.getElementById("gift").style.display="none";

    document.getElementById("mainContent").style.display="none";

    setTimeout(() => {

        document.getElementById("splash").style.display="none";

        document.getElementById("secret").style.display="flex";

    },4000);

};


// ======================================
// DOM READY
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    music = document.getElementById("bgMusic");

    initTyped();
    initGiftBox();
    initGallery();
    initSurpriseButton();
    initScrollReveal();

    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);

});

// ======================================
// TYPED EFFECT
// ======================================

function initTyped() {

    if (
        typeof Typed !== "undefined" &&
        document.getElementById("typed")
    ) {

        new Typed("#typed", {

            strings: [
                "Happy Birthday ❤️",
                "Azulia ❤️",
                "My Special Person ❤️"
            ],

            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1500,
            loop: true

        });

    }

}

// ======================================
// SECRET CODE
// ======================================

function checkCode(){

    const boxes =
    document.querySelectorAll(".pin-box");

    let code = "";

    boxes.forEach(box=>{

        code += box.value;

    });

    if(code === "180925"){

        document.getElementById("secret").style.display="none";

        document.getElementById("gift").style.display="flex";

    }

    else{

        alert("❌ Wrong Secret Code ❤️");

    }

}

const pinInputs =
document.querySelectorAll(".pin-box");

pinInputs.forEach((input,index)=>{

    input.addEventListener("input",()=>{

        if(input.value.length === 1){

            if(index < pinInputs.length-1){

                pinInputs[index+1].focus();

            }

        }

    });

    input.addEventListener("keydown",(e)=>{

        if(
            e.key === "Backspace" &&
            input.value === "" &&
            index > 0
        ){

            pinInputs[index-1].focus();

        }

    });

});

// ======================================
// GIFT BOX
// ======================================

function initGiftBox() {

    const giftBox =
        document.getElementById("giftBox");

    if (!giftBox) return;

    giftBox.addEventListener("click", openGift);

}

function openGift() {

    const gift =
        document.getElementById("gift");

    const main =
        document.getElementById("mainContent");

    if (!gift || !main) return;

    gift.classList.add("open-animation");

    setTimeout(() => {

        gift.style.display = "none";

        main.style.display = "block";

        startMusic();

        launchConfetti();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

}

// ======================================
// MUSIC
// ======================================

function startMusic() {

    if (!music) return;

    music.play().catch(err => {

        console.log("Music blocked:", err);

    });

}

function pauseMusic() {

    if (!music) return;

    music.pause();

}

function toggleMusic() {

    if (!music) return;

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}

// ======================================
// LOVE COUNTER
// ======================================

const loveDate = new Date("2026-09-18");

function updateLoveCounter() {

    const dayEl =
        document.getElementById("days");

    const hourEl =
        document.getElementById("hours");

    const minEl =
        document.getElementById("minutes");

    const secEl =
        document.getElementById("seconds");

    if (
        !dayEl ||
        !hourEl ||
        !minEl ||
        !secEl
    ) return;

    const now = new Date();

    const diff = Math.abs(now - loveDate);

    const days =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes =
        Math.floor(diff / (1000 * 60)) % 60;

    const seconds =
        Math.floor(diff / 1000) % 60;

    dayEl.innerText = days;
    hourEl.innerText = hours;
    minEl.innerText = minutes;
    secEl.innerText = seconds;

}

// ======================================
// SAKURA EFFECT
// ======================================

function createPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        Math.random() * 20 + 15 + "px";

    petal.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 500);

// ======================================
// CONFETTI
// ======================================

function launchConfetti() {

    if (typeof confetti === "undefined")
        return;

    confetti({

        particleCount: 250,
        spread: 180,

        origin: {
            y: 0.6
        }

    });

}

// ======================================
// FINAL SURPRISE
// ======================================


// Tambahan Animasi

function startHeartAnimation(){

    const canvas =
    document.getElementById("heartCanvas");

    const ctx =
    canvas.getContext("2d");

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

    const particles = [];

    const heartPoints = [];

    const scale = 12;

    // Rumus bentuk hati
    for(let t=0;t<Math.PI*2;t+=0.03){

        const x =
        16*Math.pow(Math.sin(t),3);

        const y =
        -(13*Math.cos(t)
        -5*Math.cos(2*t)
        -2*Math.cos(3*t)
        -Math.cos(4*t));

        heartPoints.push({

            x:
            canvas.width/2 + x*scale,

            y:
            canvas.height/2 + y*scale + 250

        });

    }

    for(let i=0;i<heartPoints.length;i++){

        particles.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height,

            tx:heartPoints[i].x,

            ty:heartPoints[i].y,

            size:2 + Math.random()*4,

            color:`hsl(${Math.random()*360},100%,70%)`

        });

    }

    function animate(){

        ctx.clearRect(
        0,0,
        canvas.width,
        canvas.height
        );

        let complete = true;

        particles.forEach(p=>{

            p.x += (p.tx-p.x)*0.04;
            p.y += (p.ty-p.y)*0.04;

            if(
                Math.abs(p.tx-p.x)>1 ||
                Math.abs(p.ty-p.y)>1
            ){
                complete = false;
            }

            ctx.beginPath();

            ctx.fillStyle =
            p.color;

            ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI*2
            );

            ctx.fill();

        });

        if(!complete){

            requestAnimationFrame(
            animate
            );

        }else{

            document.getElementById("finalMessage").style.opacity = 1;

            setTimeout(() => {

            const canvas =
            document.getElementById("heartCanvas");

            canvas.style.transition = "2s";
            canvas.style.opacity = "0";

            }, 4000);

        }

    }

    animate();

}




// ======================================
// GALLERY LIGHTBOX
// ======================================

function initGallery() {

    const images =
        document.querySelectorAll(".gallery img");

    if (!images.length) return;

    images.forEach(img => {

        img.addEventListener("click", () => {

            const overlay =
                document.createElement("div");

            overlay.classList.add("lightbox");

            overlay.innerHTML = `
                <img src="${img.src}">
            `;

            document.body.appendChild(overlay);

            overlay.addEventListener("click", () => {

                overlay.remove();

            });

        });

    });

}

// ======================================
// SCROLL REVEAL
// ======================================

function initScrollReveal() {

    if (!("IntersectionObserver" in window))
        return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        });

    document
        .querySelectorAll(".reveal")
        .forEach(el => {

            observer.observe(el);

        });

}
