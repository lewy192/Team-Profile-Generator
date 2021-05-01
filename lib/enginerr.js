const Employee = require("./employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(role, github, id, name, email) {
        super(id, name, email);
        this.role = role;
        this.github = github;
    }
    getGithub() {
        inquirer
            .prompt({
                message: "What is the employees Github UserName?",
                type: "input",
                ame: "employeesGithub",
                validate: validateInput,
            })
            .then((answer) => (this.github = answer.employeesGithub));
    }
    getRole() {
        return this;
    }
}
