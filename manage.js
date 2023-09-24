// Title: Employee Management System
// Author: Arnold Twala


// Employee class with attributes name, age, salesTarget, actualSales
class Employee {
    // Constructor to initialize the attributes of the class
    constructor(name, age, salesTarget, actualSales) {
        this.name = name;
        this.age = age;
        this.salesTarget = salesTarget;
        this.actualSales = actualSales;
    }
    // Method to display employee info with name, age, actual sales and sales target
    displayEmployeeInfo() {
        console.log(`Employee: ${this.name} aged: ${this.age}, actual sales is ${this.actualSales}, the sales target was ${this.salesTarget}`);
    }
}

// SalariedEmployee class that extends from Employee class with attribute salary
class SalariedEmployee extends Employee {
    // Constructor to initialize the attributes of the class
    constructor (name, age, salesTarget, actualSales, salary) {
        // Super keyword to call the constructor of the parent class Employee
        super(name, age, salesTarget, actualSales);
        this.salary = salary;
    }
    
    // Method to calculate payout
    calculatePayout() {
        // If statement to check if actual sales is greater than sales target
        if (this.actualSales > this.salesTarget) {
            // Return payout with 10% increase in salary if sales target is met, it include the formula to calculate payout
            return `Employee met the sales target, payout is: ${this.salary} * 1.1(10% increase in rate) = R${this.salary * 1.1}`;
        } else
            // Return payout if sales target is not met, only basic salary is paid
            return `Employee did not meet sales target, payout is: R${this.salary}`;
    }
}
    
// HourlyEmployee class that extends from Employee class with attributes hourlyRate and hoursLogged
class HourlyEmployee extends Employee {
    // Constructor to initialize the attributes of the class
    constructor (name, age, salesTarget, actualSales, hourlyRate, hoursLogged) {
        // Super keyword to call the constructor of the parent class Employee
        super(name, age, salesTarget, actualSales);
        this.hourlyRate = hourlyRate;
        this.hoursLogged = hoursLogged;
    }

    // Method to calculate payout
    calculatePayout () {
        if (this.actualSales > this.salesTarget) {
            // Return payout with 50% increase in hourly rate if sales target is met, it include the formula to calculate payout
            return `Employee met the sales target, payout is: R${this.hourlyRate} * 1.5(50% increase in rate) * ${this.hoursLogged} hours logged = R${this.hourlyRate * 1.5 * this.hoursLogged}`;
        } else
            // Return payout if sales target is not met, it include the formula to calculate payout
            return `Employee did not meet sales target, payout is: R${this.hourlyRate} * ${this.hoursLogged} = R${this.hourlyRate * this.hoursLogged}`; 
    }
}

// HybridEmployee class that extends from Employee class with attributes salary, hourlyRate and hoursLogged
class HybridEmployee extends Employee {
    // Constructor to initialize the attributes of the class
    constructor (name, age, salesTarget, actualSales, salary, hourlyRate, hoursLogged) {
        // Super keyword to call the constructor of the parent class Employee
        super(name, age, salesTarget, actualSales);
        this.salary = salary;
        this.hourlyRate = hourlyRate;
        this.hoursLogged = hoursLogged;
    }
    // Method to calculate payout
    calculatePayout () {

        if (this.actualSales > this.salesTarget) {
            // Return payout with 20% increase in hourly rate if sales target is met, it include the formula to calculate payout.
            return `Employee met the sales target, payout is: ${this.salary} * 1.2(20% increase in rate) + ${this.hourlyRate} * ${this.hoursLogged} = R${this.salary * 1.2 + this.hourlyRate * this.hoursLogged}`;
        } else
            // Return payout if sales target is not met, it include the formula to calculate payout.
            return `Employee did not meet sales target, payout is: R${this.salary} + ${this.hourlyRate} * ${this.hoursLogged} = R${this.salary + this.hourlyRate * this.hoursLogged}`;
    }
}

// Instances of Salaried Employees
const SalariedEmployee1 = new SalariedEmployee("Arnold", "41", 50, 45, 24000);
const SalariedEmployee2 = new SalariedEmployee("John", "35", 50, 55, 24000);
// Display employee info and calculate payout
SalariedEmployee1.displayEmployeeInfo();
console.log(SalariedEmployee1.calculatePayout());
// Add a new line to the console to separate the outputs
console.log("\n");

SalariedEmployee2.displayEmployeeInfo();
console.log(SalariedEmployee2.calculatePayout());
console.log("\n");

// Instances of Hourly Employees monthly 
const HourlyEmployee1 = new HourlyEmployee ("Hlamalani", "25", 50, 55, 150, 170);
const HourlyEmployee2 = new HourlyEmployee ("Nicky", "31", 50, 45, 150, 150);
// Display employee info and calculate payout
HourlyEmployee1.displayEmployeeInfo();
console.log(HourlyEmployee1.calculatePayout());
console.log("\n");

HourlyEmployee2.displayEmployeeInfo();
console.log(HourlyEmployee2.calculatePayout());
console.log("\n");

// Instances of Hybrid Employees
const HybridEmployee1 = new HybridEmployee ("Thomas", "21", 50, 55, 18000, 150, 55);
const HybridEmployee2 = new HybridEmployee ("Sue", "35", 50, 45, 18000, 150, 35);
// Display employee info and calculate payout
HybridEmployee1.displayEmployeeInfo();
console.log(HybridEmployee1.calculatePayout());
console.log("\n");

HybridEmployee2.displayEmployeeInfo();
console.log(HybridEmployee2.calculatePayout());

