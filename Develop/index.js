// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'What was your motivation?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter your motivation!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter why you built this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'how',
        message: 'What problem does it solve?',
        validate: howInput => {
            if (howInput) {
                return true;
            } else {
                console.log('Please enter what problem your project solves!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter the steps required to install your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter instructions and examples for use!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT', 'Apache', 'GPL', 'none']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to add other contributers?',
        default: false
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Who contributed to this project?',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributersInput => {
            if (contributersInput) {
                return true;
            } else {
                console.log('Please enter who contributed to this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests did you run?',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter what tests you ran!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/generated-README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((readmeData) => {
      return readmeData;
    });

}

// Function call to initialize app
init()
.then(data => {
    console.log(data)
    return generateMarkdown(data);
})
.then(markdown => {
    return writeToFile(markdown);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
});
