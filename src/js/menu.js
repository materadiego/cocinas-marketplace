// Menu transition

const menu = document.querySelector(".menu");
const menuBut = document.querySelector("#menu-but");
const xMenu = document.querySelector("#menu-xbut");

function hideShow() {
  if (menu.classList.contains("m-is-active")) {
    menu.classList.remove("m-is-active");
  } else {
    menu.classList.add("m-is-active");
  }
}

menuBut.addEventListener("click", hideShow);
xMenu.addEventListener("click", hideShow);

// Restaurants transition

const desplegable = document.querySelector("#rest-in");
const textoDesplegable = document.querySelector("#menu-rest");
const flechaDesplegable = document.querySelector("#menu-flecha");

function hideShow2() {
  if (desplegable.classList.contains("despl-is-active")) {
    flechaDesplegable.classList.remove("flecha-is-active");
    desplegable.classList.remove("despl-is-active");
  } else {
    desplegable.classList.add("despl-is-active");
    flechaDesplegable.classList.add("flecha-is-active");
  }
}

textoDesplegable.addEventListener("click", hideShow2);
