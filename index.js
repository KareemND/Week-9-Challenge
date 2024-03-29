// TODO: Include packages needed for this application
// inquirer = require('inquirer');
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide list of contributors for your project:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README.md file generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const content = `
    # ${answers.title}
    
    ## Description
    ${answers.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## License
    This project is covered under the ${answers.license} license.
    
    ## Contributing
    ${answers.contributing}
    
    ## Tests
    ${answers.tests}
    
    ## Questions
    If you have any questions or comments, please feel free to contact me via GitHub (${answers.github}) or email (${answers.email}).
        `;
    
        writeToFile('README.md', content);
      });
}

// Function call to initialize app
init();
