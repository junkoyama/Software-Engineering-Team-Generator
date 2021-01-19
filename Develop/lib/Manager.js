// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constuctor(officeNumber, name, id, email) {
    super(name, id, email); // calls Employee's class

    if (!name) {
      throw new Error("You are missing the name.");
    }
    if (!id) {
      throw new Error("You are missing the id.");
    }
    if (!email) {
      throw new Error("You are missing the email.");
    }
    if (!officeNumber) {
      throw new Error("You are missing the office number.");
    }

    this.officeNumber = officeNumber;
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

  getOfficeNumer() {
    return this.officeNumber;
  }
}

module.exports = Employee;
