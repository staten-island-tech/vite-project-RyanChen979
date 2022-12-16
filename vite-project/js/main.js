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

function lunchItems() {
  lunch.forEach((el) => {
    console.log(`Name: ${el.name}; Price: ${el.price}`);
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div class="lunchItems">
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
      `<div class="dinnerItems">
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
      `<div class="dessertItems">
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      <h5 class="price">${el.price}</h5>
      </div>`
    );
  });
}
dessertItems();

DOM.lunchMenu.addEventListener("click", function () {
  if (DOM.menu.classList.contains("lunch")) {
  } else {
    DOM.menu = "";
    DOM.menu.classList.remove("dinnerItems", "desserItems");
    DOM.menu.classList.add("lunchItems");
    lunchItems();
  }
});

DOM.dinnerMenu.addEventListener("click", function () {
  if (DOM.menu.classList.contains("dinner")) {
  } else {
    DOM.menu = "";
    DOM.menu.classList.remove("dinnerItems", "desserItems");
    DOM.menu.classList.add("dinnerItems");
    lunchItems();
  }
});

DOM.dessertMenu.addEventListener("click", function () {
  if (DOM.menu.classList.contains("dessert")) {
  } else {
    DOM.menu = "";
    DOM.menu.classList.remove("dinnerItems", "desserItems");
    DOM.menu.classList.add("dessertItems");
    lunchItems();
  }
});
