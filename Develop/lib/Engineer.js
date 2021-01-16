// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github, name, id, email) {
        super(name, id, email);
        this.github = github;
    };

    getRole(role) {
        console.log(`Role: ${this.role}`)
    };

    getGithub(github) {
        this.github = github;
    }
};

// still need to add some code here. Researching