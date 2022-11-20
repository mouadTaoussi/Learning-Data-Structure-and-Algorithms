class User {
	public data: any;
	public next: any;

	constructor(data:any,next:any) {
		this.data = data;
		this.next = next;
	}
}

class Users {
	public head: any = null;


	prepend (value: any){
		let current: any = this.head; 


		if (this.head == null) {
			this.head = new User(value, null)
		}else {
			while (current.next != null) {
				current = current.next;
			}

			current.next = new User(value, null);

		}
	}
	append(value: any): void {
		if (this.head == null) {
			this.head = new User(value, null)
		}else {
			this.head = new User(value, this.head)
		}
	}
	print(): void {
		let current: any = this.head;

		while(current) {
			console.log(current.data)
			current = current.next;
		}
	}
	addbetween(value:any,after:any): void {
		let current: any = this.head;

		if (this.head == null) {
			this.head = new User(value, null)
		}else {
			while(current.data != after) {
				current = current.next;
			}
			current.next = new User(value, current.next);
		}
	}
	update(older: any, newer: any): void {
		let current: any = this.head;
		let previous: any;

		while (current.data != older) {
			previous = current;
			current = current.next;
		}

		previous.next = new User(newer, current.next);

	}
	remove(value: number): void {
		let i: number = 0;
		let current: any = this.head;
		let previous: any;

		while (current.data != value) {
			previous = current;
			current = current.next;
		}

		previous.next = current.next;
	}

}

const L = new Users();

L.prepend(100); 
L.prepend(200); 
L.prepend(300); 
L.prepend(400); 
L.append(0);
L.addbetween(250,200);
L.update(200,220);
L.print();