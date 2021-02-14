// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber, name, id, email) {
    super(name, id, email); // calls Employee's class

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
    return "Manager";
  }

  getOfficeNumer() {
    return this.officeNumber;
  }
}

module.exports = Manager;
