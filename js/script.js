{
  const playGame = function (playerInput) {
    clearMessages();

    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      }
    };

    const displayResult = function (argComputerMove, argPlayerMove) {
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
      }
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
  };

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });
  document
    .getElementById('play-scissors')
    .addEventListener('click', function () {
      playGame(3);
    });
}
