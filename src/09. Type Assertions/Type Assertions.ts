let definetlyNotaString: any = "I am string";

//* Depending on the strictness of an TSlint file we have to explicitly add the type of the any type variable before using it
console.log(definetlyNotaString.length); //11

// Casting to a sting type:
console.log(<string>definetlyNotaString.length); //11
//OR
console.log((definetlyNotaString as string).length); //11
