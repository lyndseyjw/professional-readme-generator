const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please enter a description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter detailed installation instructions for your users.',
      name: 'installation',
    },
    {
        type: 'input',
      message: 'Enter usage instructions.',
      name: 'usage',
    },
    {
        type: 'input',
      message: 'Enter contribution guidelines.',
      name: 'contributing',
    },
    {
        type: 'input',
      message: 'Enter test instructions.',
      name: 'tests',
    },
    {
        type: 'list',
      message: 'Choose a license for your project.',
      name: 'license',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'MIT', 'ISC'],
    },
    {
        type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
        type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  .then((data) => {
    console.log(data);
    var md = `# ${data.title}

## ${data.description}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[Tests](#tests)
[License](#license)
[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the terms of the ${data.license} License.

## Questions
[Github Profile](https://www.github.com/${data.github})
If you have any questions, you may contact me at [${data.email}](mailto:${data.email})`

    fs.writeFile('readme.md', md, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });