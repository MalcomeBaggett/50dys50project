const open = document.getElementById("open");
const closed = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
});

closed.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
