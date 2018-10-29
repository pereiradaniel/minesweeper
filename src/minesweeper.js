const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (var i = 0; i < numberOfRows; i++) {
    row = [];
    for (var n = 0; n < numberOfColumns; n++) {
      row.push(' ');
    };
  };
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
