var mobile = window.matchMedia("(max-width: 767px)");
var menuButton = document.querySelector(".main-nav__menu-button");
var menuIsClosed = document.querySelector(".main-nav__menu-button--closed");
var menuIsOpened = document.querySelector(".main-nav__menu-button--opened");

// Активация мобильного меню
menuButton.classList.remove("main-nav__menu-button--nojs");

if (mobile.matches) {
  menuButton.classList.add("main-nav__menu-button--closed");
};

console.log("Мобильное меню активировано");

// Переключение состояния меню
menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuButton.classList.toggle("main-nav__menu-button--closed");
  console.log("Переключили состояние меню");
});
