const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of this project?",
            default: "Readme Generator"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of the application.",
            default: "This application creates a Readme file template with basic headings and content."
        },
        {
            type: "input",
            name: "installation",
            message: "Enter instructions for installing your application.",
            default: "node index.js"
        },
        {
            type: "input",
            name: "usage",
            message: "Enter instructions for using your application.",
            default: "WHEN I want to create a new Readme file, THEN ..."
        },
        {
            type: "list",
            name: "license",
            message: "What licence are you using for this application?",
            choices: ["MIT", "Apache 2.0", "GPL v3", "Mozilla", "BSD 3"], 
            default: "MIT"
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter instructions for contributing to this file.",
            default: "If you are intereted in contributing to this project ..."
        },
        {
            type: "input",
            name: "testing",
            message: "Enter instructions for testing this application.",
            default: "Test information here"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?",
            default: "mwoodervin"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address. (Contact for questions.)",
            default: "mwoodervin@gmail.com"
        },

    ]);
}

promptUser();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
