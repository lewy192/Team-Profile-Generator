class Example {
    constructor(id) {
        this.id = this.getId();
    }
    getId() {
        inquirer
            .prompt({
                message: "Enter id?",
                type: "input",
                name: "employeesId",
            })
            .then((answer) => (this.id = answer.employeesId));
    }
}

const testExample = new Example();
console.log(testExample.id);

const employeeQuestions = [
    {
        message: "What is the name of the employee?",
        type: "input",
        name: "employeesName",
        validate: validateInput,
    },
    {
        message: "What is the id of the employee?",
        type: "input",
        name: "employeesId",
        validate: validateInput,
    },
    {
        message: "What is the email of the employee?",
        type: "input",
        name: "employeesEmail",
        validate: validateInput,
    },
];

const managerQuestions = [
    {
        message: "What is the Manager's office number?",
        type: "input",
        name: "managersOfficeNo",
        validate: validateInput,
    },
    ...employeeQuestions,
];

const engineerQuestions = [
    {
        message: "What is the Engineers Github Username?",
        type: "input",
        name: "employeesGithub",
        validate: validateInput,
    },
    ...employeeQuestions,
];

const internQuestions = [
    {
        message: "What school did the intern go to?",
        type: "input",
        name: "internSchool",
        validate: validateInput,
    },
    ...employeeQuestions,
];
