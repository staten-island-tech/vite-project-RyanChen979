import "../styles/style.css";
import { DOM } from "./dom.js";
import { restaurant } from "./menu.js";
import { lunch } from "./menu.js";
import { dinner } from "./menu.js";
import { dessert } from "./menu.js";

console.log(restaurant);
console.log(lunch);
console.log(dinner);
console.log(dessert);

document.querySelector("#storeName").innerHTML = `
    <h1 id="title">${restaurant.name}</h1>
`;

function lunchMenu() {
  lunch.forEach((el) => {
    console.log(`Name: ${el.name}; Price: ${el.price}`);
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div >
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      </div>`
    );
  });
}
lunchMenu();

function dinnerMenu() {
  dinner.forEach((el) => {
    console.log(`Name: ${el.name}; Price: ${el.price}`);
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div >
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      </div>`
    );
  });
}
dinnerMenu();

function dessertMenu() {
  dinner.forEach((el) => {
    console.log(`Name: ${el.name}; Price: ${el.price}`);
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div >
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      </div>`
    );
  });
}
dessertMenu();
