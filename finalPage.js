//Theme toggle
const modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('change',() => {
    document.body.classList.toggle('dark', modeSwitch.checked);
});

//scratchCard Logic
const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvasWidth = canvas.offsetWidth;
canvasHeight = canvas.offsetHeight;
ctx.fillStyle = '#999';
ctx.fillRect(0,0,canvas.clientWidth,canvasHeight);
ctx.globalCompositeOperation = 'destination-out';

canvas.addEventListener('mousedown',() => isDrawing = true);
canvas.addEventListener('mouseup',() => isDrawing = false);
canvas.addEventListener('mousemove', scratch);
canvas.addEventListener('touchstart',() => isDrawing = true);
canvas.addEventListener('touchend',() => isDrawing = false);
canvas.addEventListener('touchmove',(e) => {
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX-rect.left;
    const y = touch.clientY-rect.top;
    if(isDrawing){
        ctx.beginPath();
        ctx.arc(x,y,15,0,2*Maths.PI);
        ctx.fill();
    }
    e.preventDefault();
},{passive:false});

function scratch(e){
    if(!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX-rect.left;
    const y = e.clientY-rect.top;
    ctx.beginPath();
    ctx.arc(x,y,15,0,2*Maths.PI);
    ctx.fill();
    }

//Quiz
function answerQuiz(btn){
    const correctAns = "Restaurant";
    const result = document.getElementById("quizResult");
    if(btn.textContent === correctAns){
        result.textContent = "I knew it🥹, You will never going to forget it";
        result.style.color = "green";
    }
    else{
        result.textContent = "sorry! I can't make it memorable";
        result.style.color = "red";
    }
}

//flipBook Logic
const flipImages = [
    {src: "birthday1.jpg", caption: "akjaijfiiaoa"},
    {src: "birthday2.jpg", caption: "akjaijfiiaoa"},
    {src: "birthday3.jpg", caption: "akjaijfiiaoa"},
    {src: "birthday4.jpg", caption: "akjaijfiiaoa"},
    {src: "birthday5.jpg", caption: "akjaijfiiaoa"},
    {src: "birthday6.jpg", caption: "akjaijfiiaoa"},
];
let flipIdx = 0;
const flipImg = document.getElementById("flipPhoto");
const flipCaption = document.getElementById("flipCaption");

setInterval(() => {
    flipIdx = (flipIdx+1) % flipImages.length;
    fliping.src = flipImages[flipIdx].src;
    flipCaption.textContent = flipImages[flipIdx].caption;
},3000);

//drawingCanvas
const drawCanvas = document.getElementById("drawCanvas");
const drawCtx = drawCanvas.getContext('2d');
let painting = false;

function startDraw(e){
    painting = true;
    draw(e);
}

function endDraw(){
    painting = false;
    drawCtx.beginPath();
}

function draw(e){
    if(!painting) return;
    const rect = drawCanvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    drawCtx.lineWidth = 2;
    drawCtx.lineCap = 'round';
    drawCtx.strokeStyle = '#ff69b4';

    drawCtx.lineTo(x,y);
    drawCtx.stroke();
    drawCtx.beginPath();
    drawCtx.moveTo(x,y);
}

drawCanvas.addEventListener('mousedown',startDraw);
drawCanvas.addEventListener('mouseup',endDraw);
drawCanvas.addEventListener('mousemove',draw);
drawCanvas.addEventListener('touchstart',startDraw);
drawCanvas.addEventListener('touchend',endDraw);
drawCanvas.addEventListener('touchmove',draw);

function clearCanvas(){
    drawCtx.clearRect(0,0,drawCanvas.widht.drawCanvas.height);
    drawCtx.beginPath();
}

//Ensure canvas fits correctly on load
window.addEventListener('resize',() => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.fillStyle = "#999";
    ctx.fillRect(0,0,canvas.width,canvas.height);
});