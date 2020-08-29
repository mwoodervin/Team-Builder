// Require necessary files and resources
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { ENGINE_METHOD_RSA } = require("constants");

// promisify writeFile
const writetoFile = util.promisify(fs.writeFile);

// declare global variables
// let employees = [];
const managers = [];
const interns = [];
const engineers = [];
let isManagerPicked = false;

// Opening statement/introduction to the application
console.log ("\n Welcome to your Team Builder App. To create your team, answer the prompts about each employee.\n");

// function to ask questions using Inquire
function promptUser() {    
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter employee name, first and last.",
        },
        {
            type: "list",
            name: "role",
            message: "Employee title: ",
            choices: isManagerPicked ? ["Engineer", "Intern"] : ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "id",
            message: "Employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Employee's email address:",
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
    ]);
}

// Async function to create objects for each employee using input from Inquirer questions
async function init() {
    try{
        const answer = await promptUser();
        if (answer.role === "Manager") {
            managers.push(new Manager(answer.name, answer.id, answer.email, answer.officeNumber));
            isManagerPicked = true;
        }
        else if (answer.role === "Engineer") {
            engineers.push(new Engineer(answer.name, answer.id, answer.email, answer.github));
        }
        else {
            interns.push(new Intern(answer.name, answer.id, answer.email, answer.school));
        }
        // console.log(answer.continue);
        if (answer.continue) {
            init();
        }
        else {
            console.log("Finished entering employees. Your team has been created.");
                const htmlFile = render([...managers,...engineers,...interns]);
        
                await writetoFile("./output/index.html", htmlFile);
        }
    }
    catch(err) {
        console.log(err)
    }
}

// Call function to start process
init();
