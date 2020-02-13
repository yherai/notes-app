// Import fs module from node
const fs = require('fs');

// Write a test in notes.txt
fs.writeFileSync('notes.txt', 'My name is Jorge.');

// Challenge: Append a message to notes.txt file using appendFileSync method
fs.appendFileSync('notes.txt', ' And this is the appended message');
