let aboutSlides = document.getElementsByClassName("slideshow-content");
let currSlide = 0;

for (let i = 0; i < aboutSlides.length; i++) {
  aboutSlides[i].style.display = "none";
}
aboutSlides[currSlide].style.display = "flex";

function nextSlide() {
  console.log(currSlide);
  aboutSlides[currSlide].style.display = "none";

  currSlide++;
  if (currSlide >= aboutSlides.length) currSlide = 0;
  console.log("   " + currSlide);

  aboutSlides[currSlide].style.display = "flex";
}

function prevSlide() {
  console.log(currSlide);
  aboutSlides[currSlide].style.display = "none";

  currSlide--;
  if (currSlide < 0) currSlide = aboutSlides.length - 1;
  console.log("   " + currSlide);

  aboutSlides[currSlide].style.display = "flex";
}
