const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeQuestions = [
  {
    type: "list",
    name: "role",
    message: "Please select an employee role",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "name",
    message: "Please enter the employee's name",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the employee's id",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the employee's email",
  },
  {
    type: "input",
    name: "office",
    message: "Please enter the employee's office phone number",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter the employee's github",
  },
  {
    type: "input",
    name: "school",
    message: "Please enter the name of the employee's school",
  },
];

employeeQuestions();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
