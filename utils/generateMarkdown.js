// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache2.0':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD':
      badge = `[![License](https://img.shields.io/badge/License-BSD-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'MIT':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
  } return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `[License](#license)`
  } return ""
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License
    This is license ${license}`
  } return ""
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(data.license)}
  * [Contributions](#contributions)
  * [Test](#test)
  * [Questions](#questions)
   
  ## Installation

  ${data.installation}

  ## Usage
  
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions

  ${data.contributions}

  ## Test

  ${data.test}

  ## Questions

  Feel free to reach out with any questions to:
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
