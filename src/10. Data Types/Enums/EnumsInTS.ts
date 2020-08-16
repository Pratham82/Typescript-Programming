import { User1 } from "./Enums.data";

function NameChecker(fName: User1, lName: User1, age: User1) {
	return `My Name is ${fName} ${lName} and I am ${age} year old`;
}

console.log(NameChecker(User1.firstName, User1.lastName, User1.age));
// My Name is joey basilga and I am 45 year old
