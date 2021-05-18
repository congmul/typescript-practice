// Simple Class 
class Department00 {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const accounting00 = new Department00('Accouting');

console.log(accounting);


// Function & This
class DepartmentWithFunc {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    describe(this: DepartmentWithFunc) {
        console.log("Department: " + this.name)
    }
}

const accountingFunc = new DepartmentWithFunc('Accouting');

accountingFunc.describe();

const accountingFuncCopy = { name: accountingFunc.name,  describe: accountingFunc.describe };

accountingFuncCopy.describe();


// Complex Class - Private - Cannot access variable directly.
class Department02 {
    private name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department02){
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting02 = new Department02('Accounting');

accounting02.addEmployee('Max');
accounting02.addEmployee('Jehyun');



accounting02.describe();
accounting02.printEmployeeInformation();

// Short hand initialize Class & readonly
class Department03 {
    // private readonly id: string;
    // private readonly name: string;

    constructor(private readonly id: string, private name: string) {
        // this.id = id;
        // this.name = name;
    }

    describe(this: Department03){
        console.log(`Department (${this.id}): ${this.name}`);
    }
}

const account03 = new Department03('d1', 'accounting');

account03.describe();

