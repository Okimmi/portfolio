import { selectLanguage } from "./lng-select.js";

const menuBtn = document.querySelector(".mobile-menu-btn-js");
const menu = document.querySelector(".mobile-menu-js");
const languageSelector = document.querySelector(".select-mobile-language-js");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle("opened");
  menu.classList.toggle("open");
  languageSelector.addEventListener("click", selectLanguage);
}
