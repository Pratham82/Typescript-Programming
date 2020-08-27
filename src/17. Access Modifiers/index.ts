import { animal } from "./animal.model";
import { dragon } from "./dragon.model";

// let animal1 = new animal();
// animal1.type = "wild";
// console.log(animal1);

let dragon1 = new dragon({ name: "Toothless" });

dragon1.claws = 4;

//* name property is read only so it cannot be modified
// dragon1.name = "Drake";
dragon1.tail = true;
console.log(dragon1);

const sum = dragon1.add(23, 27);
console.log(sum);

//* addTwo method is private and can be accessed within the class dragon and not anywhere else
// const sum2 = dragon1.addTwo(23, 27);
