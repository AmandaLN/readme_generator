// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  
  if (license === 'APACHE 2.0' ) license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
  if (license === 'MIT' ) license ='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  if (license === 'GPL 3.0' ) license ='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  if (license === 'BSD 3' ) license ='[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
  if (license === 'NONE' ) license ='';

  return license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

const renderLicenseLink = (license) => {
  if (license === 'APACHE 2.0') license = '(https://opensource.org/licenses/Apache-2.0)';
  if (license === 'MIT') license = '(https://opensource.org/licenses/MIT)';
  if (license === 'GPL 3.0') license = '(https://www.gnu.org/licenses/gpl-3.0)';
  if (license === 'BSD 3') license = '(https://opensource.org/licenses/BSD-3-Clause)';
  if (license === 'NONE' ) license ='';

  return license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  return `## License ${license}`;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
 const liceSection = renderLicenseSection(data.license);
 const liceBadge = renderLicenseBadge(data.license);
 const liceLink = renderLicenseLink(data.license);


  
  
  return `# ${data.title}
  ${liceBadge}${liceLink} 


  ## Description
  ${data.description}



 ## Table of Contents 
​
* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributing](#contributing)
​
* [Tests](#tests)
​
* [Questions](#questions)


​
## Installation
​
${data.installation}


​
## Usage
​${data.usage}

​
${liceSection}

  
 ## Contributing
​ ${data.contributing}



## Tests
${data.test}




## Questions
​
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `;

}

module.exports = generateMarkdown;
