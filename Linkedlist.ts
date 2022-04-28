class Nodee {
	public data: any; 
	public next: any; 

	constructor (data:any, next:any) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	private head: any = null;
	private size: number = 0;

	// constructor (head: string,size: number) {
	// 	this.head = head; 
	// 	this.size = size;
	// }

	public appened(value: any): void {
		let current : any = this.head;

		if (this.head == null ) {
			this.head = new Nodee(value, null)
			this.size += 1;
		}
		else {
			while (current.next !== null) {
				// Pass step
				current = current.next;
			}
			current.next = new Nodee(value, null);

			// this.head = current;
			this.size += 1;
			// this.head = new Nodee(value, this.head);
		}
	}

	public appenedAt(value: any, after: any): void {

		let current = this.head;

		while (current.next != null) {
			if(current.data == after) {
				let oldNext = current.next;
				let newNode = new Nodee(value, oldNext)

				current.next = newNode;
			}
			// Pass step
			current = current.next;
		}
	}

	public print(): void {
		// console.log(this.size)

		let current: any = this.head;
		let size: number = 0;

		while(size <= this.size) {
			if (current !== null) {
				console.log(current.data);
				// Pass step
				current = current.next;
				// size++;
			}
			size++;
		}
	}
	public search(value: any): void {
		let current = this.head;

		if (current.data == value) console.log(value);

		while(current.next != null) {
			if(current.data == value) {
				console.log(value);
				// Pass step
				current = current.next;
			}
			else {
				// Pass step
				current = current.next;
			}
		}

	}
	// Stucked Here !!! Solved !!!
	public remove(value: any): void {
		let current = this.head;
		let previous = null; 

		if (this.head.data == value) {
			this.head = this.head.next;
		}
		else {
			while (current.data != value) {
				previous = current;
				// Pass step
				current = current.next;
			}
			previous.next = current.next;
		}
		this.size--;
	}
	// And Here !!! Solved !!!
	public update(value: any, newValue: any) {
		let current = this.head;
		let previous = null;

		if (this.head.data == value && this.head.next == null) {
			this.head.data = newValue;
		}
		else {
			while (current.data != value) {
				previous = current;
				// Pass step
				current = current.next;
			}
			previous.next = new Nodee(newValue, current.next)
		}

		// while (current.next != null) {
		// 	if (current.data == value) {

		// 		current.data = newValue
		// 		// 
		// 		previous.next = newValue

		// 	}
		// 	previous = current;
		// 	current = current.next;
		// }
	}
	public indexOf(value: any): void {

		if (this.head.data == value) {
			console.log(0);
		}
		else {
			let current = this.head;
			let index = 0;

			while (current.next != null ) {
				if (current.data != value) {
					index += 1;
				}
				// Pass step
				current = current.next;
			}
			console.log(index)
		}
	}
}

const LL =  new LinkedList()

LL.appened(100)
LL.appened(200)
LL.appened(300)
LL.appened(400)
LL.appened(500)
LL.appenedAt(600,100);
LL.update(200,700);
console.log('Print all');
LL.print()
console.log('Search for 200');
LL.search(200)

LL.remove(300)
console.log('Print without 300');
LL.print()
console.log('index of 100 and 300')
LL.indexOf(100)
LL.indexOf(300)