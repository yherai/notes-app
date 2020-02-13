// Import utils.js file
const add = require('./utils.js');

const sum = add(4, -2);

console.log(sum);

// Challenge: Define and use a function in a new file
const getNotes = require('./notes.js');

console.log(getNotes());
