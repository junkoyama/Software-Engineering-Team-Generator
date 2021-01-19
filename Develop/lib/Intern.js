// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school, name, id, email) {
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
    if (!school) {
      throw new Error("You are missing the school name.");
    }

    this.school = school;
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

  getRole() {
    return this.role;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Employee;
