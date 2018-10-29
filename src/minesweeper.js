const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (var i = 0; i < numberOfRows; i++) {
    let row = [];
    for (var n = 0; n < numberOfColumns; n++) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (var i = 0; i < numberOfRows; i++) {
    let row = [];
    for (var n = 0; n < numberOfColumns; n++) {
      row.push(null);
    };
    board.push(row);
  };

  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    // The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  };

  return board;
};

const printBoard = board => {
  console.log(`Current Board: `);

  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];


printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);
