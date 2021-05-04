const Employee = require("./employee");
const inquirer = require("inquirer");
class Intern extends Employee {
    constructor(id, email, name, school) {
        super(id, email, name);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this;
    }
}
module.exports = Intern;
