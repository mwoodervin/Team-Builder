const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

inquirer
  .prompt({
    type: 'list',
    name: 'chocolate',
    message: "What's your favorite chocolate?",
    choices: ['Mars', 'Oh Henry', 'Hershey'],
  })
  .then((answer) => {
      if(answer.chocolate === "Mars") {
    inquirer.prompt({
      type: 'list',
      name: 'beverage',
      message: 'And your favorite beverage?',
      choices: ['Pepsi', 'Coke', '7up', 'Mountain Dew', 'Red Bull'],
    });
    } else if (answer.chocolate === "Oh Henry"){
        inquirer.prompt({
            type: 'list',
            name: 'howmany',
            message: "How many would you like?",
            choices: [1, 2, 3],
        })
    } else {
        console.log("Guess you like Hershey's. Yuck!");
    }
  });





// var choices = Array.apply(0, new Array(26)).map((x, y) => String.fromCharCode(y + 65));
// var choices = [];
// choices.push('Multiline option 1\n  super cool feature \n  more lines');
// choices.push('Multiline option 2\n  super cool feature \n  more lines');
// choices.push('Multiline option 3\n  super cool feature \n  more lines');
// choices.push('Multiline option 4\n  super cool feature \n  more lines');
// choices.push('Multiline option 5\n  super cool feature \n  more lines');
// choices.push(new inquirer.Separator());
// choices.push('Multiline option \n  super cool feature');
// choices.push({
//   name:
//     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
//   value: 'foo',
//   short: 'The long option',
// });

// inquirer
//   .prompt([
//     {
//       type: 'list',
//       loop: false,
//       name: 'letter',
//       message: "What's your favorite letter?",
//       choices: choices,
//     },
//     {
//       type: 'checkbox',
//       name: 'name',
//       message: 'Select the letter contained in your name:',
//       choices: choices,
//     },
//   ])
//   .then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });
