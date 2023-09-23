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




// listeneer fleches //
leftArrow.addEventListener("click", function() {
  alert("Image gauche cliquée !");
});

rightArrow.addEventListener("click", function() {
  alert("Image droite cliquée !");
});
//bullet point//

