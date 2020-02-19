# Installation #
run 'npm install' to generate node_modules

# Help #
node app.js --help

# How to use it #
node app.js --> Execute program without params. All arguments are logged in console

## Add command ##
node app.js add
    --> Failure: required title and body error
node app.js add --title
    --> Failure: required body
node app.js add --body
    --> Failure: required title
node app.js add --title --body
    --> Title:
    --> Body:
node app.js add --title="My title" --body="My body"
    --> Title: My title
    --> Body: My body

## Remove command ##
node app.js remove --> Show a log message 'Removing note!'

## Read command ##
node app.js read --> Show a log message 'Reading a note!'

## List command ##
node app.js list --> Show a log message 'Listing all notes!'
