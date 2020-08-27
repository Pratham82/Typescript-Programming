export class animal {
	//* when the property is protected it can be accessed only within the class
	protected type: string;

	protected constructor(data?: any) {
		this.type = data.type;
	}
}
