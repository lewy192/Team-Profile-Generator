const Employee = require("./employee");
const inquirer = require("inquirer");
class Manager extends Employee {
    
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }
}