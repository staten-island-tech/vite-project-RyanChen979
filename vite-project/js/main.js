import "../styles/style.css";
import { restaurant } from "./items.js";
import { sashimi } from "./items.js";
import { DOM } from "./dom.js";

console.log(restaurant);
console.log(sashimi);

document.querySelector("#storeName").innerHTML = `
    <h1 id="title">${restaurant.name}</h1>
`;

function sashimiCards(sashimi) {
  DOM.menu.insertAdjacentHTML(
    "beforebegin",
    `<div class="sashimiCards">
      <h3 class=">${sashimi.name}</h3>
      <img class="img" src="${sashimi.img}"></img>
      </div>`
  );
}
function sashimiList() {
  sashimi.forEach((sashimi) => {
    console.log(`Name: ${sashimi.name}; Price: ${sashimi.price}`);
    sashimiCards(sashimi);
  });
}
sashimiList();
