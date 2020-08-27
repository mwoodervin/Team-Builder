const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function welcomeUser() {
    console.log ("Welcome to your Team Builder App. To create your team, answer the prompts about each employee.");
    promptUser();
};

// Code using inquirer to gather information about the development team members,
// ????????and to create objects for each team member (using the correct classes as blueprints!)????????

function promptUser() {    
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter employee name, first and last.",
            default: "Mary W. Ervin"
        },
        {
            type: "list",
            name: "role",
            message: "Employee title: ",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "id",
            message: "Employee ID:",
            default: "1"
        },
        {
            type: "input",
            name: "email",
            message: "Employee's email address:",
            default: "mwoodervin@gmail.com"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter office number:",
            when: (answers) => answers.role === "Manager"
        },
        {
            type: "input",
            name: "github",
            message: "Enter githubID:",
            when: (answers) => answers.role === "Engineer"
        } , 
        {
            type: "input",
            name: "school",
            message: "Enter name of school:",
            when: (answers) => answers.role === "Intern"
        },
        {
            type: "confirm",
            name: "continue",
            message: "Would you like to enter another employee?"
        }             
    ])
     
    }

    
// });

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// Call the functions here
welcomeUser();





// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
