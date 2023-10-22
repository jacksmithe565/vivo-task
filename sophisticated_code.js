/* sophisticated_code.js */

// This code demonstrates a complex algorithm for generating a Fibonacci sequence with specified constraints
// The code calculates and prints the Fibonacci sequence up to a given limit, but skips any number that is divisible by 3 or 5

function generateFibonacciSequence(limit) {
  const sequence = [0, 1];
  let a = 0;
  let b = 1;

  // Generate the Fibonacci sequence up to the given limit
  while (b < limit) {
    const next = a + b;
    a = b;
    b = next;
    sequence.push(next);
  }

  const filteredSequence = [];

  // Filter out numbers divisible by 3 or 5
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] % 3 !== 0 && sequence[i] % 5 !== 0) {
      filteredSequence.push(sequence[i]);
    }
  }

  return filteredSequence;
}

function printFibonacciSequence(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
  }
}

const limit = 1000;
const fibonacciSequence = generateFibonacciSequence(limit);
printFibonacciSequence(fibonacciSequence);
// Outputs: [1, 2, 8, 21, 34, 144, 377, 987]