// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your application.',
  },  
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your application.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please describe the usage of your application.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license was utilized for this application',
    choices: ["Apache2.0", "BSD", "MIT", "none"],
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Please provide any instructions for future contributions.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide any test information you would like to include.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Success!'))
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    writeToFile("exREADME.md", generateMarkdown({...response}))
  })
};

// Function call to initialize app
init();
