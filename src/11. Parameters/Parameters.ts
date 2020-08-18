import { Person } from "./person.model";

// By passing the data types to the parameters and the return type we made sure that anything apart from these types will not work with the function
const addNum = (num1: number, num2: number): number => {
	return num1 + num2;
};

console.log(addNum(45, 15)); //this is valid input and it will work
// console.log(addNum(null, 15)); //this is invalid
// console.log(addNum('s',45));//invalid input

//Passing parameter of a specific type
const sayMyName = (person: Person): string => {
	return `Hi there, I am ${person.firstName}`;
};

let pobj = new Person({ firstName: "Damion" });

console.log(sayMyName(new Person({ firstName: "Drake" })));

//Function with default lastName
console.log(pobj.sayName());
