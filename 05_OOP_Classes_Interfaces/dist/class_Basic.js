"use strict";
class Department00 {
    constructor(n) {
        this.name = n;
    }
}
const accounting00 = new Department00('Accouting');
console.log(accounting);
class DepartmentWithFunc {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
}
const accountingFunc = new DepartmentWithFunc('Accouting');
accountingFunc.describe();
const accountingFuncCopy = { name: accountingFunc.name, describe: accountingFunc.describe };
accountingFuncCopy.describe();
class Department02 {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
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
class Department03 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
}
const account03 = new Department03('d1', 'accounting');
account03.describe();
//# sourceMappingURL=class_Basic.js.map