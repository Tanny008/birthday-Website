document.addEventListener("DOMContentLoaded",()=> {
    const message = "Click on the box";
    const typingDiv = document.getElementById("typingMessage"); 

    let i = 0;
    function typeMessage(){
        if(i<= message.length){
            typingDiv.textContent += message.charAt(i);
            i++;
            setTimeout(typeMessage,100); 
        }
    }
    typeMessage();

    //giftBox click
    const giftBox = document.getElementById("giftBox");
    const photoStack = document.getElementById("photoStack");
    const photos = photoStack.querySelectorAll("img");

    photos.forEach((photos,index) => {
        //first photo hidden untill box click
        if(index === 0){
            photos.style.display = "none";
        }else{
            photos.style.display = "none";
        }
    });

    //fadeout & show first photo
    giftBox.addEventListener("click",() => {
        giftBox.style.opacity = "0";
        setTimeout(() => {
            giftBox.style.display = "none";
            photos[0].style.display = "block";
            photos[0].classList.add("visible");
        },200);
    });

    photos[0].addEventListener("click",() => {
        //fadeOut typing message
        const typedText = document.querySelector(".typing-message").classList.add("fadeout");
         
        if(typedText){
            typedText.classList.add("fade-out");

            setTimeout(() => {
                typedText.style.display = "none";
            },4000);
        }
    });

    //On click `n reveal others
    photos[0].addEventListener("click",() => {
        photos.forEach((photos,index) => {
            if(index>0){
                setTimeout(() => {
                    photos.style.display= "block";

                    const randomRotation = (Math.random()*16-8).toFixed(2);
                    const randomScale = (0.95 + Math.random()*0.1).toFixed(2);

                    photoStack.style.setProperty("--rotation",`${randomRotation}deg`);
                    photoStack.style.setProperty("--scale",`${randomScale}deg`);

                    //add cascade Unfold
                    photos.classList.add("unfold");

                    if(index%2===0){
                        photos.classList.add("unfold-left");
                    }else{
                        photos.classList.add("unfold-right");
                    }

                    const randomX = Math.random()*40-20;
                    photos.style.transform += `translateX(${randomX}px)`;

                    if(index === photos.length-1){
                        setTimeout(() => {
                            const finalMessage = document.getElementById("finalMessage");
                            finalMessage.classList.remove("hidden");
                            finalMessage.classList.add("show");
                        },1000);
                    }
                },index*600 + Math.random()*200);
            }
        });
    });

    //pageNavigation
    document.getElementById("nextPage").addEventListener("click",() => {
        window.location.href = "finalPage.html";
    });    
});