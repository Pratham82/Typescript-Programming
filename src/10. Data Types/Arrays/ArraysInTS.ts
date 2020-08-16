//************************** Arrays ********************************

//* Array with any type
const Arr1: any[] = [101, "test", true, null];

//* Array with single types
const Arr2: number[] = [122, 143, 235, 654, 767];

const Arr3: string[] = ["Drake", "Weeknd", "J Cole.", "Eminem", "Kanye"];

//* Array with multiple types
const Arr4: (number | boolean)[] = [100, 102, 103, 104, true, false, true];

const Arr5: (number | string | boolean)[] = [
	111,
	"testing",
	true,
	false,
	45555,
	"Jess",
];

//*  Nested arrays
const Arr6: number[][] = [[102, 101, 105]];
