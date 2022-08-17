const nav = document.querySelector(`.nav`);
const line2 = document.querySelector(`.burger-line-2`);
const line3 = document.querySelector(`.burger-line-3`);

nav.addEventListener(`mouseover`, stretchLines);
nav.addEventListener(`mouseout`, normalLines);

function stretchLines () {
    line2.style.width = `100%`;
    line3.style.width = `100%`;
  }

function normalLines () { 
    line2.style.width = `75%`;
    line3.style.width = `45%`;
 }