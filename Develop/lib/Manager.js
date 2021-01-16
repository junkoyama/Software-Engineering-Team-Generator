// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constuctor(officeNumber, name, id, email) {
        super(name, id, email); // calls Employee's class
        this.officeNumber = officeNumber;
    };

    getRole(role) {
        console.log(`Role: ${this.role}`)
    };
};

// still need to add some code here. Researching