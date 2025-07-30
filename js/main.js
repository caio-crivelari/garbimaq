const openMenuBtn = document.querySelector("#open-menu-button");
openMenuBtn.addEventListener("click", () => {
  document.querySelector(".navbar-content").classList.remove("hidden");
});

const closeMenuBtn = document.querySelector("#close-menu-button");
closeMenuBtn.addEventListener("click", () => {
  document.querySelector(".navbar-content").classList.add("hidden");
});

let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.querySelectorAll(".brands-slide");
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
