class LLNode<Type> {
	private value: Type;
	// private prev: any;
	private next: any;

	constructor(value: Type, /*prev: any = null,*/ next: any = null) {
		this.value = value;
		// this.prev = prev;
		this.next = next;
	}
}


class LinkedListDS<Type> {

	private head: any;
	private tail: any;

	public insert(value: Type): Type {
		let current : any = this.head;

		if (this.head == null) {
			this.head = new LLNode(value);
			this.tail = this.head;
		}
		else {
			// prev pointer should be here
			
			this.tail.next = new LLNode(value);
			this.tail = this.tail.next;
		}
		return value;
	}
	insertAt( value: Type, newValue: Type ): Type {
		let current: any = this.head;
		let previous: any = null;

 		while (current) {
 			if (current.value != value) {
	 			previous = current;
	 			current = current.next;
 			}else {
 				current.next = new LLNode(newValue, current.next)
 				break
 			}
 		}

		return newValue;
	}
	update( value: Type, newValue: Type ): Type {
		let current: any = this.head;
		let previous: any = null;

		while (current) {
			if (current.value != value) {
				previous = current;
				current = current.next;
			}else {
				previous.next = new LLNode(newValue, current.next)
				break;
			}
		}
		return newValue;
	}
	remove(value: Type): Type {
		let current: any = this.head;
		let previous: any = null;

		while(current) {
			if (current.value != value) {
				previous = current;
				current = current.next;
			} else {
				previous.next = current.next;
				break;
			}
		}
		return value;
	}

	public print(): any {
		let current : any = this.head;
		let values: Type[] = [];

		while (current) {
			values.push(current.value)
			current = current.next
		}
		console.log(this.head)
		return values;
	}

}



const LL :any = new LinkedListDS<number>()

LL.insert(100);
LL.insert(200);
LL.insert(300);
LL.insert(400);
LL.insertAt(200, 700);
LL.remove(200);
LL.update(300, 600);
console.log(LL.print())