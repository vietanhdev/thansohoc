var PYTHAGOREAN = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 1,
  'k': 2,
  'l': 3,
  'm': 4,
  'n': 5,
  'o': 6,
  'p': 7,
  'q': 8,
  'r': 9,
  's': 1,
  't': 2,
  'u': 3,
  'v': 4,
  'w': 5,
  'x': 6,
  'y': 7,
  'z': 8
};


// Set up HTML elements
var input = document.querySelector('input');
var button = document.querySelector('button');
var result = document.querySelector('.result');

// Metode
function calculate() {
  // Empty HTML
  result.innerHTML = '';

  // Print results
  printResult(PYTHAGOREAN, 'Pythagoras');
}

// Print list
function printResult(list, text) {
  var letters = input.value.toLowerCase().replace(/[^0-9a-z]/g, '').split('');
  var sum = 0,
    l, i;
  for (i = 0; i < letters.length; i++) {
    // Extract letter from array
    l = letters[i];

    // Lookup or convert letter and add to sum
    sum += list[l] || parseInt(l);
  }

  // Write the sum to screen
  result.innerHTML += '<div class="result-text">' + text + ' ' + sum + '</div>';
}