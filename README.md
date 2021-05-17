# Installation #
run 'npm install' to generate node_modules

# Help #
node app.js --help

## Add command ##
node app.js add
    --> Failure: required title and body error
node app.js add --title
    --> Failure: required body
node app.js add --body
    --> Failure: required title
node app.js add --title="My title" --body="My body" (title "My Title" is not in the list)
    --> Success: Logs green message "New note added"
node app.js add --title="My title" --body="My body" (already added title "My Title" to list)
    --> Failure: Logs red message "Note title taken!"

## Remove command ##
node app.js remove
    --> Failure: required title
node app.js remove --title="My title" (if title is not in the list of notes)
    --> Failure: Logs red message "No note found"
node app.js remove --title="My title" (if title is in the list of notes)
    --> Success: Logs green message "Note removed"

## List command ##
node app.js list
    --> Sucess: Logs the list of notes titleU

## Read command ##
node app.js read
    --> Failure: required title
node app.js read --title="My title" (if title is not in the list of notes)
    --> Failure: Logs red message "Unable to found note"
node app.js read --title="My title" (if title is in the list of notes)
    --> Success: Logs message with detail of note (title + body)

