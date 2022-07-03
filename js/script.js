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

  if (
    (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
  ) {
    printMessage('Gracz wygrywa!');
  } else if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  } else if (
    (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
    (argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
  ) {
    printMessage('Komputer wygrywa!');
  } else if (argPlayerMove == 'nieznany ruch') {
    printMessage('Nieznana komenda! - wpisz cyfrę: 1, 2 lub 3');
  }
}

const randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

const computerMove = getMoveName(randomNumber);

const playerInput = prompt(
  'Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'
);

console.log('Gracz wpisał: ' + playerInput);

const playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove);
