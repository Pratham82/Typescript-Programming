//******************* Functions ******************

//* We have to assign data types to the variables
//* We can also set the return type of the method so in that way our output will not mess up
function add(num1: number, num2: number): number {
	return num1 + num2;
}

console.log(add(40, 50)); // This will run perfectly because the types specified are correct

// console.log(add("111", 3434));
// this will throw error because the first parameter doer not have specified type

//****************** Optional Parameters ******************/

//* In TS every parameter is assumed to be required by the function
//* If you call the function without the parameter it throws an error but in plain JS it is allowed.paramter will then receive a value of undefined
//* We can get this functionality in TS using question mark at the end of the parameter
//* We can add any number of optional parameters but condition is that optional must always be after the required parameters
function addOptional(num1: number, num2?: number) {
	return num2 ? num1 + num2 : num1;
}

console.log(addOptional(13, 43)); //56
console.log(addOptional(100)); //100

//****************** Default Parameters ******************/
//* In default parameters we can assign a specific value to our parameters so if the user did not passed the parameter default value will  be used

function addWithDefault(num1: number, num2: number = 10) {
	return num1 + num2;
}

console.log(addWithDefault(100)); //120
