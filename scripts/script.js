let backgroundColor = window.getComputedStyle(document.querySelector("body")).color;
let menuHomeElem = document.querySelector(".menu_item_home>a");

if ((window.outerWidth <= 620) && (backgroundColor==="rgb(0, 0, 0)")) {
  menuHomeElem.innerHTML = `<img src="images/home.svg" alt=""/>`;
} else if ((window.outerWidth <= 620) && (backgroundColor!=="rgb(0, 0, 0)")){
  menuHomeElem.innerHTML = `<img src="images/home_white.svg" alt=""/>`;
}
