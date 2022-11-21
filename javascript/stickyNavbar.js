let scrolling = false;

let navLogo = document.getElementById("logo");
let navBar = document.getElementById("navbar");

window.onscroll = function () {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;

  if (scroll > 0 && scroll < 200) {
    navBar.style.height = 100 - scroll / 4 + "px";
  } else if (scroll == 0) {
    navBar.style.height = "100px";
  } else {
    navBar.style.height = "50px";
  }
};

/*setInterval(function () {
  if (scrolling) {
    scrolling = false;

    stickNavbar();
    console.log(Date.now());
  }
}, 100);*/
