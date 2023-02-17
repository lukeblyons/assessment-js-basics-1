/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is version controll system that is used to trackl changes in code in a given file. This allows us to upload to a codebase and save the changes as commits to track the code's history."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "Github is a cloud based platform that acts as a storage space for created repositories. This allows users to save, share and copy code files. Github can also be used for open source projects and to collaborate with other developers."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "'git init' creates a new '.git' subdirectory in the current working directory which allows the directory to be tracked by git. It is only ran once in the repository and makes all the other git commands possible."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = "Git clone is a command that allows the user to create a copy of an existing git repository on the users machine. This allows the user to have a local copy of a remote repository that they can then work on and push back to the remote repository."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "Git status is used in version control to see the current state of a repository. It is not necessary, but allows you to see what changes have been made and what commits are ready to be pushed."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "Git add is a command used to add changes that were made in a file to the holiding area that will be a part of the next commit."

let gitAddCode = "git add -A"

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = "Git commit is a command that records of a file to a repository. Within the git command the user will write a message showing the changes made or the commit version, which is up to the user."

let gitCommitCode = 'git commit -m "initial commit"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = "Git push is a command used to push a commit to an existing repository"