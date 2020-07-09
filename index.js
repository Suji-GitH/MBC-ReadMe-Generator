const fs = require("fs");
const inquirer = require("inquirer");


const promptUser = async () => {

    const userResponse = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTitle"
    
        },
        {
            type: "input",
            message: "What is your Project Description?",
            name: "projectDescription"
    
        }
    ]);

    const projectTitle = userResponse.projectTitle;
    const projectDescription = userResponse.projectDescription;
  
    const result =
    (`
    ## Project Title
    ${projectTitle}

    ## Project Description
    ${projectDescription}
    `);

    const printResult = fs.writeFile("./SampleReadMe/README.md", result, function() {

            console.log("Success!");

        }
    );

};


promptUser();


// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions