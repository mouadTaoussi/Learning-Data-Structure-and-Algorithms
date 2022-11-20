class LLNodee {
	value : any;
	next: any;

	constructor(value:any, next: any = null ) {
		this.value = value;
		this.next = next;
	}
}

class LINKEDLIST {



	public root : any = null;


	addNode(value: any) {
		if (this.root == null) {
			this.root = new LLNodee(value)
		}
		else {
			let current: any = this.root;

			while (current.next != null) {
				current = current.next;
			}


			current.next = new LLNodee(value)
		}
	}
	print () {
	 	let current: any = this.root;

	 	while (current) {

	 		console.log(current.value);

	 		current = current.next;
	 	}
	}

	appendAt(after: any, value: any) {


		let current: any = this.root;


		while (current) {

			if (current.value == after) {
				const oldNext = current.next;
				const newNext = new LLNodee(value, oldNext);

				current.next = newNext;
			}

			current = current.next;
		}
	}

	remove(value:any) {
		let current: any = this.root;
		let prev = null;

		if (value == this.root.value) {

			this.root = this.root.next;
		}
		else {
			while (current) {

				if (current.value == value){

					prev.next = current.next;

				}

				prev = current;
				current = current.next;
			}
		}
	}

	update(value: any, newValue: any) {
		let current: any = this.root;
		let prev: any = this.root;

		while (current) {

			if (value == current.value) {
				prev.next.value = newValue;
			}

			prev = current;
			current = current.next;
		}
	}
}


const ll = new LINKEDLIST();

ll.addNode(100);
ll.addNode(200);
ll.addNode(300);
ll.addNode(400);
ll.appendAt(200,600);
ll.remove(600);
ll.update(200,600);
ll.print();
