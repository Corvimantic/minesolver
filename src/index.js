const solver = new Solver;

$('#solve').click((e) => {
  const input = $('#input').val();
  const field = convertToArray(input);
  if (isValidArray(field)) {
    const solution = solver.solveField(field);
    displaySolution(solution);
  } else {
    displayError();
  }
});

const displaySolution = function(solution) {
  const field = convertToText(solution);
  $('#error').hide();
  $('#solution-area').show();
  $('#solution').text(field);
};

const displayError = function() {
  $('#error').show();
  $('#solution-area').hide();
};