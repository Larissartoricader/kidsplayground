const animalButtons = document.querySelectorAll(".animalButton");

animalButtons.forEach((animalButton) => {
  animalButton.addEventListener("click", () => {
    const animalClassNames = animalButton.className.split(" ");
    const animalName = animalClassNames[1];
    console.log(`The clicked Animal was ${animalName}`);

    const animalSound = new Audio(`assets/sounds/${animalName}.mp3`);

    animalSound.play();
    setTimeout(() => {
      animalSound.pause();
      animalSound.currentTime = 0;
      console.log(`Audio for ${animalName} stopped after 1 seconds`);
    }, 2000);
  });
});
