((d) => {
  let clickCount = 0;
  let textCount = 0;
  let billboardText = d.getElementById("slogan");
  let firstLine = d.getElementById("first");
  let secondLine = d.getElementById("second");
  let thirdLine = d.getElementById("third");

  let body = d.body;

  const firstInstruction = [
    "Eat a muffin",
    "Drink 5 beers",
    "Become a <br /> lollipop lady",
    "Split a packet of peanuts",
    "Get in a hot air balloon",
    "Have a pasta salad",
    "Cut Your Own Hair",
    "Drive to the Winchester",
    "Put the Kettle On",
    "Make Cheese on Toast",
    "Make a morning margarita",
    "Press face to pub window",
    "Raise Tigers",
    "Sing Happy Birthday Twice",
    "Extend your household bubble",
  ];

  const secondInstruction = [
    "Consider life choices",
    "Pour wine",
    "Facetime with a friend overseas",
    "Remove last loo roll from <br /> hiding place",
    "Search for flour everywhere",
    "Binge watch Dawson's Creek",
    "Fall over backwards",
    "Talk to the animals",
    "Zoom Call Your Mum",
    "Create anti-gravity boots",
    "Lose the remote down the back of the sofa",
    "Have a nice cold pint",
    "Open six packets of crisps. Have all of the crisps.",
    "Have a cup of tea",
    "Accidentally hit unmute while farting during a pub quiz",
    "Discover <br /> mysterious island",
    "Assemble Robot Army",
    "Have a biscuit",
    "Trash talk <br /> Carole Baskin",
    "Tell Child \'That\'s Amazing\'",
    "Chair a meeting in your pyjamas",
    "Find flux capacitor",
    "Find sports almanac",
    "Complete 1000 piece puzzle of obscure painting of gondoliers",
    "Wash your hands",
    "Build an app",
  ];

  const thirdInstruction = [
    "Amaze your friends",
    "Steal a tank",
    "Smell the roses",
    "Celebrate",
    "Tear down a statue",
    "Dance Around the Living Room",
    "Take a selfie",
    "Play with <br />plastic dinosaurs",
    "Wait for all of this to blow over",
    "Drive to Barnard Castle",
    "Return with <br /> unbelievable tales",
  ]

//   button.addEventListener("click", () => {

//     let buttonClick = d.createElement("li");

//     buttonClick.classList.add("list-group-item");
//     buttonClick.textContent = userText.value;
    
//     ul.append(buttonClick);
    
// });
    

    billboardText.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 11);
    textCount = (textCount + randomNumber) % firstInstruction.length;
    let newText = firstInstruction[textCount];
    firstLine.innerHTML = `${newText}`;

    textCount = (textCount + randomNumber) % secondInstruction.length;
    let secondNewText = secondInstruction[textCount];
    secondLine.innerHTML = `${secondNewText}`;

    textCount = (textCount + randomNumber) % thirdInstruction.length;
    let thirdNewText = thirdInstruction[textCount];
    thirdLine.innerHTML = `${thirdNewText}`;

  });





})(document);
