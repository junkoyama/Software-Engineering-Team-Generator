// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        if (!name) {
            throw new Error("You are missing the name.");
          }
          if (!id) {
            throw new Error("You are missing the id.");
          }
          if (!email) {
            throw new Error("You are missing the email.");
          }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`Name: ${this.name}`);
    };

    getId() {
        console.log(`Id: ${this.id}`)
    };

    getEmail() {
        console.log(`Email: ${this.email}`)
    };

    getRole() {
        // write code here. not too sure
    };
};

module.exports = Employee;