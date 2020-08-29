const questions = [
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
]

module.exports = questions;