var tabletWidth = 768;
var mainNav = document.querySelector(".main-nav");
var menuButton = document.querySelector(".main-nav__menu-button");
var menuIsClosed = document.querySelector(".main-nav--closed");

// Активация мобильного меню
mainNav.classList.remove("main-nav--nojs");

if (window.outerWidth < tabletWidth) {
  mainNav.classList.add("main-nav--closed");
  console.log("Мобильная версия меню");
}

// Переключение состояния меню
menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNav.classList.toggle("main-nav--closed");
  console.log("Переключили состояние меню");
});

// Отслеживание ширины окна
window.addEventListener("resize", function() {
  if (window.outerWidth < tabletWidth) {
    mainNav.classList.add("main-nav--closed");
    console.log("Мобильная версия меню");
  }

  if (window.outerWidth >= tabletWidth && mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    console.log("Отключили мобильную версию меню");
  }
});
