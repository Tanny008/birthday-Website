const flap = document.querySelector(".flap");
const envelope = document.querySelector(".envelope");
const card = document.querySelector(".card-container");
const heartContainer = document.getElementById("heartContainer");
const messageEl = document.getElementById("typedMessage");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let charIdx = 0;

musicToggle.addEventListener("click", () => {
    if(bgMusic.paused){
        bgMusic.play();
        musicToggle.textContent = "Pause Music";
    }else{
        bgMusic.pause();
        musicToggle.textContent = "Play Music";
    }
});

flap.addEventListener("click",() => {
    flap.classList.add("open");
    flap.style.pointerEvents = "none";

    spawnHearts();
    setTimeout(() => {
        envelope.classList.add("fade-out");
    },1000);

    setTimeout(() => {
            envelope.style.display = "none";
            card.classList.add("show");
            startTyping();
            document.body.classList.add("petals-started");
    },2000);
});

function spawnHearts(callback){
    const container = document.getElementById("heartContainer");
    const totalHeart = 20;

    for(let i=0; i<totalHeart; i++){
        const heart = document.createElement("div");
        heart.classList.add("heart");
        const randomLeft = Math.random()*180;
        heart.style.left = `${randomLeft}px`;

        //random delay on hearts
        const delay = Math.random()*1.5;
        heart.style.animationDelay = `${delay}s`;

        //slightly animation speed
        const duration = 3+Math.random()*1.5;
        heart.style.animationDuration = `${duration}s`;

        container.appendChild(heart);

        //Remove after animation
        setTimeout(() => heart.remove(),(duration+delay)*1000);
    }
}

envelope.addEventListener("click",() => {
    envelope.classList.add("open");

    setTimeout(() => {
        envelope.style.opacity = "0";
    },2000);

    setTimeout(() => {
        card.classList.add("show");
    },3000);

    startPetals();
});

function startTyping(){
  if(charIdx < message.length){
    messageEl.textContent += message.charAt(charIdx);
    charIdx++;
    setTimeout(startTyping,100);
  }
}

const cardEl = document.getElementById("card");
const observer = new MutationObserver(() => {
    if(cardEl.classList.contains("show")){
        startTyping();
    }
});
observer.observe(cardEl,{attributes: true});

function startPetals(){
    const petalContainer = document.createElement("div");
    petalContainer.id="petals";
    document.body.appendChild(petalContainer);

    setInterval(() => {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random()*100 + "vw";
        petal.style.animationDuration=5+Math.random()*5 + "s"
        petalContainer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        },100);
    },300);
}

document.getElementById("nextPageBtn").addEventListener("click",() => {
    window.location.href = "finalPage.html";
});