var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  function printMessage(msg){
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  }
  
  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }
  
  var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
  
  /**
   * Describe this function...
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } 
    else if(argMoveId == '2'){
      return 'papier';
  }
  else if(argMoveId == '3'){
      return 'nożyce';
  }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } 
    else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
      printMessage('Wygrywasz!');
    }
    else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
      printMessage('Wygrywasz!');
    }
    else if(argPlayerMove ==  argComputerMove){
      printMessage('Remis!');
    }
    else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  playerMove = argButtonName;
  playerMove = getMoveName(playerInput);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}
buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonRock = document.getElementById('button-rock');
buttonTest.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper= document.getElementById('button-paper');
buttonTest.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonTest.addEventListener('click', function(){ buttonClicked('nożyce'); });