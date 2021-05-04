const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Choice = require("inquirer/lib/objects/choice");
const fs = require("fs");
validateInput = (input) => {
    // input ? true : "dont leave me blank :(";
    if (input) {
        return true;
    }
    return "dont leave me blank :(";
};

const engis = [];
const interns = [];

const theTeam = [0, ...engis, ...interns];

// when the program starts it creates a new manager object and assigns its properties.

const employeeQuestions = [
    {
        message: "What is the name of the employee?",
        type: "input",
        name: "employeesName",
        validate: validateInput,
    },
    {
        message: "What is the email of the employee?",
        type: "input",
        name: "employeesEmail",
        validate: validateInput,
    },
    {
        message: "What is the id of the employee?",
        type: "input",
        name: "employeesId",
        validate: validateInput,
    },
];

createNewTeam = () => {
    inquirer
        .prompt([
            ...employeeQuestions,
            {
                message: "What is the Manager's office number?",
                type: "input",
                name: "officeNumber",
                validate: validateInput,
            },
        ])
        .then((answers) => {
            const bossMan = new Manager(
                answers.employeesId,
                answers.employeesName,
                answers.employeesEmail,
                answers.officeNumber
            );
            theTeam[0] = bossMan;
            newTeamMember();
        });
};

newTeamMember = () => {
    inquirer
        .prompt([
            {
                message: "Select an Employee type to add to the team:",
                type: "list",
                choices: ["Engineer", "Intern", "Complete Team"],
                name: "managersChoice",
            },
        ])
        .then((answer) => {
            const choice = answer.managerChoice;
            switch (choice) {
                case "Engineer":
                    inquirer
                        .prompt([
                            employeeQuestions,
                            {
                                message:
                                    "What is the Engineers Github Username?",
                                type: "input",
                                name: "employeesGithub",
                                validate: validateInput,
                            },
                        ])
                        .then((answers) => {
                            const newEngineer = new Engineer(
                                answers.employeesId,
                                answers.employeesName,
                                answers.employeesEmail,
                                answers.employeesGithub
                            );
                            engis.push(newEngineer);
                            newTeamMember();
                        });
                    break;
                case "Intern":
                    inquirer
                        .prompt([
                            employeeQuestions,
                            {
                                message: "What school did the intern go to?",
                                type: "input",
                                name: "internSchool",
                                validate: validateInput,
                            },
                        ])
                        .then((answers) => {
                            const newIntern = new Intern(
                                answers.employeesId,
                                answers.employeesName,
                                answers.employeesEmail,
                                answers.internSchool
                            );
                            interns.push(newIntern);
                            newTeamMember();
                        });
                    break;
                case "Complete Team":
                    buildTeam(theTeam);
                    break;
                default:
                    newTeamMember();
                    break;
            }
        });
};

buildTeam = (teamArray) => {
    // build DA TEAM
    // call generate html function
};

// TODO: break ALL case
