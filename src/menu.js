import {resetMain} from "./index.js"

function createItem(image, name, price) {
  const item = document.createElement("div");
  item.className = "menu-item";
  const img = document.createElement("img");
  img.src = `img/${image}.jpg`;
  const foodName = document.createElement("h3");
  foodName.textContent = name;
  const foodPrice = document.createElement("h3");
  foodPrice.textContent = price;
  item.appendChild(img);
  item.appendChild(foodName);
  item.appendChild(foodPrice);
  return item
}

function createGridContainer() {
  const grid = document.createElement("div");
  grid.className = "grid-container";
  grid.appendChild(createItem("crispychicken", "Crispy Chicken and Bacon Poutine", "4.99$"));
  grid.appendChild(createItem("gyrochicken", "Gyro Chicken Poutine", "4.99$"));
  grid.appendChild(createItem("gyrochicken", "Gyro Chicken Poutine", "4.99$"));
  grid.appendChild(createItem("crispychicken", "Crispy Chicken and Bacon Poutine", "4.99$"));
  grid.appendChild(createItem("crispychicken", "Crispy Chicken and Bacon Poutine", "4.99$"));
  grid.appendChild(createItem("gyrochicken", "Gyro Chicken Poutine", "4.99$"));
  return grid
}

function createMenu() {
  const menu = document.createElement("div");
  menu.className = "wrapper";
  const h1 = document.createElement("h1");
  h1.textContent = "Menu"
  menu.appendChild(h1);
  menu.appendChild(createGridContainer());
  return menu;
}

function loadMenu() {
  resetMain();
  const main = document.querySelector("main");
  main.className = "main-menu";
  main.appendChild(createMenu());
}

export default loadMenu;