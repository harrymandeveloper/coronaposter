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
    "Become a lollipop lady",
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
  ];

  const secondInstruction = [
    "Consider life choices",
    "Remove last loo roll from hiding place",
    "Search for flour everywhere",
    "Binge watch Dawson's Creek",
    "Fall over backwards",
    "Talk to the animals",
    "Zoom Call Your Mum",
    "Have a nice cold pint",
    "Have a cup of tea",
    "Do a pub quiz",
    "Discover mysterious island",
    "Assemble Robot Army",
    "Trash talk Carole Baskin",
    "Tell Child \'That\'s Amazing\'",
    "Chair a meeting in your pyjamas",
    "Find flux capacitor",
    "Find sports almanac",
    "Wash your hands",
  ];

  const thirdInstruction = [
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



// This is our API request.




})(document);
