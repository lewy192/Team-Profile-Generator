const Employee = require("./employee");
const inquirer = require("inquirer");
class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }
    getSchool() {}
    getRole() {
        return this;
    }
}
