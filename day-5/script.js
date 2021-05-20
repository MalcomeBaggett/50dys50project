const text = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurr, 30);

function blurr() {
  load++;

  if (load > 99) clearInterval(int);

  text.innerText = `${load}%`;
  text.style.opacity = 1 - load / 100;
  bg.style.filter = `blur(${30 - (load / 100) * 30}px)`;
}
