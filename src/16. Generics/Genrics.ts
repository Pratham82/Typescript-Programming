//* We need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned.
//* Here, we will use a type variable, a special kind of variable that works on types rather than values.

function gen<T>(argument: T): T {
	return argument;
}

//* Generics can be used when we don't know which data type is going to be passed in or you're going going to be passing multiple data types.

function example<T>(arg: T[]): T {
	return arg[0];
}
