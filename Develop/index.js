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
};

// Gene
const generateLicense = (l) => {
    if (l == "Unlicense")
    return "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code."
    else if (l == "MIT License")
    return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    else if (l == "Mozilla Public License")
    return "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
    else if (l == "GNU AGPLv3")
    return "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available."
    return l  
}

const licenseBadge = (l) => {
    if (l == "Unlicense")
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    else if (l == "MIT License")
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    else if (l == "Mozilla Public License")
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    else if (l == "GNU AGPLv3")
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    return l  
}

// TODO: Create a function to write README file
const generateREADME = ({title, description, instruction, information, guidelines, test, license, github, email }) =>
`
# ${title}   ${licenseBadge(license)}

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
#### ${license}:
${generateLicense(license)}

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


