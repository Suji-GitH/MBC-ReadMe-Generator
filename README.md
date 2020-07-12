# MBC-ReadMe-Generator

## Application & Repository Link

###### [Application Walkthrough]()

###### [Sample README.md](https://github.com/Suji-GitH/MBC-ReadMe-Generator)

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
<img src = "./assets/img/Screenshots/LandingPage.jpg">

About
<img src = "./assets/img/Screenshots/About.jpg">

Portfolio
<img src = "./assets/img/Screenshots/Portfolio.jpg">

Portfolio Project
<img src = "./assets/img/Screenshots/PortfolioProject.jpg">

Contact
<img src = "./assets/img/Screenshots/Contact.jpg">

Portfolio - Mobile View <br>
<img src = "./assets/img/Screenshots/MobileView.jpg">

## Credits

- npm inquirer 
- node.js

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