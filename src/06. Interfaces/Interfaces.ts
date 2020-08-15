//******************** Interfaces  ************************/

//* From the object's example we can create a  person interface and use that as a type inside our function

interface Person {
	firstName: string;
	lastName: string;
	age: number;
	address: string;
}

// now we can use this person interface as our function parameter

function CheckPerson(person: Person) {
	return `My name is ${person.firstName} ${person.lastName} and I'm from ${person.address}`;
}

let p3 = {
	firstName: "Joe",
	lastName: "Jonas",
	age: "48",
	address: "New york",
};

let p4 = {
	firstName: "Joe",
	lastName: "Jonas",
	age: 48,
	address: "New york",
};

// console.log(CheckPerson(p3)); // here it does not works because the age property has string value
console.log(CheckPerson(p4));

//* The same interface can be used anywhere inside various functions

//* Optional Properties in interfaces
interface Person2 {
	firstName: string;
	lastName?: string;
	age: number;
	address?: string;
}

let p5 = {
	firstName: "Drew",
	lastName: "Barrymore",
	age: 50,
	// address: "Los Angeles",
};

let p6 = {
	firstName: "Drake",
	// lastName: "Alamass",
	age: 50,
	// address: "Los Angeles",
};

function CheckPerson2(person: Person2) {
	return `My name is ${person.firstName} ${person.lastName} and I'm from ${person.address}`;
}

console.log(CheckPerson2(p4));
//*OP: My name is Joe Jonas and I'm from New york

console.log(CheckPerson2(p5));
//*OP: My name is Drew Barrymore and I'm from undefined
//* Here p5 works even though we haven't provided the address property because the address property is set to optional inside our Person2 int
//* But wherever the address property used in the program will be set to undefined

console.log(CheckPerson2(p6));
//*OP:  My name is Drake undefined and I'm from undefined

//* We can use this feature while creating form, for checking the optional fields
