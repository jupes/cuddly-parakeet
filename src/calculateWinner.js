// Function from React documentation slightly modified (and commented) for readability
export function calculateWinner(squares) {
  // Rather than calculate on the fly if a particular move creates a win state just check against all possible win states
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // loop over all possible win states and see if one matches the current state
  for (let i = 0; i < lines.length; i++) {
    // destructuring used to create variables that point to whatever is in the squares array at the asked for index
    const [index1, index2, index3] = lines[i];
    if (
      squares[index1] &&
      squares[index1] === squares[index2] &&
      squares[index1] === squares[index3]
    ) {
      // if we arrive here there is a met win condition so just return the X or O, whichever met the condition
      return squares[index1];
    }
  }
  // no win condition found
  return null;
}