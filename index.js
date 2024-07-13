function animals() {
  const animalsContainer = document.querySelector(
    '[data-js="animals-container"]'
  );

  animalsContainer.append(animal);
}

animals();
