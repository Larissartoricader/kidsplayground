function animals() {
  const animalsContainer = document.querySelector(
    '[data-js="animals-container"]'
  );

  const animal = document.createElement("div");
  animal.classList.add("animalButton");
  animal.classList.add("bee");
  animalsContainer.append(animal);
}

animals();
