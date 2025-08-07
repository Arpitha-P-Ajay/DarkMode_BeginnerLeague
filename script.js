const toggle = document.getElementById("bright");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon-stars-fill");
  if (this.classList.toggle("bi-sun-fill")) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
