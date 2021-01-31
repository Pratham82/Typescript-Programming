//****************** Interfaces part-2 ************/

//* Exporting an interface
import { Person } from "./person.interface";

//* Here we will create a personObj with the help of person interface
//* We also have to give the default values or else we will get an error
const personObj: Person = {
	firstName: "fName",
	middleName: "mName",
	lastName: "lName",
};

personObj.firstName = "Grace";
personObj.middleName = "Will";
personObj.lastName = "Smith";
