import { Bear, Student } from "./bear.model";

let bear1 = new Bear(3);

bear1 instanceof Bear
	? console.log("bear1 is an instance of Bear")
	: console.log("bear1 is not an instance of bear");
//bear1 is an instance of Bear
//* Creating function for type checking

function TypeChecker(ClassName: any, objectRef: object) {
	return objectRef instanceof ClassName
		? `Object is an instance of aa provided class `
		: `Object is not an instance of a provided class`;
}

console.log(TypeChecker(Bear, bear1)); //Object is an instance of aa provided class

let stud1 = new Student(101, "Student 1", "B.E");
console.log(stud1);

console.log(TypeChecker(Student, stud1)); //Object is an instance of aa provided class
