//*************** Custom Types ********************/

//* Creating our own type
type PersonNew = { firstName: string };

//* Here we are passing the PersonNew object as type
const exampleObj: PersonNew = { firstName: "def" };

// obj.firstName;
exampleObj.firstName = "New Name";

console.log(exampleObj); // { firstName: 'New Name' }
