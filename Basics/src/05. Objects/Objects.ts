//* We can create an object with specific shape(with certain combination of types and order)

// The parameter we passed
function fullName(person: { firstName: string; lastName: string }) {
	return `${person.firstName} ${person.lastName}`;
}

let p1 = { firstName: "Martha", lastName: "Smith" };
let p2 = { firstName: "Martha", lastName: 44 };

console.log(fullName(p1));
console.log(fullName({ firstName: "Jonas", lastName: "Kanhwald" }));
// console.log(fullName(p2)); // This will cause an error because the second property does not match the type we specified

function Employee(employee: {
	id: number;
	firstName: string;
	lastName: string;
	salary: number;
}) {
	return `Employee data:
     ID: ${employee.id} 
     First Name: ${employee.firstName}
     Last Name: ${employee.lastName}
     Salary: ${employee.salary}
     `;
}

let emp1 = {
	id: 101,
	fName: "Prathamesh",
	lName: "Mali",
	sal: 40000,
};
let emp2 = {
	id: 102,
	firstName: "James",
	lastName: "McCovoy",
	salary: 50000,
};

// console.log(Employee(emp1)); // This will throw us an error because the property name also matters

console.log(Employee(emp2));

//* But it is not feasible to write functions because when the properties gets pilling up the object will get harder to manger for solving this issue we can use Interfaces
