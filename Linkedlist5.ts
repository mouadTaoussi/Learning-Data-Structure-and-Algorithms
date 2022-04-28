class LLNode<Type> {
	private value: Type;
	private next: any;
	private prev: any;

	constructor(value: Type, next: any = null, prev:any = null) {
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}


class LinkedListDS<Type> {

	private head: any;
	private tail: any;


	public insert(value: Type): Type {
		


		if (this.tail == null) {
			this.head = new LLNode(value);
			this.tail = this.head;
		}else {
			// const prev = 
			this.tail.next = new LLNode(value, null, this.tail)
			this.tail = this.tail.next;
		}

		return value
	}

	public printIncreasingly(): Type[] {
		let current = this.head;
		let values: Type[] = [];

		while (current) {
			values.push(current.value);
			current = current.next;
		}
		return values;
	}
	public printdecreasingly(): Type[] {
		let current = this.tail;
		let values: Type[] = [];

		while (current) {
			values.push(current.value);
			current = current.prev;
		}
		return values;
	}
}

const LL :any = new LinkedListDS<number>()

LL.insert(100);
LL.insert(200);
LL.insert(300);
// console.log(LL.print())
console.log(LL.printIncreasingly())
console.log(LL.printdecreasingly())