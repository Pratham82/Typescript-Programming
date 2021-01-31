export class dragon {
	//* When the property is set to public it can be accessed from anywhere
	public claws: number;

	readonly name: string;
	tail: boolean;

	constructor(data?: any) {
		this.claws = data.claws;
		this.name = data.name;
		this.tail = data.tail;
	}

	public add(num1: number, num2: number) {
		return num1 + num2;
	}

	//* addTwo method is private and can be accessed within the class dragon and not anywhere else
	private addTwo(num1: number, num2: number): number {
		return num1 + num2;
	}
}
