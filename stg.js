const prompt = require("prompt-sync")();

// Functions of the Student Generator Grade

function getGrade(){
  const marks = prompt("Enter students mark between 0-100: ")

  if (marks > 79)
  {
    console.log("A")
  }
  else if (marks >=60 && marks <= 79)
  {
    console.log("B")
  }
  else if (marks <= 59 && marks >= 49)
  {
    console.log("C")
  }
  else if (marks >= 40 && marks <= 49)
  {
    console.log("D")
  }
  else if (marks < 40)
  {
    console.log("E")
  }
 else{
  console.log("Error:Enter numbers not words kindly")
 }
}

// Tester
getGrade()