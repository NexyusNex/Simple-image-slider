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
dotsArray = [];
let i = 0;

function displayDots() {
  const dotsContainer = document.querySelector(".dots-container");
  for (let num = 0; num < imageArray.length; num++) {
    dotsArray[num] = num;
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-img", num);

    dot.addEventListener("click", function () {
      dot.classList.add("selected");
      i = dot.getAttribute("data-img");
      image.style.backgroundImage = `url(${imageArray[i]})`;
      isSelected();
    });

    dotsContainer.appendChild(dot);
  }
}

function isSelected() {
  const slides = document.querySelectorAll(".dot");
  slides.forEach((slide) => {
    index = slide.getAttribute("data-img");
    if (index != i) {
      slide.classList.remove("selected");
    }
    if (index == i) {
      slide.classList.add("selected");
    }
  });
}

btnRight.addEventListener("click", function () {
  if (i < imageArray.length - 1) {
    i++;
    console.log(i);
    image.style.backgroundImage = `url(${imageArray[i]})`;
  } else {
    i = 0;
    image.style.backgroundImage = `url(${imageArray[i]})`;
  }
  isSelected();
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
  isSelected();
});

displayDots();
