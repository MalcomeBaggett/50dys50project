const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActivClasses();
    panel.classList.add("active");
  });
});

const removeActivClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
