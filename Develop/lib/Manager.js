// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Employee extends Manager {
    constuctor(officeNumber, name, id, email) {
        super(name, id, email); // calls Employee's class
        this.officeNumber = officeNumber;
    };

    getRole() {
        // write code
    };
};

// need more code here. TBD