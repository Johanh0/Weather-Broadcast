const switchBody = document.querySelector(`.switch-body`);
const switchBtn = document.querySelector(`.switch`);
const body = document.querySelector(`body`);
const searchBtn = document.querySelector(`.hero-bottom-side button`);
let darkMode = false;

switchBody.addEventListener(`click`, fdarkMode);

function fdarkMode () {
    if ( darkMode === false ) {

        //Change background
        switchBody.style.backgroundImage = `url("../assets/switchImg/bgDark.svg")`;
        switchBtn.style.backgroundImage = `url("../assets/switchImg/switchMoon.svg")`;

        //Siwth Move
        switchBtn.style.transform = `translateX(180%)`;

        //Change background color
        body.style.background = `#3F6EAE`;

        //Change Btn Color
        searchBtn.style.color = `#3F6EAE`;

        //Dark mode now it's Onn
        darkMode = true;
    } else if ( darkMode === true ) {

        //Change background
        switchBody.style.backgroundImage = `url("../assets/switchImg/bgLight.svg")`;
        switchBtn.style.backgroundImage = `url("../assets/switchImg/switchSun.svg")`;

        //Siwth Move
        switchBtn.style.transform = `translateX(0%)`;

        //Change background color
        document.querySelector(`body`).style.background = `linear-gradient(0deg, rgba(65,138,206,1) 38%, rgba(125,191,255,1) 100%)`;

        //Change Btn Color
        searchBtn.style.color = `#418ACE`;

        //Dakr mode now it's off
        darkMode = false;
    }
};