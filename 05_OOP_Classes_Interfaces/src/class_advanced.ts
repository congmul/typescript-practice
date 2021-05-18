// Inheritance :extends
// to use abstract method
abstract class Department {     
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];  // protect is like private, but unlike private it's now not just available in main class, but also in any class that extends.

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear); // Use Class Name instead of this to access static value
  }

  // static Method
  static createEmployee(name: string){
    return { name: name}
  }

  // describe(this: Department) {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }

  // abstract Method
  abstract describe(this: Department): void; // void is return type.

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Extends is for inheritance
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');                            // Super - This is a contructor for Department Class
    this.admins = admins;                      // Use this after using super()
  }

  describe() {
    console.log('IT Department + ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  // getter Method
  get mostRecentReport(){
    if(this.lastReport){
      return this.lastReport;
    }
    throw new Error('No report found.')
  }

  // setter Method
  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value!')
    
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  } 

  //OverRiding method
  addEmployee(name: string){
    if(name === 'Max'){
      return;
    }

    this.employees.push(name);  // Access protect variable.

  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// Call static method without creating object
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);



it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);
const accounting = new AccountingDepartment('d2', []);

// Call setter
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');

// Call getter
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation();
accounting.describe();


// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();