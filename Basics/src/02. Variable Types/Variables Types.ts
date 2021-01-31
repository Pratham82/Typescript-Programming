//* Variable declaration with types

//*1. TypeScript provides us with static type checking so if the variable type is assigned and if we try to assign variable to the different type then it will cause an error

//*2. With typescript we also have intellisense, the property or methods which are applicable on the specific variable will be suggested when we gave a "."

//*********************** Boolean type **********************
let isLoggedIn: boolean = true;
// isLoggedIn = "true"; // This is not allowed

//*********************** Number type **********************
let cards: number = 52;

//*********************** String type **********************
let myName = "Prathamesh";
const sentence: String = `This is ${myName}'s profile.`;
console.log(sentence);

var repeatedVal = myName.repeat(4); //PrathameshPrathameshPrathameshPrathamesh

console.log(repeatedVal);

//*********************** Null type **********************
let n: null = null;

//*********************** Undefined type **********************
let u: undefined = undefined;

//* null and undefined are classified as the subtypes of all other types, we can assign the value of null or undefined to either boolean number or a string typed variable

// let check: boolean = null;
// let bollChecker: boolean = null;

//* Array declarations

//* Array of numbers
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: Array<number> = [6, 7, 8, 9, 10];

//* Array of string and and numbers

//* Tuples fixed number of values
//* Here the order of the variables matter if we change the order then we will get an error, also we have to abide by the parameters provided
let person1: [string, number] = ["Name", 45];

//* Enum

enum Color {
	Red,
	Green,
	Blue,
}

console.log(Color);

let c1: Color = Color.Red;
let c2: Color = Color.Green;
let c3: Color = Color.Blue;
console.log("c1:", c1); //0
console.log("c2:", c2); //1
console.log("c3:", c3); //2

console.log(Color[0]); //Red
console.log(Color[1]); //Green
console.log(Color[2]); //Blue

//* We can also provide the initial value in enum

enum alpha {
	A = 55,
	B,
	C,
}

console.log(alpha.B); //56
console.log(alpha.C); //57

//********************** Any Type **********************
//* if we don't want ot specify the types we can use "any" type
//* If you are unsure what the variable type would be then make use of "any" type
//* E.g Dynamic values from third party library, API or from the user
// let copy: any = "string val";

//* Using unknown Type
let copy: unknown = "string val";

// copy = 455 // This is valid because copy is of any type

//* But "any" type can cause the following errors
//* As we declared the copy variable with type any so typescript will not throw any error

//* For solving this issue typescript 3.0 introduced with "unknown" type, But we cannot access any type of type unknown or we can call or construct them. For suing unknown typed variable we have to use type assertion

console.log((copy as string).toUpperCase());

//* Creating a function that checks if the object has name property or not
function hasName(obj: any): obj is { name: string } {
	return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(copy)) {
	console.log(copy.name);
}

console.log(hasName(copy) ? copy.name : false);
