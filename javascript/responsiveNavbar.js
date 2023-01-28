let scrolling = false;

let navLogo = document.getElementById("logo");
let navBar = document.getElementById("navbar");

let mobileCheck = window.matchMedia("(max-width: 800px)");

window.onscroll = function () {
  if (!mobileCheck.matches) {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (scroll > 0 && scroll < 200) {
      navBar.style.height = 100 - scroll / 4 + "px";
    } else if (scroll == 0) {
      navBar.style.height = "100px";
    } else {
      navBar.style.height = "50px";
    }
  }
};

mobileCheck.onchange = function () {
  navBar.style.height = "60px";
};

// HAMBURGER MENU

let navToggle = document.querySelector(".nav-toggle");
let bars = document.querySelectorAll(".bar");
let navButtons = document.getElementById("nav-buttons");

navToggle.addEventListener("click", function () {
  bars.forEach((bar) => bar.classList.toggle("x"));

  if (navButtons.style.visibility === "visible") {
    navButtons.style.visibility = "collapse";
    //navButtons.style.opacity = 0;
  } else {
    navButtons.style.visibility = "visible";
    //navButtons.style.opacity = 1;
  }
});
/*setInterval(function () {
  if (scrolling) {
    scrolling = false;

    stickNavbar();
    console.log(Date.now());
  }
}, 100);*/
