window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);

});

const text = "Untuk Azulia ❤️";
let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 120);

    }

}

typeWriter();

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = Math.random()*20 + 15 + "px";

    heart.style.animationDuration =
        Math.random()*5 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,300);

function openGift(){

    const music =
        document.getElementById("music");

    music.play();

    alert(
        "❤️ Selamat Ulang Tahun Azulia ❤️\n\nDari Galang"
    );

    launchConfetti();

}

function launchConfetti(){

    for(let i=0;i<150;i++){

        const confetti =
            document.createElement("div");

        confetti.innerHTML="✨";

        confetti.style.position="fixed";

        confetti.style.left=
            Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.fontSize=
            Math.random()*20+15+"px";

        confetti.style.zIndex="999";

        confetti.style.transition=
            "5s linear";

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.style.transform=
                `translateY(${window.innerHeight}px)`;
        },50);

        setTimeout(()=>{
            confetti.remove();
        },5000);

    }

}

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    const flowers = [
        "🌸",
        "🌺",
        "🌷",
        "💮"
    ];

    petal.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    petal.style.animationDuration =
        (Math.random() * 5 + 8) + "s";

    petal.style.opacity =
        Math.random() * 0.5 + 0.5;

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 13000);

}
