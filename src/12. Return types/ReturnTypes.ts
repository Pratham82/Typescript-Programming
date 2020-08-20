//******************* Return types in TypeScript ****************/

import { Person } from "../11. Parameters/person.model";

//* We can explicitly give the return types to the methods after the ending parameters, so if our return types differs from the given return tye we will get an error

//* If we don't want to handle it manually we can keep it vacant and the TS automatically handle it and changes the return type according the return statement
const add = (num1: number, num2: number): number => {
	return num1 + num2;
};

//* Here if if hover over the function we will see that this function return string type value
const addImplicit = (num1: number, num2: number) => {
	return (num1 + num2).toString();
};

//*  If we don't want to return anything we can specify the return type as void or similar to the previous example if we didn't provide any return type it will implicitly assign to void
const voidExample = (num1: number, num2: number): void => {
	add(45, 45);
};

//********** Never Type ***********/
// TypeScript introduced a new type never, which indicates the values that will never occur.

// The never type is used when you are sure that something is never going to occur.For example, you write a function which will not return to its end point or always throws an exception.

// Instantiating person
const neverExample = (): never => {
	throw Error;
};

let p1 = new Person({ firstName: "Joe", lastName: "Jonas" });

const sayHello = (person: Person): string => {
	return `Hi my name is ${person.firstName} ${person.lastName}`;
};

console.log(sayHello(p1));
