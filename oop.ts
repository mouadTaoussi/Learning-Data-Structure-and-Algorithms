class Person {
	private data: any;
	private next: string;

	constructor(data: any, next: any) {
		this.data = data;
		this.next = next;
	}
}

class MainOne {

	current: any;
	size: number;

	constructor(current: string,size: number){
		this.current = current
		this.size = size
	}

	append(data:any): void {
		if (!this.current) this.current = new Person(data, null);

		this.current = new Person(data, this.current);
	}
	// getOne(): {name: string, age:number} {
	// 	return { name: this.name, age: this.age }
	// }	
	print() :void {
		console.log(this.current)
	}
}


export { MainOne };