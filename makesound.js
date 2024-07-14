export function makeSound(classButton) {
  switch (true) {
    case classButton.includes("bee"):
      const bee = new Audio("sounds/bee.mp3");
      bee.play();
      break;
    case classButton.includes("bird"):
      const bird = new Audio("sounds/bird.mp3");
      bird.play();
      break;
    case classButton.includes("cat"):
      const cat = new Audio("sounds/cat.mp3");
      cat.play();
      break;
    case classButton.includes("chick"):
      const tom1 = new Audio("sounds/chick.mp3");
      chick.play();
      break;
    case classButton.includes("cow"):
      const cow = new Audio("sounds/cow.mp3");
      cow.play();
      break;
    case classButton.includes("dolphin"):
      const dolphin = new Audio("sounds/dolphin.mp3");
      dolphin.play();
      break;
    case classButton.includes("donkey"):
      const donkey = new Audio("sounds/donkey.mp3");
      donkey.play();
      break;
    case classButton.includes("ducky"):
      const ducky = new Audio("sounds/ducky.mp3");
      ducky.play();
      break;
    case classButton.includes("hen"):
      const hen = new Audio("sounds/hen.mp3");
      hen.play();
      break;
    case classButton.includes("hippo"):
      const hippo = new Audio("sounds/hippo.mp3");
      hippo.play();
      break;
    case classButton.includes("horse"):
      const horse = new Audio("sounds/horse.mp3");
      horse.play();
      break;
    case classButton.includes("lion"):
      const lion = new Audio("sounds/lion.mp3");
      lion.play();
      break;
    case classButton.includes("monkey"):
      const monkey = new Audio("sounds/monkey.mp3");
      monkey.play();
      break;
    case classButton.includes("owl"):
      const owl = new Audio("sounds/owl.mp3");
      owl.play();
      break;
    case classButton.includes("parrot"):
      const parrot = new Audio("sounds/parrot.mp3");
      parrot.play();
      break;
    case classButton.includes("penguin"):
      const penguin = new Audio("sounds/penguin.mp3");
      penguin.play();
      break;
    case classButton.includes("pig"):
      const pig = new Audio("sounds/pig.mp3");
      pig.play();
      break;
    case classButton.includes("shark"):
      const shark = new Audio("sounds/shark.mp3");
      shark.play();
      break;
    case classButton.includes("sheep"):
      const sheep = new Audio("sounds/sheep.mp3");
      sheep.play();
      break;
    case classButton.includes("tiger"):
      const tiger = new Audio("sounds/tiger.mp3");
      tiger.play();
      break;

    default:
      console.log("Something Wrong " + classButton);
  }
}
