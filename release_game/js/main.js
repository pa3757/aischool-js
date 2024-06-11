window.addEventListener("keydown", (e) => {
  const div = document.getElementById(e.key);
  div.classList.add("pressed");
});

window.addEventListener("keyup", (e) => {
  const div = document.getElementById(e.key);
  div.classList.remove("pressed");
});
