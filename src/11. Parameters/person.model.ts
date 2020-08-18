export class Person {
	firstName: string;
	lastName: string;

	constructor(data?: any) {
		this.firstName = data.firstName;
		this.lastName = data.lastName;
	}

	sayName(): string {
		return `Hi my name is ${this.firstName} ${(this.lastName = "fed")}`;
	}
}
