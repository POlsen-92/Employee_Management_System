  # Employee Management System
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Description
  
This project utilizes MySQL2 and Inquirer to provide an interactive database for companies looking to track their employees. The interactiveness is gained by being able to add departments, roles and employees through command line prompts. Employees will be automatically attached to certain departments and salaries once a role has been chosen for them and they can also be updated. 
  
  ## Table Of Contents
  
  - [Installation and Usage](#installation/usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Credits](#credits)
  - [Questions](#questions?)
  
  ## Installation/Usage
This project requires the use of a number of npms which are listed as dependencies so upon loading one must type "npm init" and then "npm i" and ensure that the Inquirer, MySQL2 and Console.Table npms are all downloaded for use through My Visual Studio Code. 

The next thing that must be done is create the database. To do that a user must travel to the schema.sql file and enter into mysql via the integrated terminal and run the "source schema.sql" command. If the user wants to view the functionality of the program they can also seed the database by running "source seeds.sql"

To begin the application a user must enter into the command line and type "node index.js" this will bring up a friendly "Welcome to Our Company". If the User seeded the database they can go through and view departments, roles, employees and the like with the arrow key and enter button. If they didn't these options will simply come up with empty arrays. 

The other options allow a user to add or delete Departments, Roles and Employees. When creating an employee they may or may not have a manager so a user can select "None" or one of the other employees. Once an employee has been created they can be updated to alter either their role or their manager. Some additional features of the app is to view employees by their manager and by their department. 
  
  Follow This Link to See The [Walk-Through Video](https://drive.google.com/file/d/1FAQb3y-zzi9s9EsaU51AunxMBQ6vaDiF/view?usp=sharing)

  ![ScreenShot of My Program](./assets/screenshot_1.png)

  ## Contributing
  
  ### Contributor Covenant Code of Conduct
  
  #### Our Pledge
  
  We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status,
  nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.
  We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
  
  #### Our Standards
  
  Examples of behavior that contributes to a positive environment for our community include:
  
  * Demonstrating empathy and kindness toward other people
  * Being respectful of differing opinions, viewpoints, and experiences
  * Giving and gracefully accepting constructive feedback
  * Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
  * Focusing on what is best not just for us as individuals, but for the
  overall community
  
  Examples of unacceptable behavior include:
  
  * The use of sexualized language or imagery, and sexual attention or
  advances of any kind
  * Trolling, insulting or derogatory comments, and personal or political attacks
  * Public or private harassment
  * Publishing others??? private information, such as a physical or email
  address, without their explicit permission
  * Other conduct which could reasonably be considered inappropriate in a
  professional setting
  
  #### Enforcement Responsibilities
  
  Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
  Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
  
  #### Scope
  
  This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
  
  #### Enforcement
  
  Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at paige.el.olsen@gmail.com. All complaints will be reviewed and investigated promptly and fairly. All community leaders are obligated to respect the privacy and security of the reporter of any incident.
  
  #### Enforcement Guidelines
  
  Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:
  1. Correction
      - Community Impact: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.
      - Consequence: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.
  2. Warning
      - Community Impact: A violation through a single incident or series of actions.
      - Consequence: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.
  3. Temporary Ban
      - Community Impact: A serious violation of community standards, including sustained inappropriate behavior.
      - Consequence: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.
  4. Permanent Ban
      - Community Impact: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior,  harassment of an individual, or aggression toward or disparagement of classes of individuals.
      - Consequence: A permanent ban from any sort of public interaction within the community.
  
  #### Attribution
  
  This Code of Conduct is adapted from the Contributor Covenant,
  version 2.1, available at
  https://www.contributor-covenant.org/version/2/1/code_of_conduct.html.
  
  Community Impact Guidelines were inspired by Mozilla???s code of conduct enforcement ladder.
  
  For answers to common questions about this code of conduct, see the FAQ at
  https://www.contributor-covenant.org/faq. Translations are available
  at https://www.contributor-covenant.org/translations.
  
  
  ## License
  
  MIT License

    Copyright (c) [2021] [Paige Olsen]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
  
  ## Credits
  Built with [JavaScript](https://www.javascript.com/) and [MySQL](https://www.mysql.com/)

  Run using [Node.js](https://nodejs.org/en/) and [Inquirer](https://www.npmjs.com/package/inquirer)


  Other NPMs Used
  - [MySQL2](https://www.npmjs.com/package/mysql2)
  - [Console.Table](https://www.npmjs.com/package/console.table)

  ## Creator
  
  <img src="./assets/cover_photo.jpg" width="100px"> <br>
  ### Paige Olsen

Contact Me At...

- [Github](https://github.com/POlsen-92)
- [Email](paige.el.olsen@gmail.com)
