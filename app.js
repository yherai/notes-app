const getNotes = require('./notes.js');

console.log(getNotes());

// Challenge: Use chalk library in the project
// Bonus: Make text blue, bold and invert
const chalk = require('chalk');

console.log(chalk.green('Challenge Success!'));
console.log(chalk.blue.bold.inverse('Bonus Success!'));
