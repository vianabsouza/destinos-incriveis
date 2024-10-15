document.addEventListener("DOMContentLoaded", function() {

  const dropdownBtn = document.querySelector(".dropdown-btn");
  const userMenu = document.querySelector(".user-menu");
  
  dropdownBtn.addEventListener("click", function() {
    userMenu.classList.toggle("open");
  });

  const ofertasBtn = document.querySelector(".btn");
  
  ofertasBtn.addEventListener("click", function() {
    window.location.href = "./src/pages/promocoes/promocoes.html";
  });

  const cardButtons = document.querySelectorAll(".card-button");
  
  cardButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      alert("Pacote adicionado ao carrinho!");
    });
  });

  const moreDestinosBtn = document.querySelector(".card-buttonn");
  
  moreDestinosBtn.addEventListener("click", function() {
    window.location.href = "./src/pages/voos/voos.html";
  });

  const moreReviewsBtn = document.querySelector(".btnn");
  
  moreReviewsBtn.addEventListener("click", function() {
    window.location.href = "./src/pages/reviews/reviews.html";
  });

  const quemSomosBtn = document.querySelector(".veja-butao");
  
  quemSomosBtn.addEventListener("click", function() {
    window.location.href = "./src/pages/quem-somos/quem-somos.html";
  });
});
