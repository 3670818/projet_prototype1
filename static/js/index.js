const produits = document.querySelectorAll(".produits");
const image = document.querySelector(".image_slide");
const info = document.querySelector(".info");
const img = document.querySelector("img");

/**
 *
 * @param {HTMLElement} element
 * @returns bool
 * cette fonction sert a verifier si un elment html est visible a l'ecrant ou non
 */
function isFullyVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top - rect.width / 2 + 200 <= 0;
}
/**
 *
 * @param {*} event
 */
function scroll(event) {
  for (let i = 0; i < produits.length; i++) {
    if (isFullyVisible(produits[i]) === true) {
      produits[i].children[0].classList.add("animation");
      produits[i].children[1].classList.add("animation_image");
    }
  }
}
// $(".bouton").click(function () {
//   $("#modal .message").html("Contenu de ma modal");
//   $("#modal").addClass("open");
// });

// $("#modal .mask, #modal a.close").click(function () {
//   $("#modal").removeClass("open");
//   return false;
// });

let bienvenu = document.querySelector("#bienvenue");
let panier = document.querySelector("#panier");
let fenetre = document.querySelector("#fenetre");
let section = document.querySelector(".yesy");
let croix = document.querySelector(".ferm");
let vide = document.querySelector("#vide");
let tarte = document.querySelector("#tarte-ajout");

let ajouterPanier = Array.from(document.querySelectorAll(".ajouterPanier"));

console.log(ajouterPanier);
function px() {
  console.log("bonjour");
  fenetre.style.display = "block";
  section.style.background = "rgba(0, 0, 0, 0.5)";
  ajouterPanier.map((item) => {
    item.parentElement.parentElement.style.zIndex = -1;
  });
}
function fx() {
  console.log("salut");
}
function fermer() {
  fenetre.style.display = "none";
  section.style.background = "rgba(0, 0, 0, 0)";
  ajouterPanier.map((item) => {
    item.parentElement.parentElement.style.zIndex = 1;
  });
}
function test() {
  console.log("ok");
  vide.style.display = "none";
  tarte.style.display = "block";
}

ajouterPanier.map((item) => {
  item.addEventListener("click", test);
});
croix.addEventListener("click", fermer);
panier.addEventListener("click", px);
bienvenu.addEventListener("click", fx);
window.addEventListener("scroll", scroll);
