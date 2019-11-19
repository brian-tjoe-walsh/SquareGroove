const Validator = require('validator');

module.exports = function validateGridInput(data) {
  let errors = {};
  let grid = JSON.parse(data.grid);
  // debugger

  data.grid = Array.isArray(grid) ? grid : '';

  if (data.grid.length !== 16) {
    errors.grid = 'Grid is not correct length (16 bars)';
  }

  for (let i = 0; i < data.grid.length; i++) {
    if (data.grid[i].length !== 15) {
      errors.grid = `Rows in Grid are not of adequate length`;
      break;
    }

    for (let j = 0; j < data.grid[i].length; j++) {
      if (!(data.grid[i][j] === 1 || data.grid[i][j] === 0)) {
        errors.grid = `Grid is populated with invalid elements`;
        break;
      }
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
