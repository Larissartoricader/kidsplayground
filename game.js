const startGame = document.querySelector(".start-button");
const animalOne = document.querySelector(".animal1");
const animalTwo = document.querySelector(".animal2");
const animalsButtons = document.querySelector(".game-box");

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

let animalSecret = "";

function resetall() {
  animalOne.classList.remove("rightAnswer", "wrongAnswer");
  animalTwo.classList.remove("rightAnswer", "wrongAnswer");
}

startGame.addEventListener("click", () => {
  //reset Background-Colors:
  resetall();

  //Random selection of button1 and button2
  const randomButtons = [animalOne, animalTwo];

  const rightButtonIndex = Math.floor(Math.random() * randomButtons.length);

  const rightButton = randomButtons[rightButtonIndex];

  const wrongButtonIndex = rightButtonIndex === 0 ? 1 : 0;

  const wrongButton = randomButtons[wrongButtonIndex];

  //Random selections of animals pictures

  const animalSecretIndex = Math.floor(Math.random() * animals.length);
  const animalSecret = animals[animalSecretIndex];
  console.log("The Right Answer " + animalSecret);
  rightButton.style.backgroundImage = `url(./assets/images/${animalSecret}.png)`;

  const animalRandomIndex = Math.floor(Math.random() * animals.length);
  const animalRandom = animals[animalRandomIndex];
  console.log("The Wrong Answer " + animalRandom);
  wrongButton.style.backgroundImage = `url(./assets/images/${animalRandom}.png)`;

  //Animal Sound

  const playAnimalSecret = new Audio(`/assets/sounds/${animalSecret}.mp3`);

  playAnimalSecret.play();
  setTimeout(() => {
    playAnimalSecret.pause();
    playAnimalSecret.currentTime = 0;
  }, 2000);

  //Answer Checking Button One
  animalOne.addEventListener("click", () =>
    handleClick(animalOne, animalSecret)
  );
  //Answer Checking Button Two
  animalTwo.addEventListener("click", () =>
    handleClick(animalTwo, animalSecret)
  );
});

function handleClick(animalElement, animalSecret) {
  const style = getComputedStyle(animalElement);
  const backgroundImage = style.backgroundImage;

  // Extração do URL da imagem usando regex
  const urlPattern = /url\("?(.+?)"?\)/;
  const match = backgroundImage.match(urlPattern);
  const imageUrl = match ? match[1] : null;

  if (imageUrl) {
    // Extrai o nome do arquivo com extensão
    const fileNameWithExtension = imageUrl.split("/").pop();
    // Remove a extensão para obter apenas o nome do arquivo
    const fileNameWithoutExtension = fileNameWithExtension.split(".")[0];

    // Verifica se o nome do arquivo corresponde ao animalSecret
    if (fileNameWithoutExtension === animalSecret) {
      animalElement.classList.add("rightAnswer");
    } else {
      animalElement.classList.add("wrongAnswer");
    }
  }
}
