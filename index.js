const fs = require("fs");
const inquirer = require("inquirer");

const promptUser = async () => {

    const userResponse = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub Username?",
            name: "githubUsername"
    
        },
        {
            type: "input",
            message: "What is your email?",
            name: "userEmail"
    
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTitle"
    
        },
        {
            type: "input",
            message: "What is your Project Description?",
            name: "projectDescription"
    
        },
        {
            type: "input",
            message: "What are the installation steps for your project?",
            name: "installation"
    
        },
        {
            type: "input",
            message: "Provide Project usage?",
            name: "usage"
    
        },
        {
            type: "list",
            message: "Choose an license",
            choices: ["GPL", "EPL", "MIT", "MPL"],
            name: "license"
    
        },
        {
            type: "input",
            message: "Who are the contributors?",
            name: "contributing"
    
        },
        {
            type: "input",
            message: "List the test cases for the Project",
            name: "tests"
    
        },
        {
            type: "input",
            message: "How can they contact you for any inquiries?",
            name: "questions"
    
        }
    ]);

    const githubUsername = userResponse.githubUsername;
    const userEmail = userResponse.userEmail;
    const projectTitle = userResponse.projectTitle;
    const projectDescription = userResponse.projectDescription;
    const installation = userResponse.installation;
    const usage = userResponse.usage;
    const license = userResponse.license;
    const contributors = userResponse.contributing;
    const tests = userResponse.tests;
    const questions = userResponse.questions;
    let userLicense = "";
    let githubLink = `https://github.com/${githubUsername}`;

    function licenseBadge(licenseType) {
        switch (licenseType) {
            case "GPL":
                return userLicense = `[<img src = "https://img.shields.io/badge/license-GPL-red">](https://opensource.org/licenses/gpl-license)`;
            case "EPL":
                return userLicense = `[<img src = "https://img.shields.io/badge/license-EPL-blue">](https://opensource.org/licenses/entessa.php)`;
            case "MIT":
                return userLicense = `[<img src = "https://img.shields.io/badge/license-MIT-yellow">](https://opensource.org/licenses/MIT)`;
            case "MPL":
                return userLicense = `[<img src = "https://img.shields.io/badge/license-MPL-green">](https://opensource.org/licenses/MPL-2.0)`;
        
        }
    };

    licenseBadge(license);

    const result =
(`${userLicense}

# ${projectTitle}

## Content
- [Project Description](#Project-Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Project Description
${projectDescription}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributors}

## Tests
${tests}

## Questions
${questions}
GitHub - [${githubUsername}](${githubLink})
Email - ${userEmail}
`);

    const printResult = fs.writeFile("./assets/SampleReadMe/README.md", result, function() {
            console.log("Success!");
        }
    );

};

promptUser();