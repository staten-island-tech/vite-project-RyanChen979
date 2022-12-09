import "../styles/style.css";
import { restaurant } from "./items.js";
import { sashimi } from "./items.js";

console.log(restaurant);
console.log(sashimi);

document.querySelector("#storeName").innerHTML = `
    <h1 id="title">${restaurant.name}</h1>
`;

function sashimiCards() {
  document.querySelector("#menu").innerHTML = `<h2>${sashimi.name}</h2>`;
}
function sashimiList() {
  sashimi.forEach((sashimi) => {
    console.log(`Name: ${sashimi.name}; Price: ${sashimi.price}`);
    console.log(`${sashimi.name}`);
  });
  sashimiCards();
}
sashimiList();
