const inquirer = require("inquirer");
const Employee = require("./employee");

class Team {
    constructor(TeamName, TeamMembers = []) {
        this.TeamName = TeamName;
        this.TeamMembers = TeamMembers;
    }
}

