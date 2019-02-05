const solver = new Solver;

$('#solve').click((e) => {
  const input = $('#input').text();
  const field = convertToArray(input);
  const solution = solver.solveField(field);
  console.log(solution);
});