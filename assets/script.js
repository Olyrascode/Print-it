const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// recuperation image fleche//
let leftArrow = document.createElement("img");
let rightArrow = document.createElement("img");
let currentIndex = 0;

leftArrow.src = "assets/images/arrow_left.png";
leftArrow.alt = "arrow left";
leftArrow.id = "arrow_left";
leftArrow.className = 'arrow';


rightArrow.src = "assets/images/arrow_right.png";
rightArrow.alt = "arrow right";
rightArrow.id = 'arrow_right';
rightArrow.className = 'arrow';

// Sélectionnez l'élément "arrowDiv" par sa classe
let arrowDiv = document.querySelector('#banner');

// attribution //
arrowDiv.insertBefore(rightArrow, arrowDiv.querySelector('p'));
arrowDiv.insertBefore(leftArrow, arrowDiv.querySelector('p'));


function updateSlide() {
  const bannerImg = document.querySelector(".banner-img");
  const tagLine = document.querySelector("#banner p");
  const currentSlide = slides[currentIndex];
  bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`;
  tagLine.innerHTML = currentSlide.tagLine;
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
  updateDots();
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
  updateDots();
});


//bullet point//
let bulletDiv = document.querySelector('.dots');
for (  var i = 0; i <slides.length; i++) {

  let bulletPoint = document.createElement('div');
  bulletPoint.classList.add('dot');
  bulletPoint.dataset.index = i;
  bulletDiv.appendChild(bulletPoint);
  bulletPoint.addEventListener("click", () => {
    currentIndex = i;
    
  });
}
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("dot_selected");
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    }
  });
}


