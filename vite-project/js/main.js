import "../styles/style.css";
import { restaurant } from "./items.js";
import { sashimi } from "./items.js";
import { DOM } from "./dom.js";

console.log(restaurant);
console.log(sashimi);

document.querySelector("#storeName").innerHTML = `
    <h1 id="title">${restaurant.name}</h1>
`;

// function sashimiCards(sashimi) {

// }

function sashimiList() {
  sashimi.forEach((sashimi) => {
    console.log(`Name: ${sashimi.name}; Price: ${sashimi.price}`);
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div >
      <h4 class="name">${sashimi.name}</h4>
      <img class="food-imgs" src="${sashimi.img}"></img>
      </div>`
    );
  });
}
sashimiList();
