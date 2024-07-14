const startGame = document.querySelector(".start-button");
const animalOne = document.querySelector(".animal1");
const animalTwo = document.querySelector(".animal2");

const animals = [
  "bee",
  "bird",
  "cat",
  "chick",
  "cow",
  "dolphin",
  "donkey",
  "ducky",
  "hen",
  "hippo",
  "horse",
  "lion",
  "monkey",
  "owl",
  "parrot",
  "penguin",
  "pig",
  "shark",
  "sheep",
  "tiger",
];

startGame.addEventListener("click", () => {
  const randomButtons = [animalOne, animalTwo];

  const rightButtonIndex = Math.floor(Math.random() * randomButtons.length);

  console.log(rightButtonIndex);
  const rightButton = randomButtons[rightButtonIndex];

  const wrongButtonIndex = rightButtonIndex === 0 ? 1 : 0;
  console.log(wrongButtonIndex);
  const wrongButton = randomButtons[wrongButtonIndex];

  console.log("These are all the buttons: " + randomButtons);
  console.log(rightButton);
  console.log(wrongButton);

  const animalSecretIndex = Math.floor(Math.random() * animals.length);
  const animalSecret = animals[animalSecretIndex];
  console.log(animalSecret);
  rightButton.style.backgroundImage = `url(./assets/images/${animalSecret}.png)`;

  const animalRandomIndex = Math.floor(Math.random() * animals.length);
  const animalRandom = animals[animalRandomIndex];
  console.log(animalRandom);
  wrongButton.style.backgroundImage = `url(./assets/images/${animalRandom}.png)`;

  const playAnimalSecret = new Audio(`/assets/sounds/${animalSecret}.mp3`);

  playAnimalSecret.play();
});
