class LLNode<Type> {
	private value: Type;
	private next: any;

	constructor(value: Type, next: any = null) {
		this.value = value;
		this.next = next;
	}
}


class LinkedListDS<Type> {

	private head: any;

	public insert(value: Type): Type {
		let current: any = this.head;

		if (this.head == null) {
			this.head = new LLNode<Type>(value)
		}
		else {
			while(current.next != null) {
				current = current.next;
			}

			current.next = new LLNode<Type>(value)
		}

		// if linked list is circular

		return value
	}


	remove(value: Type): Type {
		let current: any = this.head;
		let previous: any = null;

		while (current != null) {

			if (current.value == value) {
				previous.next = current.next;
			}

			previous = current;
			current = current.next;
		}

		// if linked list is circular

		return value;
	}


	update( value: Type, newValue: Type ): Type {
		let current: any = this.head;
		let previous: any = null;

		while (current) {
			if (value != current.value) {
				previous = current;
				current = current.next; 
			} else if (value == current.value) {
				previous.next = new LLNode(newValue, current.next);
				break
			}

		}

		// if linked list is circular

		
		return newValue;
	}
	public print(): any {
		let current : any = this.head;
		let values: Type[] = [];

		while (current.next != this.head) {
			values.push(current.value)
			current = current.next
		}
		// console.log(this.head.next.next.next)
		return values;
	}
	public enableCircular(): void {
		let current : any = this.head;

		while ( current.next != null ) {
			current = current.next;
		}

		current.next = this.head;
	}
	public disableCircular(): void {
		let current : any = this.head;

		while ( current.next.value != this.head.value ) {
			current = current.next;
		}

		current.next = null;
	}

}



const LL :any = new LinkedListDS<number>()

LL.insert(100);
LL.insert(200);
LL.insert(300);
LL.insert(400);
LL.insert(500);
// LL.remove(200);
LL.update(300, 600);
LL.enableCircular();
// LL.disableCircular();
console.log(LL.print())