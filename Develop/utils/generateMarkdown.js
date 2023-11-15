// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license == 'Apache') {
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    } else if (license == 'GPL') {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else {
        return ''
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none') {
    return (
      `\n* [License](#license)\n`
    )
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none') {
    return (
      `## License
      This project is licensed under the ${license} license.`
    )
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

   ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 

  ## Description
  ${data.what}

  ${data.why}

  ${data.how}
 

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributers}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me at 
  ${data.email}
  or visit my GitHub page at
  [GitHub](https://github.com/${data.githubUsername})

`;
}

module.exports = generateMarkdown;
