const languageSelector = document.querySelector(".select-language-js");
const languageBtn = document.querySelector(".language-btn-js");
const languageOptions = document.querySelectorAll(".language-option");

if (localStorage.getItem("lng")) {
  languageBtn.children[0].innerText = localStorage.getItem("lng");
  document.documentElement.lang = localStorage.getItem("lng");
  setActiveClass(localStorage.getItem("lng"));
}

languageBtn.addEventListener("click", openDropdown);

function closeDropdown(e) {
  if (e.target !== languageSelector && !languageSelector.contains(e.target)) {
    languageSelector.classList.remove("open");
    languageBtn.addEventListener("click", openDropdown);
    document.removeEventListener("click", closeDropdown);
    languageSelector.removeEventListener("click", selectLanguage);
  }
}

function openDropdown(e) {
  languageSelector.classList.add("open");
  e.stopPropagation();
  document.addEventListener("click", closeDropdown);
  languageSelector.addEventListener("click", selectLanguage);
  languageBtn.removeEventListener("click", openDropdown);
}

export function selectLanguage(e) {
  if (e.target.id !== "") {
    languageBtn.children[0].innerText = e.target.id;
    document.documentElement.lang = e.target.id;
    setActiveClass(e.target.id);
    localStorage.setItem("lng", e.target.id);
    location.reload();
  }
}

function setActiveClass(lng) {
  languageOptions.forEach((element) => {
    if (element.id === lng) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
