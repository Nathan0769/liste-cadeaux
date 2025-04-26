const burgerMenuButton = document.querySelector(".menu-burger-button");
const burgerMenuButtonIcon = document.querySelector(".menu-burger-button i");
const burgerMenu = document.querySelector(".burger-menu");

// @ts-ignore
burgerMenuButton.onclick = function () {
  burgerMenu?.classList.toggle("open");
  const isOpen = burgerMenu?.classList.contains("open");

  if (burgerMenuButtonIcon) {
    burgerMenuButtonIcon.classList.toggle("fa-bars", !isOpen);
    burgerMenuButtonIcon.classList.toggle("fa-xmark", isOpen);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // @ts-ignore
  const formulaireAdd = document.querySelector("#gift-form");
  const checklistDiv = document.querySelector("#checklist");
  const inputCadeau = document.querySelector("#gift-name");
  const boutonAjout = document.querySelector("#add-cadeau");

  // Liste des cadeaux par défaut
  const cadeauxParDefaut = ["Cadeau 1", "Cadeau 2", "Cadeau 3"];

  // Fonction pour ajouter un cadeau à la checklist
  function ajouterCadeau(nom) {
    if (!checklistDiv) return;
    const newId = `gift-${Date.now()}-${Math.random()}`;
    const giftItem = document.createElement("div");
    giftItem.className = "gift-item";
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = newId;
    const label = document.createElement("label");
    label.setAttribute("for", newId);
    label.textContent = nom;
    giftItem.appendChild(inputCheckbox);
    giftItem.appendChild(label);
    checklistDiv.appendChild(giftItem);
  }

  // Ajouter les cadeaux par défaut au chargement
  cadeauxParDefaut.forEach(ajouterCadeau);

  if (boutonAjout && inputCadeau) {
    boutonAjout.addEventListener("click", function (event) {
      event.preventDefault();
      const giftName =
        inputCadeau instanceof HTMLInputElement ? inputCadeau.value.trim() : "";
      if (giftName !== "") {
        ajouterCadeau(giftName);
        if (inputCadeau instanceof HTMLInputElement) inputCadeau.value = "";
      }
    });
  }
});
