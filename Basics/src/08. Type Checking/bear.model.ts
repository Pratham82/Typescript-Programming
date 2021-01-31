export class Bear {
	claws: number;

	constructor(data: number) {
		this.claws = data;
	}
}

//* Example class */
export class Student {
	stud_id: number;
	stud_name: string;
	stud_std: string;

	constructor(id: number, name: string, std: string) {
		this.stud_id = id;
		this.stud_name = name;
		this.stud_std = std;
	}
}
