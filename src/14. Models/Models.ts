import { Person } from "./person.models";

//* When we use classes we have the option to assign the values later because we have built our class in that way

//* But we still have to pass any one property we cannot set a empty constructor or it will throw an error
const example = new Person({ middleName: "" });

// example.firstName = "";
// example.middleName = "";
// example.lastName = "";

// console.log(example.getName());
console.log(example.firstName); // John
console.log(example.lastName); // Snow
console.log(example.middleName); // Drew
