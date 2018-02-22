function myGame(){
  var userInput = document.getElementById('select').value;
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var compInput = getRandomInt(3);
  var choiceArr = {0:'rock', 1:'paper', 2:'scissors'};
  console.log("User chooses: " + choiceArr[userInput]);
  console.log("Computer chooses: "+ choiceArr[compInput]);
  if (userInput==0 & compInput==2){
    console.log("User wins!");
  }
  else if (userInput==1 & compInput==0){
    console.log("User wins!");
  }
  else if (userInput==2 & compInput==1){
    console.log("User wins!");
  }
  else if (userInput == compInput){
    console.log("Draw!");
  }
  else {
    console.log("Computer wins");
  }
}
