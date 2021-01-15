// Include packages needed for this application;
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// Create an array of questions for user input
inquirer
    .prompt([
{
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'input',
    name: 'title',
    message: 'What is the title?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE'],
},
{
    type: 'input',
    name: 'installation', 
    message: 'What command should be run to install dependencies?',
},
{
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
},
{
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
},
{
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
}])

// Create a function to write README file
// getting input back
.then((answers) => {
    console.log(answers);
    const userInput = generateMarkdown(answers);
//    actually write the file
    fs.writeFile("ReadMe.md", userInput, (err) =>
    err ? console.log(err) : console.log('Success!')
);
})



// Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
