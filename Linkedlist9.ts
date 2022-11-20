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
		let current = this.head; 


		if (this.head == null) {
			this.head = new User(value, null)
		}else {
			while (current.next != null) {
				current = current.next;
			}

			current.next = new User(value, null);

		}
	}
	append(value: any){
		if (this.head == null) {
			this.head = new User(value, null)
		}else {
			this.head = new User(value, this.head)
		}
	}
	print() {
		let current = this.head;

		while(current) {
			console.log(current.data)
			current = current.next;
		}
	}
	addbetween(value:any,after:any) {
		let current = this.head;

		if (this.head == null) {
			this.head = new User(value, null)
		}else {
			while(current.data != after) {
				current = current.next;
			}
			current.next = new User(value, current.next);
		}
	}
	remove(index: number) {
		let i: number = 0;
		let current = this.head;

		if (index == i) {
			this.head = this.head.next;
		}else {
			while(current){
				if (index == i) {
					current = current.next;
				}
				current = current.next
				i++;
			}
		}
	}

}

const L = new Users();

L.prepend(100); 
L.prepend(200); 
L.prepend(300); 
L.prepend(400); 
L.append(0);
L.addbetween(250,200);
L.remove(2)
L.print();