const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const listEngTeam = [];

const promptEmployeeQs = () => 
  inquirer.prompt([
    {
      type: "input",
      name: "manager_name",
      message: "Hello, Manager. Please enter your name to log in"
    },
  {
    type: "list",
    name: "role",
    message: "Which role would you like to add to your team?",
    choices: ["Engineer", "Intern"]
  },
  {
    type: "input",
    name: "name",
    message: "Please enter their name",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter their id"
  },
  {
    type: "input",
    name: "email",
    message: "Please enter their email"
  },
  {
    type: "input",
    name: "office",
    message: "Please enter the employee's office phone number",
    when: (answer) => answer.manager_name === true
  },
  {
    type: "input",
    name: "github",
    message: "Please enter the employee's github",
    when: (answer) => answer.role === "Engineer"
  },
  {
    type: "input",
    name: "school",
    message: "Please enter the name of the employee's school",
    when: (answer) => answer.role === "Intern"
  },
  {
    type: "confirm",
    name: "addAnotherEmployee",
    message: "Would you like to add another employee?"
  }
]);

const init = () => {
  promptEmployeeQs()
  .then((answer) => {
  if (answer.role === "Manager"){

    const mgrRole = new Manager (answer.name, answer.id, answer.email, answer.officeNumber);
    
    listEngTeam.push(mgrRole);

  } else if (answer.role === "Engineer"){

    const engRole = new Engineer (answer.name, answer.id, answer.email, answer.github);
    
    listEngTeam.push(engRole);

  } else if (answer.role === "Intern") {

    const internRole = new Intern (answer.name, answer.id, answer.email, answer.school)

    listEngTeam.push(internRole);

  } const html = render(listEngTeam);
      fs.writeFile(outputPath, html, (error) => {
        if (error) {
          throw error
        }
      });
  });
};

init();
