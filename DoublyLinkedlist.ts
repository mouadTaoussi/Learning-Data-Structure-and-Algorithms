class Topic {
	public data: any;
	public prev: any;
	public next: any;

	constructor(data:any,prev:any,next:any) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

class Topics {
	public head: any = null;
	public tail: any = null;

	add(value:any): void {
		if (this.head == null) {
			this.head = new Topic(value, null, null);
			this.tail = this.head;
		}else {
			this.insert(value, this.head);
		}
	}
	private insert(value:any, node: any) {
		const previous: any = null;
		const current: any = node;

		if (current.next == null) {
			current.next = new Topic(value, current, null);
			this.tail = current.next;
		}
		else {
			this.insert(value, current.next);
		}
	}
	addfirst(value: any) {
		if (this.head == null) {
			this.head = new Topic(value, null, null);
			this.tail = this.head;
		}else {
			let current = this.head;

			this.head = new Topic(value, null, this.head);
			
			//  Tail adding
			while(current.prev != null) {
				current = current.prev;
			}
			current.prev = new Topic(value, null, current);
		}
	}
	addBetween(value: any, after: any) {
		let current: any = this.head;
		let previous: any = null;
		
		while (current) {
			if (current.data == after) {
				console.log(1)
				current.next = new Topic(value, previous, current.next);
			}else {
				previous = current;
				current = current.next;

			}
		}

	}
	print() {
		let current = this.head;

		while(current) {
			console.log(current.data);
			current = current.next;
		}
	}
	printInverse() {
		let current = this.tail;

		while (current) {
			console.log(current.data);
			current = current.prev;
		}
	}

}

const Lp = new Topics();

Lp.add(100);
Lp.add(200);
Lp.add(300);
Lp.add(400);
Lp.addfirst(0)
// Lp.addBetween(250,100)
Lp.print();
Lp.printInverse();