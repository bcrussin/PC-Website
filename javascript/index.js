let scrolling = false;

let navLogo = document.getElementById("logo");
let navBar = document.getElementById("navbar");

window.onscroll = function () {
  //console.log(document.getElementById("nav-content").clientHeight);

  let scroll = document.body.scrollTop || document.documentElement.scrollTop;

  if (scroll > 0 && scroll < 200) {
    //navLogo.style.height = 100 - scroll / 2 + "px";
    navBar.style.height = 100 - scroll / 4 + "px";

    //let padding = 15 - scroll / 6.66 + 5;
    console.log(padding);
    //navBar.style.paddingTop = Math.round(padding) + "px";
    //navBar.style.paddingBottom = Math.round(padding) + "px";
    //document.getElementById("logo").style.fontSize = "25px";
  } else if (scroll == 0) {
    navBar.style.height = "100px";
    //navLogo.style.height = "100px";
    //navBar.style.paddingTop = "20px";
    //navBar.style.paddingBottom = "20px";
    //document.getElementById("logo").style.fontSize = "35px";
  } else {
    navBar.style.height = "50px";
    //navLogo.style.height = "50px";
    //navBar.style.paddingBottom = "5px";
    //navBar.style.paddingTop = "5px";
  }
};

setInterval(function () {
  if (scrolling) {
    scrolling = false;

    stickNavbar();
    //stickHeaders();
    console.log(Date.now());
  }
}, 100);

/*
var designCheck = document.getElementById("design-check");
var designHeader = document.getElementById("design-header");
var designContent = document.getElementById("design-content");
var designY = designCheck.offsetTop;
var designH = designHeader.offsetHeight + 8;
*/

function stickNavbar() {
  //console.log(document.getElementById("nav-content").clientHeight);

  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("logo").style.height = "50px";
    //document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("logo").style.height = "100px";
    //document.getElementById("logo").style.fontSize = "35px";
  }
}

/*

function stickHeaders() {
  designY = designCheck.offsetTop;

  //console.log(designH);
  //console.log("ScrollY: " + window.scrollY + " - " + "HeaderY: " + designY)

  if (window.scrollY + getNavbarHeight() > designY) {
    designContent.style.paddingTop = designH + "px";
    designHeader.classList.add("sticky-header");
  } else {
    designContent.style.paddingTop = "0px";
    designHeader.classList.remove("sticky-header");
  }
}

*/

function getNavbarHeight() {
  return document.getElementById("nav-content").clientHeight;
}
