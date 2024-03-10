import { languageArray } from "./lng.js";

for (let key in languageArray) {
  const selectorArray = document.querySelectorAll(".lng-" + key);
  selectorArray.forEach((element) => {
    element.innerHTML = languageArray[key][document.documentElement.lang];
  });
}
