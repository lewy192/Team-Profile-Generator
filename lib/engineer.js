const Employee = require("./employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(id, email, name, github) {
        super(id, email, name);
        this.github = github;
    }
    getGithub() {
        return `https://github.com/${this.github}`;
    }
    getRole() {
        return this;
    }
}

module.exports = Engineer;
