const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
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
let theManager = "";

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
                answers.employeesEmail,
                answers.employeesName,
                answers.officeNumber
            );
            theManager = bossMan;
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
            const choice = answer.managersChoice;
            switch (choice) {
                case "Engineer":
                    inquirer
                        .prompt([
                            ...employeeQuestions,
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
                                answers.employeesEmail,
                                answers.employeesName,
                                answers.employeesGithub
                            );
                            engis.push(newEngineer);
                            newTeamMember();
                        });
                    break;
                case "Intern":
                    inquirer
                        .prompt([
                            ...employeeQuestions,
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
                                answers.employeesEmail,
                                answers.employeesName,
                                answers.internSchool
                            );
                            interns.push(newIntern);
                            newTeamMember();
                        });
                    break;
                case "Complete Team":
                    buildTeam([theManager, ...engis, ...interns]);
                    break;
                default:
                    newTeamMember();
                    break;
            }
        });
};

capitaliseString = (string) => {
    return string[0].toUpperCase() + string.slice(1);
};

svgCreator = (typeOfClass) => {};

buildTeam = (teamArray) => {
    // build DA TEAM
    const completedTeamHtmlCards = [];

    teamArray.forEach((employee) => {
        let cardEnd = ``;
        let svgImg = ``;
        switch (employee.constructor.name) {
            case "Intern":
                cardEnd = `
                    <p class="employee-info">School:${capitaliseString(
                        employee.getSchool()
                    )}</p>
                </div>
            </div>
                `;
                svgImg = `<img src="./icons/graduation.svg" alt="Icon of a graduate" class="icon">`;
                break;
            case "Engineer":
                cardEnd = `
                    <p class="employee-info">Github:<a href="${employee.getGithub()}" class="github" target="_blank">${
                    employee.github
                }</a></p>
                </div>
            </div>
            `;
                svgImg = `<img src="./icons/eyeglasses.svg" alt="Icon of a graduate" class="icon">`;
                break;
            case "Manager":
                cardEnd = `<p class="employee-info">Office Number:${employee.getOffice()}</p>
                </div>
            </div>
            `;
                svgImg = `<img src="./icons/coffee.svg" alt="Icon of a graduate" class="icon">`;
                break;
            default:
                cardEnd = `  
                    </div>
                </div>
                `;
        }
        const cardStart = `
        <div class="card">
        <header class="card-header">
            <h1 class="name">${capitaliseString(employee.getName())}</h1>
            <h1 class="role">${svgImg}${employee.constructor.name}</h1>
        </header>
        <div class="content">
            <p class="employee-id">ID:${employee.getId()}</p>
            <p class="emplyee-email">Email:<a href="mailto:${employee.getEmail()}" class="email">${employee.getEmail()}</a></p>
            `;
        const completedCard = cardStart + cardEnd;
        completedTeamHtmlCards.push(completedCard);
    });
    htmlFileCreator(completedTeamHtmlCards);
};

htmlFileCreator = (cardArray) => {
    let basePageHtmlStart = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./dist/css/style.css"/>
            <title>Team Roster</title>
        </head>
        <body>
            <header class="header">
            <h1>My Team</h1>
            </header>
            <div class="card-container">

    `;

    const basePageHtmlEnd = `            
        </div>
    </body>
</html>`;

    cardArray.forEach((card) => {
        basePageHtmlStart += card;
    });
    basePageHtmlStart += basePageHtmlEnd;

    fs.writeFile("./generatedIndex.html", basePageHtmlStart, (err) => {
        if (err) throw err;
        console.log("Your file has been saved as: generatedIndex.html.");
    });
};

init = () => {
    createNewTeam();
};
init();
