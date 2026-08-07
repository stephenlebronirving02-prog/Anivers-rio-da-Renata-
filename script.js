/* ========================================================= */
/*              CONFIGURAÇÕES PRINCIPAIS                     */
/* ========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    console.log("Projeto Renata iniciado ❤️");



    // Elementos principais

    const loadingScreen =
    document.getElementById("loading-screen");


    const loadingPhoto =
    document.getElementById("loading-photo");


    const progressFill =
    document.getElementById("progress-fill");


    const progressPercent =
    document.getElementById("progress-percent");


    const transition =
    document.getElementById("cinematic-transition");


    const landing =
    document.getElementById("landing-page");



    // Fotos da animação inicial

    const loadingImages = [

        "Fotos/foto1.jpg",

        "Fotos/foto2.jpg",

        "Fotos/foto3.jpg",

        "Fotos/foto4.jpg",

        "Fotos/foto5.jpg",

        "Fotos/foto6.jpg",

        "Fotos/foto7.jpg",

        "Fotos/foto8.jpg",

        "Fotos/foto9.jpg",

        "Fotos/foto10.jpg"

    ];



    let currentPhoto = 0;



    /*
        Cada foto fica 1 segundo.

        10 fotos = 10 segundos.
    */



    const totalTime = 10000;


    const intervalTime = 1000;



    /*
        Troca das fotos
    */


    const photoInterval = setInterval(() => {



        currentPhoto++;



        if(currentPhoto < loadingImages.length){


            loadingPhoto.style.opacity = "0";



            setTimeout(()=>{


                loadingPhoto.src =
                loadingImages[currentPhoto];


                loadingPhoto.style.opacity = "1";



            },300);



        }



    }, intervalTime);





    /*
        Barra de progresso
    */



    let startTime = Date.now();



    function updateProgress(){


        let elapsed =
        Date.now() - startTime;



        let progress =
        (elapsed / totalTime) * 100;



        if(progress > 100){

            progress = 100;

        }



        progressFill.style.width =
        progress + "%";



        progressPercent.innerText =
        Math.floor(progress) + "%";




        if(progress < 100){


            requestAnimationFrame(updateProgress);



        }



    }



    updateProgress();





    /*
        Final da Loading Screen
    */


    setTimeout(()=>{



        clearInterval(photoInterval);



        progressFill.style.width="100%";


        progressPercent.innerText="100%";



        setTimeout(()=>{



            startTransition();



        },500);



    }, totalTime);






    /*
        Transição cinematográfica
    */



    function startTransition(){



        transition.style.display =
        "flex";



        loadingScreen.style.opacity =
        "0";



        setTimeout(()=>{



            loadingScreen.style.display =
            "none";



            transition.style.opacity =
            "0";



            setTimeout(()=>{



                transition.style.display =
                "none";



                landing.style.display =
                "block";



                window.scrollTo({

                    top:0,

                    behavior:"smooth"

                });



            },1000);



        },1500);



    }



});

/* ========================================================= */
/*             CORAÇÕES CAINDO PELO SITE                    */
/* ========================================================= */


const heartsLayer =
document.getElementById("hearts-layer");



function createHeart(){


    const heart =
    document.createElement("div");



    heart.innerHTML =
    "❤";



    heart.classList.add("falling-heart");



    const colors = [

        "#ffffff",

        "#7B2EFF",

        "#2D8CFF"

    ];



    heart.style.color =
    colors[
        Math.floor(Math.random()*colors.length)
    ];



    heart.style.left =
    Math.random()*100 + "%";



    heart.style.fontSize =
    (15 + Math.random()*35) + "px";



    heart.style.animationDuration =
    (4 + Math.random()*6) + "s";



    heart.style.transform =
    `rotate(${Math.random()*360}deg)`;



    heartsLayer.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },10000);



}



setInterval(createHeart,250);







/* ========================================================= */
/*                APELIDOS CAINDO                            */
/* ========================================================= */



const wordsLayer =
document.getElementById("words-layer");



const nicknames = [


    "meu bem",

    "amor",

    "vida",

    "linda",

    "princesa",

    "benzinho",

    "mozão",

    "amorzin",

    "meu amor",

    "mor"


];





function createWord(){



    const word =
    document.createElement("div");



    word.innerText =
    nicknames[
        Math.floor(Math.random()*nicknames.length)
    ];



    word.classList.add("falling-word");



    word.style.left =
    Math.random()*90 + "%";



    word.style.fontSize =
    (14 + Math.random()*20) + "px";



    word.style.animationDuration =
    (5 + Math.random()*5) + "s";



    word.style.transform =
    `rotate(${Math.random()*40-20}deg)`;



    wordsLayer.appendChild(word);



    setTimeout(()=>{


        word.remove();


    },12000);



}



setInterval(createWord,800);






/* ========================================================= */
/*              ESTILO DAS ANIMAÇÕES CRIADAS                 */
/* ========================================================= */


const dynamicStyle =
document.createElement("style");


dynamicStyle.innerHTML = `



.falling-heart {


    position:fixed;


    top:-50px;


    animation:
    heartFall linear forwards;


    z-index:30;


    pointer-events:none;


    opacity:.8;


}



@keyframes heartFall{


    from{


        transform:

        translateY(-50px)

        rotate(0deg);


        opacity:0;


    }



    20%{


        opacity:1;


    }




    to{


        transform:

        translateY(110vh)

        rotate(360deg);


        opacity:0;


    }


}







.falling-word {



    position:fixed;


    top:-50px;


    color:white;


    font-weight:600;


    text-shadow:


    0 0 15px #7B2EFF;



    animation:

    wordFall linear forwards;


    z-index:25;


    pointer-events:none;


}



@keyframes wordFall{


    from{


        transform:

        translateY(-50px)

        rotate(0deg);


        opacity:0;


    }



    20%{


        opacity:1;


    }




    to{


        transform:

        translateY(110vh)

        rotate(360deg);


        opacity:0;


    }


}



`;



document.head.appendChild(dynamicStyle);






/* ========================================================= */
/*                 CONTROLE DA MÚSICA                        */
/* ========================================================= */



const music =
document.getElementById("music");


const playButton =
document.getElementById("playMusic");


const pauseButton =
document.getElementById("pauseMusic");





if(playButton){


    playButton.addEventListener("click",()=>{


    music.volume = 0.5;


    music.play()
    .then(()=>{

        console.log("Música iniciada 🎵");

    })
    .catch(error=>{

        console.log("Erro ao iniciar música:", error);

    });


});
}




if(pauseButton){


    pauseButton.addEventListener("click",()=>{


        music.pause();


    });


}





/*
    Música começa baixa
    e aumenta suavemente
*/



function fadeMusic(){



    music.volume = 0;



    let volume = 0;



    const fade =
    setInterval(()=>{



        volume +=0.02;



        music.volume =
        volume;



        if(volume >=1){


            clearInterval(fade);


        }



    },100);



  }

/* ========================================================= */
/*             BOTÃO COMEÇAR SURPRESA                       */
/* ========================================================= */


const startButton =
document.getElementById("start-button");



if(startButton){


    startButton.addEventListener("click",()=>{


        window.scrollTo({


            top:

            document.getElementById("gallery").offsetTop,


            behavior:"smooth"


        });


    });


}






/* ========================================================= */
/*                  CONTADOR DE TEMPO                       */
/* ========================================================= */


/*
    Altere a data abaixo para a data
    que representa o início da história
*/

const beginningDate =
new Date("2010-08-16T00:00:00");;



function updateCounter(){



    const now =
    new Date();



    const difference =
    now - beginningDate;



    if(difference < 0){

        return;

    }



    const seconds =
    Math.floor(
        difference / 1000
    );



    const days =
    Math.floor(
        seconds / 86400
    );



    const hours =
    Math.floor(
        (seconds % 86400) / 3600
    );



    const minutes =
    Math.floor(
        (seconds % 3600) / 60
    );



    const sec =
    seconds % 60;




    document.getElementById("days").innerText =
    days;



    document.getElementById("hours").innerText =
    hours;



    document.getElementById("minutes").innerText =
    minutes;



    document.getElementById("seconds").innerText =
    sec;



}



setInterval(updateCounter,1000);


updateCounter();






/* ========================================================= */
/*          ANIMAÇÕES AO ENTRAR NA TELA                     */
/* ========================================================= */


const animatedElements =
document.querySelectorAll(
".photo-card, #love-message, #music-player, #counter"
);



animatedElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(40px)";

    element.style.transition=
    "1s ease";


});





const observer =
new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";


            entry.target.style.transform=
            "translateY(0)";


        }



    });



},{
    threshold:.15
});





animatedElements.forEach(element=>{


    observer.observe(element);


});







/* ========================================================= */
/*              PREPARAÇÃO DA FOTO23                        */
/* ========================================================= */



const coverImage =
document.querySelector(".disc img");



if(coverImage){



    coverImage.addEventListener("click",()=>{



        coverImage.style.transform =
        "scale(1.2)";



        setTimeout(()=>{


            coverImage.style.transform =
            "scale(1)";



        },500);



    });


}







/* ========================================================= */
/*                 EFEITO DE FOCO                           */
/* ========================================================= */



document.addEventListener(
"visibilitychange",
()=>{


    /*
       Quando a pessoa sai da página,
       reduz algumas animações.
    */


    if(document.hidden){



        document.body.style.animationPlayState =
        "paused";



    }else{



        document.body.style.animationPlayState =
        "running";


    }



});







/* ========================================================= */
/*              PREVENÇÃO DE ERROS                           */
/* ========================================================= */


window.addEventListener(
"error",
(event)=>{


    console.log(
    "Erro controlado:",
    event.message
    );


});
