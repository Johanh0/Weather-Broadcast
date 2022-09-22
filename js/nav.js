const nav = document.querySelector(`.nav`);
const line2 = document.querySelector(`.burger-line-2`);
const line3 = document.querySelector(`.burger-line-3`);
const asideNav = document.querySelector(`.aside-nav`);
const xIcon = document.querySelector(`.fa-xmark`);

nav.addEventListener(`mouseover`, stretchLines);
nav.addEventListener(`mouseout`, normalLines);
nav.addEventListener(`click`, displayAside);
xIcon.addEventListener(`click`, closeAside)
function stretchLines () {
    line2.style.width = `100%`;
    line3.style.width = `100%`;
  }

function normalLines () { 
    line2.style.width = `75%`;
    line3.style.width = `45%`;
 }

function displayAside() {

    asideNav.style.display = `block`;
  
 };

 function closeAside() {
  asideNav.style.display = `none`;
 };