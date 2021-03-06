# MBC-ReadMe-Generator

## Application & Repository Link

###### [Application Walkthrough](https://github.com/Suji-GitH/MBC-ReadMe-Generator/tree/master/assets/ScreenCapture/ApplicationDemo.gif)

###### [Sample README.md](https://github.com/Suji-GitH/MBC-ReadMe-Generator/tree/master/assets/SampleReadMe)

###### [Repository Link](https://github.com/Suji-GitH/MBC-ReadMe-Generator)

## Content
- [Overview](#Overview)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Application Screens](#Application-Screens)
- [Credits](#Credits)
- [Testing](#Testing)

## Overview

```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```

## Acceptance Criteria

* The generated README includes the following sections: 

  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

* The generated README includes 1 badge that's specific to the repository.

## Application-Screens

###### App Screenshots

Landing Page
<img src = "./assets/Screenshots/FilePath.jpg">

About
<img src = "./assets/Screenshots/Initiate.jpg">

Portfolio
<img src = "./assets/Screenshots/Prompt.jpg">

## Credits

- npm inquirer 
- node.js
- https://opensource.org/
- https://shields.io/

## Testing

```
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
