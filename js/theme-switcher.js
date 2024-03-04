if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

document.body.classList.remove("preload");

const themeSwitcherArray = document.querySelectorAll(".theme-switch-js");

themeSwitcherArray.forEach((themeSwitcher) => {
  themeSwitcher.addEventListener("click", toggleModal);
});

function toggleModal() {
  document.body.classList.toggle("light");

  if (localStorage.getItem("theme") === "light") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "light");
  }
}
