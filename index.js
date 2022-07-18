/////////*********** Carousel *********/

const thumbnail = document.querySelector(".slide-thumbnail");
const carousel = document.querySelector("#slider");
const  leftbtn = document.querySelector("#slide-left");
const  rightbtn = document.querySelector("#slide-right");

leftbtn.addEventListener("click", () => {
    carousel.scrollLeft -= 125;
});

rightbtn.addEventListener("click", () => {
    carousel.scrollLeft += 125;
});

const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

function autoPlay(){
    if(carousel.scrollLeft > (maxScrollLeft - 1)) {
        carousel.scrollLeft -= maxScrollLeft;
    } else {
        carousel.scrollLeft += 1.5;
    }
}

let play = setInterval(autoPlay, 50);

for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener("mouseover", () => {
        clearInterval(play)
    })
    thumbnail[i].addEventListener("mouseout", () => {
        return play = setInterval(autoPlay, 50);
    })
}

//ZinoTrust Academy assist
