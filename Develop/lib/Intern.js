// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Employee extends Intern {
    constructor(school, name, id, email) {
        super(name, id, email);
        this.school = school;
        
    };

    getSchool(school){
        this.school = school;
    };

    getRole() {
        //write code
    };
};

// still need to add some code here. Researching
