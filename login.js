const form = document.getElementById('loginForm');
const sendBtn = document.getElementById('sendBtn');
const errorEl = document.getElementById('error');
const heartContainer = document.getElementById('heartContainer');

//Customize your correct passCode
const correctPasscode = 'cutie';

form.addEventListener('submit',function(e){
    e.preventDefault();

    const name = document.getElementById('Name').value.trim();
    const pass = document.getElementById('passCode').value.trim();
    const wish = document.getElementById('Wish').value.trim();
    const memory = document.getElementById('Memory').value.trim();

    if(pass !== correctPasscode){
        errorEl.textContent = 'Wrong passCode😢! Please tryAgain for me';
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'),400);
        return;
        }

    errorEl.textContent = "";
    spawnHearts(); // Animate floatingHearts
    sendBtn.disabled = true;

    setTimeout(() => {
        window.location.href = "memory.html";
    },1800);
});

function spawnHearts(){
    console.log("spawning Hearts");
    for(let i=0;i<20;i++){
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random()*100}%`;
        heart.style.left = `${Math.random()*80+10}%`;
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(),1600);
    }
}
