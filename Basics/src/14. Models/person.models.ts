//* In classes we can use classes so we can use default values while initializing properties, that gives us advantages over interfaces
export class Person {
	firstName: string;
	middleName: string;
	lastName: string;

	constructor(data?: any) {
		this.firstName = data.firstName || "John";
		this.middleName = data.middleName || "Drew";
		this.lastName = data.lastName || "Snow";
	}

	getName() {
		return `Hi my name is ${this.firstName}`;
	}
}
