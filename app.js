
var userName = prompt("What is your name?")
alert("Hi "+ userName + " Ima ask you a question.");
  console.log("The Users name is " + userName);
  document.getElementById("demo").innerHTML = ("Your name is " + userName);
  if (userName === "David") {
    document.write(userName + " is a dumb name.")
  }
  else {
    document.write("Yeaaahhh Boy!!!!!");
  }
  var answer1 = prompt(userName + " this is a YES or NO question.\
   Please answer with Y or N!!\
  Does Sam have 4 cats?").toUpperCase();
  answer1
  if (answer1 === "Y") {
    document.write("That is sick, man!! Who wants so many cats!!!");
  }
  else {
    document.write("Good. I hope he doesnt even have 1 cat.");
  }
