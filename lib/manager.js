const Employee = require("./employee");
const inquirer = require("inquirer");
class Manager extends Employee {
    constructor(id, email, name, officeNumber) {
        super(id, email, name);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;
    }
    getRole() {
        return this;
    }
}
module.exports = Manager;
