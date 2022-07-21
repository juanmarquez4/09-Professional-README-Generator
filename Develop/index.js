// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of the project?'
        },
        {
            type: 'input',
            name: 'instruction',
            message: 'What are the instructions of the project?'
        },
        {
            type: 'input',
            name: 'information',
            message: 'What are the usage information of the project?'
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What are the contribution guidelines of the project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions of the project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the License for this project?',
            choices: ["Unlicense","MIT License","Mozilla Public License","GNU AGPLv3"]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email'
        },
    ])
    .then((response) =>
    console.log(response.license)
    )
};

// TODO: Create a function to write README file
const generateREADME = ({title, description, instruction, information, guidelines, test, license, github, email }) =>
`
# ${title}

## Table of Contents
1. [Description](#description)
2. [Instalation](#instalation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Testing](#testing)
7. [Questions](#questions)

### Description
${description}

### Instalation
${instruction}

### Usage
${information}

### License
${license}

### Contributing:
${guidelines}

### Testing
${test}

### Questions:
For additional questions about the project please follow the link to GitHub profile or send an email
#### GitHub Username:
[${github}](https://github.com/juanmarquez4/09-Professional-README-Generator)
#### email:
${email}
`;

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
    .then(() => console.log('Succesfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();


