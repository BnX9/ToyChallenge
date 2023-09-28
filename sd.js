const prompt = require("prompt-sync")();

//Functions of the Speed detector

function speedCheck() {
  const speed = prompt("Please enter the drivers car speed:");
  let points = 0;
  if (speed <= 70) {
    console.log("Ok");
  } else if (speed > 70) {
    points = (speed - 70) / 5;
    if (points <= 12) {
      console.log("Points: " + points);
    } else {
      console.log("License suspended");
    }
  } else {
    console.log("Please use numbers instead of text")
  }
}

// Tester
speedCheck();
