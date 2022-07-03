function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
  printMessage(
    'Komputer zagrał ' + argComputerMove + ', a gracz ' + argPlayerMove
  );

  if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Gracz wygrywa!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
    printMessage('Remis!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Komputer wygrywa!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Gracz wygrywa!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
    printMessage('Remis!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Komputer wygrywa!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Gracz wygrywa!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('Remis!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Komputer wygrywa!');
  } else if (argPlayerMove == 'nieznany ruch') {
    printMessage('Nieznana komenda! - wpisz cyfrę: 1, 2 lub 3');
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove);
