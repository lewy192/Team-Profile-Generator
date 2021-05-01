const inquirer = require("inquirer");
validateInput = (input) => {
    // input ? true : "dont leave me blank :(";
    if (input) {
        return true;
    }
    return "dont leave me blank :(";
};
class Employee {
    constructor(id, email, name) {
        // content of card
        this.id = id;
        this.email = email;
        // title of card
        this.name = this.getName();
    }

    getName() {
        inquirer
            .prompt({
                message: "What is the employees name?",
                type: "input",
                name: "employeesName",
                validate: validateInput,
            })
            .then((answer) => (this.name = answer.employeesName));
    }
    getId() {
        inquirer
            .prompt({
                message: "What is the employees Id?",
                type: "input",
                name: "employeesId",
                validate: validateInput,
            })
            .then((answer) => (this.id = answer.employeesId));
    }
    getEmail() {
        inquirer
            .prompt({
                message: "What is the employees email?",
                type: "input",
                ame: "employeesEmail",
                validate: validateInput,
            })
            .then((answer) => (this.email = answer.employeesEmail));
    }
    getRole() {
        return this;
    }
}
