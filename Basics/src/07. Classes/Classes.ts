//******************* Classes *********************/

import { extend } from "lodash";

class Employee {
	// We can set the access modifiers to the variables similar to java
	// IF we set the employeeName tp private we wont be able to access the employeeName property outside the class
	employeeName: string;

	constructor(name: string) {
		this.employeeName = name;
	}

	greet() {
		return `Hi ${this.employeeName} !!`;
	}
}

let e1 = new Employee("Joey");

console.log(e1);
console.log(e1.employeeName);
console.log(e1.greet());

/*
Output:

Employee { employeeName: 'Joey' }
Joey
Hi Joey !!
*/

//* Creating new class and inheriting predefined properties from the older class

class Manager extends Employee {
	// here the manager class constructor will call Employee class constructor while for initialize employee name property
	constructor(managerName: string) {
		super(managerName);
	}

	delegateTasks() {
		return `Manager delegating tasks`;
	}
}

let m1 = new Manager("Frank");
console.log(m1);
console.log(m1.employeeName);
console.log(m1.delegateTasks());
/*
Manager { employeeName: 'Frank' }
Frank
Manager delegating tasks
*/
