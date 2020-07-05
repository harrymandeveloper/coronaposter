((d) => {
  let clickCount = 0;
  let textCount = 0;
  let generateButton = d.getElementById("generate");
  let firstLine = d.getElementById("first");
  let secondLine = d.getElementById("second");
  let thirdLine = d.getElementById("third");

  const firstInstruction = [
    "Eat a muffin",
    "Stay Alert",
    "Drink 5 beers",
    "Become a lollipop lady",
    "Split a packet of peanuts",
    "Get in a hot air balloon",
    "Have a pasta salad",
    "Cut Your Own Hair",
    "Drive to the Winchester",
    "Put the Kettle On",
    "Make Cheese on Toast",
    "Make <br/> a morning margarita",
    "Press face to pub window",
    "Raise Tigers",
    "Arrange condiments in alphabetical order",
    "Sing Happy Birthday To The Sink",
    "Extend your household bubble",
  ];

  const secondInstruction = [
    "Consider life choices",
    "Facetime with a friend overseas",
    "Remove last loo roll from  hiding place",
    "Search for flour everywhere",
    "Binge watch Dawson's Creek",
    "Fall over backwards",
    "Bake a pie",
    "Open a one-way air bridge to the freezer",
    "Reorganise the apps on your phone",
    "Talk to the animals",
    "Zoom Call Your Mum",
    "Create anti-gravity boots",
    "Lose the remote down the back of the sofa",
    "Have a nice cold pint",
    "Open six packets of crisps <br/><div class='triangle'></div><br/> Have all of the crisps ",
    "Have a cup of tea",
    "Hit unmute while farting during a pub quiz by accident",
    "Discover a mysterious island",
    "Assemble Robot Army",
    "Have a biscuit",
    "Bake Some More Bread",
    "Open Tik Tok Account",
    "Tell Child \'That\'s Amazing\'",
    "Chair a meeting in your pyjamas",
    "Find flux capacitor",
    "Find sports almanac",
    "Livestream a random hedge",
    "Complete 1000 piece puzzle of obscure painting of gondoliers",
    "Wash your hands",
    "Build an app",
    "Make pancake cereal",
  ];

  const thirdInstruction = [
    "Amaze your friends",
    "Steal a tank",
    "Smell the roses",
    "Celebrate",
    "Tear down a statue",
    "Dance Around the Living Room",
    "Take a selfie",
    "Play with plastic dinosaurs",
    "Wait for all of this to blow over",
    "Drive to Barnard Castle",
    "Return with unbelievable tales",
  ]

    generateButton.addEventListener("click", () => {
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
