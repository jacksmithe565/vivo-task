/* filename: complex_program.js */

// This is a complex and elaborate JavaScript program that performs advanced math calculations,
// involving complex numbers and matrices, while also showcasing professional coding techniques.

// Importing required libraries and modules
const Complex = require('complex.js');
const math = require('mathjs');

// Defining a function to multiply two complex numbers
function multiplyComplexNumbers(a, b) {
  const result = Complex(a).mul(b);
  return result.toString();
}

// Defining a function to find the determinant of a matrix
function findDeterminant(matrix) {
  const result = math.det(matrix);
  return result.toExponential(3);
}

// Generating a random complex number between -10 and 10
function generateRandomComplexNumber() {
  const real = Math.random() * 20 - 10;
  const imag = Math.random() * 20 - 10;
  return new Complex(real, imag);
}

// Creating a matrix of random complex numbers
const matrix = math.matrix();
for (let i = 0; i < 5; i++) {
  const row = [];
  for (let j = 0; j < 5; j++) {
    const number = generateRandomComplexNumber();
    row.push(number.toString());
  }
  matrix.push(row);
}

// Printing the generated matrix
console.log('Generated Matrix:');
console.log(matrix.toString());

// Finding the determinant of the matrix
const determinant = findDeterminant(matrix);
console.log('Determinant of the Matrix:');
console.log(determinant);

// Creating two random complex numbers
const complex1 = generateRandomComplexNumber();
const complex2 = generateRandomComplexNumber();

// Multiplying the two complex numbers
const product = multiplyComplexNumbers(complex1, complex2);
console.log('Product of Complex Numbers:');
console.log(product);

// Performing advanced mathematical operations using math.js library
const expression = math.expression.compile('5 * sin(3x) + sqrt(4y) + cos(z)');
const result = expression.evaluate({ x: 2, y: 3, z: Math.PI / 4 });
console.log('Result of Advanced Math Operations:');
console.log(result);

// This is a complex and elaborate JavaScript program that performs advanced computations,
// showcases professional coding techniques, and utilizes third-party libraries for enhanced functionality.
// It generates random complex numbers, creates matrices, finds determinants, performs complex number multiplication,
// and showcases advanced mathematical operations.