import { languageArray } from "./lng.js";

for (let key in languageArray) {
  document.querySelector(".lng-" + key).innerHTML =
    languageArray[key][document.documentElement.lang];
}
