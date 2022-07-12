const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require("util");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/templateHtml"); 

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamstr = ``;

// calls all the functions in one order
async function main() {
     try {
          await prompt()
          // for i to teamArray.length  => 

          for (let i = 0; i < teamArray.length; i++) {
               //template literal=``
               teamstr = teamstr + html.genrateCard(teamArray[i]);
          }

          let finalHTML = html.generateHtml(teamstr)

          //call generate function to generate the html template literal

          writeFileAsync("./dist/index.html", finalHTML)

          //console.log(teamstr)

     } catch (err) {
          return console.log(err);
     }

};

async function prompt() {
     let responseDone = "";
     let response = "";
     // prompt to collect input and use do while atleast one and do it number of times depending on the while condition
     do {
          try {
                await inquirer.prompt([
                    {
                         type: "input",
                         name: "name",
                         message: "Employee's name: "
                    },
                    {
                         type: "input",
                         name: "id",
                         message: "Employee's ID: "
                    },
                    {
                         type: "input",
                         name: "email",
                         message: "Employee's email address: "
                    },
                    {
                         type: "list",
                         name: "role",
                         message: "employee's role:",
                         choices: [
                              "Engineer",
                              "Intern",
                              "Manager"
                         ]
                    }
               ]);

               let response2 = ""
               // if else statement

               if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "Employee's github username?:",
                    }, ]);
                    //store the object and push
                    const engineer = new Engineer(response.name, response.id, response.email, response2.x);
                    teamArray.push(engineer);
               } else if (response.role === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What school is the employee attending?:",
                    }, ]);
                    //store the object and push
                    const intern = new Intern(response.name, response.id, response.email, response2.x);
                    teamArray.push(intern);
               } else if (response.role === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "Employee's office number:",
                    }, ]);
                    //store the object and push
                    const manager = new Manager(response.name, response.id, response.email, response2.x);
                    teamArray.push(manager);
               }
          } catch (err) {
               return console.log(err);
          }
          console.log(teamArray)
          //need to prompt do you want to continue

          responseDone = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you want to continue?: ",
               choices: [
                    "Yes",
                    "No"
               ]
          }, ]);

          // console.log(responseDone.choices);
          //the while parameter is saying continue running the code if the user selects "yes"
     } while (responseDone.finish === "Yes");
}
//call function to run application on the server
main();
