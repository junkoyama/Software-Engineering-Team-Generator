// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github, name, id, email) {
    super(name, id, email);

    if (!name) {
      throw new Error("You are missing the name.");
    }
    if (!id) {
      throw new Error("You are missing the id.");
    }
    if (!email) {
      throw new Error("You are missing the email.");
    }
    if (!github) {
        throw new Error("You are missing the github name.");
      }

    this.github = github;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
