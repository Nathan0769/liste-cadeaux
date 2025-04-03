const burgerMenuButton = document.querySelector(".menu-burger-button");
const burgerMenuButtonIcon = document.querySelector(".menu-burger-button i");
const burgerMenu = document.querySelector(".burger-menu");

burgerMenuButton.onclick = function () {
  burgerMenu?.classList.toggle("open");
  const isOpen = burgerMenu?.classList.contains("open");

  if (burgerMenuButtonIcon) {
    burgerMenuButtonIcon.classList.toggle("fa-bars", !isOpen);
    burgerMenuButtonIcon.classList.toggle("fa-xmark", isOpen);
  }
};
