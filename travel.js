let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");
let loginForm = document.querySelector(".login-form");
let SignUPForm = document.querySelector(".signupform");
let menuBar = document.querySelector("#menu-bar");
let amenu = document.querySelector(".navbar");
let vidBtn = document.querySelectorAll(".video-btn");
const searchContainer = document.querySelector("#result");

function showbar() {
  searchContainer.classList.toggle("show");
  searchBtn.classList.toggle("fa-times");
}
function GoToLogin() {
  SignUPForm.classList.remove("active");
  loginForm.classList.add("active");
}
function GoToSignUp() {
  loginForm.classList.remove("active");
  SignUPForm.classList.add("active");
}
function showform() {
  loginForm.classList.add("active");
}
function showformSignUP() {
  SignUPForm.classList.add("active");
}
function hideform() {
  loginForm.classList.remove("active");
}
function hideformSignUP() {
  SignUPForm.classList.remove("active");
}
function showmenu() {
  menuBar.classList.toggle("fa-times");
  amenu.classList.toggle("active");
}
vidBtn.forEach((slide) => {
  slide.addEventListener("click", function () {
    document.querySelector(".controls .blue").classList.remove("blue");
    slide.classList.add("blue");
    let src = slide.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
