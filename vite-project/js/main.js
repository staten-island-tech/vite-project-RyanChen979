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

document.querySelector(
  "#storeName"
).innerHTML = `<h1 id="title">${restaurant.name}</h1>`;

function lunchItems() {
  lunch.forEach((el) => {
    console.log(`Name: ${el.name}; Price: ${el.price}`);
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div class="items">
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      <h5 class="price">${el.price}</h5>
      </div>`
    );
  });
}
lunchItems();

function dinnerItems() {
  dinner.forEach((el) => {
    console.log(`Name: ${el.name}; Price: ${el.price}`);
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div class="items">
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      <h5 class="price">${el.price}</h5>
      </div>`
    );
  });
}
dinnerItems();

function dessertItems() {
  dinner.forEach((el) => {
    console.log(`Name: ${el.name}; Price: ${el.price}`);
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div class="items">
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      <h5 class="price">${el.price}</h5>
      </div>`
    );
  });
}
dessertItems();

/* DOM.lunchMenu.addEventListener("click", function () {
  if (DOM.menu.classList.contains("lunch")) {
  } else {
    DOM.menu = "";
    DOM.menu.classList.remove("dinnerItems", "desserItems");
    DOM.menu.classList.add("lunchItems");
    lunchItems();
  }
}); */

DOM.querySelector(".theme").addEventListener("click", function () {
  if (DOM.body.classList.contains("cool")) {
    DOM.body.classList.remove("cool");
    DOM.body.classList.add("warm");
  } else {
    DOM.body.classList.remove("warm");
    DOM.body.classList.add("cool");
  }
});

DOM.querySelector(".lunch").addEventListener("click", function () {
  if (DOM.menu.classList.contains("all")) {
    DOM.body.classList.remove("dinner");
    DOM.body.classList.remove("dessert");
    DOM.body.classList.add("lunch");
    lunchItems();
  } else {
    DOM.body.classList.remove("dinner");
    DOM.body.classList.remove("dessert");
    DOM.body.classList.add("lunch");
    lunchItems();
  }
});
