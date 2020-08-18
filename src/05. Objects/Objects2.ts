// object with a lowercase “o” is the type of all non - primitive values
const example1: object = {};
// While object(lowercased) represents all non - primitive types,
// Cannot assign  NaN, undefined, null to example1

// Object with an uppercase “O” is the type of all instances of class Object:
// Object(uppercased) describes functionality that is common to all JavaScript objects.
const example2: Object = NaN;

// There's yet another type which is quite similar: {}, the empty type. It describes an object that has no members on its own.
// Type {}
const obj = {};

// Error: Property 'prop' does not exist on type '{}'.
// obj.prop = "value";
