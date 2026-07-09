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

function initSurpriseButton() {

    const btn =
        document.getElementById("surpriseBtn");

    if (!btn) return;

    btn.addEventListener("click", () => {

        launchConfetti();

        setTimeout(() => {

            if (typeof confetti !== "undefined") {

                confetti({

                    particleCount: 500,
                    spread: 360

                });

            }

        }, 500);

        alert(`❤️ I LOVE YOU AZULIA ❤️

Forever & Always

Galang ❤️`);

    });

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