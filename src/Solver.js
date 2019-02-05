const Solver = function() {
  this.field = [];
};

Solver.prototype.solveField = function(newField) {
  this.field = newField;
  this.scanField();
  this.printSolution();
  return this.field;
};

Solver.prototype.printSolution = function() {
  console.log(
    this.field.map((row) => {
      return row.join(' ');
    }).join('\n')
  );
}

Solver.prototype.scanField = function() {
  for (var i = 0; i < this.field.length; i++) {
    for (var j = 0; j < this.field[i].length; j++) {
      this.solveBlock(j, i);
    }
  }
};

Solver.prototype.solveBlock = function(x, y) {
  const value = this.field[y][x];
  if (typeof value === 'number') {
    if (value === 0) {
      this.markSurroundingBlanks(x, y, 'C');
    } else {
      const mines = this.countSurrounding(x, y, 'M');
      const blanks = this.countSurrounding(x, y, '?');
      if (value === mines) {
        this.markSurroundingBlanks(x, y, 'C');
      } else if (value === blanks + mines) {
        this.markSurroundingBlanks(x, y, 'M');
      }
    }
  }
};

Solver.prototype.countSurrounding = function(x, y, val) {
  let count = 0;
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      const adjX = x + i;
      const adjY = y + j;
      if ((i !== adjX || j !== adjY) && isInBounds(adjX, this.field[0].length) && isInBounds(adjY, this.field.length)) {
        if (this.field[adjY][adjX] === val) {
          count++;
        }
      }
    }
  }
  return count;
};

Solver.prototype.markSurroundingBlanks = function(x, y, val) {
  for (var i = -1; i < 2; i++) {
    for (var j = -1; j < 2; j++) {
      const adjX = x + i;
      const adjY = y + j;
      if ((i !== adjX || j !== adjY) && isInBounds(adjX, this.field[0].length) && isInBounds(adjY, this.field.length)) {
        if (this.field[adjY][adjX] === '?') {
          this.field[adjY][adjX] = val;
        }
      }
    }
  }
};

Solver.prototype.markMine = function(x, y) {
  this.field[y][x] = 'M';
};

Solver.prototype.markClear = function(x, y) {
  this.field[y][x] = 'C';
};

const isInBounds = function(i, max) {
  return (i > -1 && i < max);
}