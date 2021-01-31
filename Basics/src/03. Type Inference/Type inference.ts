//***************** Type inference ************************

//* Specifying types is optional
let var1; // Here th type of var 1 is any so we can assign it any type of value
var1 = 10;
var1 = "Test";

let var2 = 50;
// var2 = "Text1";
//* This will throw an error because we initialized the var2 with a number, we can also access all the methods of number on this variable
//* With help of type inference provides static type checking and intellisense

//* We assign it a number value
var2 = 105;
console.log(var2.toString().split("")); //[ '1', '0', '5' ]

//* Type inference only takes place when initializing variables and not all the time

//************************* Union of types to variables ******************

let multiType: number | boolean;
// This states that the variable can hold number as well as boolean value

multiType = 155;
multiType = true;

//* Any type does not have any restrictions
//* Any type does not supports intellisense (the methods will not show after dot)
let anyType;
anyType = 455;
anyType = "Josh";
