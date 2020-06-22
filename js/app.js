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
    "Talk to the animals",
    "Split a packet of peanuts",
    "Get in a hot air balloon",
    "Have a pasta salad",
    "Cut Your Own Hair",
    "Drive to the Winchester",
    "Put the Kettle On",
    "Make Cheese on Toast"
  ];

  const secondInstruction = [
    "Consider your life choices",
    "Fall over backwards",
    "Become a lollipop lady",
    "Talk to the animals",
    "Have a nice cold pint",
    "Have a cup of tea",
    "Discover mysterious island",
  ];

  const thirdInstruction = [
    "Steal a tank",
    "Smell the roses",
    "Celebrate",
    "Dance Around the Living Room",
    "Take a selfie",
    "Wait for all of this to blow over",
    "Drive to Barnard Castle",
    "Return with unbelievable tales"
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
