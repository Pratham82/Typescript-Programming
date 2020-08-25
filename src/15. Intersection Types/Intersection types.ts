//* Importing multiple interfaces individually  */
// import { bear } from "./Barrels/interfaces/bear.interface";
// import { man } from "./Barrels/interfaces/man.interface";
// import { pig } from "./Barrels/interfaces/pig.interface";

//*We can do this in much better way by using barrel imports  */

//* Intersection Types: We can combine types and add it to the variable, instead of provide individual types.

import { Bear, Man, Pig } from "./Barrels";

//* Individual type
let man: Man;
let pig: Pig;
let bear: Bear;

//* Combined types

//* Now the ManBearPig can access methods of Man, Bear, Pig

// Creating combined type
type ManBearPig = Bear & Man & Pig;

// Creating a variable with combined types
let manBearPig: ManBearPig = { fName: "Dylan", claws: 3, bacon: false };

console.log(manBearPig);

let pigMan: Man | Pig = { fName: "Joey", bacon: true };

console.log(pigMan);
