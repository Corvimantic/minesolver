const convertToArray = function(string) {
  const rows = string.trim().split('\n');
  const field = rows.map((row) => {
    return processNumTiles(row.trim().split(' '));
  });
  return field;
};

const processNumTiles = function(row) {
  const validNums = {
    '0': true, '1': true, '2': true, '3': true, '4': true,
    '5': true, '6': true, '7': true, '8': true,
  };
  return row.map((tile) => {
    if (validNums[tile]) {
      return Number(tile);
    }
    return tile;
  });
}

const isValidArray = function(array) {
  if (!Array.isArray(array)) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array)) {
      return false;
    }
    if (array[i].length !== array[0].length) {
      return false;
    }
    for (var j = 0; j < array[i].length; j++) {
      if (!isValidTile(array[i][j])) {
        return false;
      }
    }
  }
  return true;
};

const isValidTile = function(val) {
  const validTiles = {
    'M': true,
    '?': true,
  };
  return (validTiles[val] || typeof val === 'number');
};