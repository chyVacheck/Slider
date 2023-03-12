const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sideBar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");

const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlide = 0;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  let time = 1;
  if (direction === "up") {
    activeSlide++;
    if (activeSlide === slidesCount) {
      activeSlide = 0;
      time = slidesCount;
    }
  } else if (direction === "down") {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slidesCount - 1;
      time = slidesCount;
    }
  }

  mainSlide.style.transform = `translateY(-${activeSlide * 100}vh)`;
  mainSlide.style.transition = `transform ${time * 0.5}s ease-in-out`;

  sideBar.style.transform = `translateY(${activeSlide * 100}vh)`;
  sideBar.style.transition = `transform ${time * 0.5}s ease-in-out`;
}
