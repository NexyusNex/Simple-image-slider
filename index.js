const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const image = document.querySelector(".image");

imageArray = [
  "flowerpurple.jpg",
  "flowerorange.jpg",
  "mountains.jpg",
  "owl.jpg",
  "rat.jpg",
];
let i = 0;
btnRight.addEventListener("click", function () {
  if (i < imageArray.length - 1) {
    i++;
    console.log(i);
    image.style.backgroundImage = `url(${imageArray[i]})`;
  } else {
    i = 0;
    image.style.backgroundImage = `url(${imageArray[i]})`;
  }
});

btnLeft.addEventListener("click", function () {
  if (i > 0) {
    i--;
    console.log(i);
    image.style.backgroundImage = `url(${imageArray[i]})`;
  } else {
    i = imageArray.length - 1;
    image.style.backgroundImage = `url(${imageArray[i]})`;
  }
});
