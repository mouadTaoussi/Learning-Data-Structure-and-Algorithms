class Nodee {
	public data: any; 
	public next: any; 

	constructor (data:any, next:any) {
		this.data = data;
		this.next = next;
	}
}

class LinkedLists {
	public head: any = null;
	private size: number = 0;

	public append(value: any): any {
		let current = this.head;

		if (this.head == null) {
			this.head = new Nodee(value, null);
			return value;
		}

		while (current.next != null) {
			// Step forward
			current = current.next;
		}

		if (current.next == null) {
			current.next = new Nodee(value, null)
			return value;
		}
		return -1;
	}
	public appendAt(value:any , after:any): any {
		let current: any = this.head;
		let previous: any = null;
		// @Todo  remove  <current.next != null> and remplace by <current>
		while (current.next != null) {
			if (current.data == after) {
				// previous = current;

				let oldNode: any = current.next;

				current.next = new Nodee(value, oldNode);
			}

			// Step Forward
			current = current.next;
		}
	}
	public update(value:any, newValue: any): any {
		let current: any = this.head;
		let previous: any = null;

		while( current ) {
			if( current.data != value ) {
				previous = current;
				// Step Forward
				current = current.next;
			}
			else {
				previous.next = new Nodee(newValue, current.next);
				break
			}
		}
	}
	public remove(value:any): any {
		let current: any = this.head;
		let previous: any = null;

		if (this.head.data == value) {
			this.head = this.head.next;
		}
		if (this.head.next == null) {
			this.head = null;
		}

		while (current.data !== value) {
			if (current.data !== value ) {
				let previous = current;
			}
			// Step Forward
			current = current.next;
			
		}

		previous.next = current.next;

	}
	public print(): any {
		let current: any = this.head;
		let values: any[] = [];

		while (current) {
			values.push(current.data);
			// Step forward
			current = current.next;
		}
		return values;
	}
	// Not 
	public invert(): any {
		
	}
}

const LL: any =  new LinkedLists()

LL.append(100)
LL.append(200)
LL.append(300)
LL.append(400)
LL.append(500)
LL.appendAt(600,100);
LL.update(200,700);
LL.remove(300)
console.log(LL.print());
LL.invert()
console.log(LL.print());

// LL.append({
// 	_id: 'hht54th65g3bfd35fbd3sg3',
// 	name : 'mouadTaoussi',
// })
// LL.append({
// 	_id: 'fg5g687eh58bd683rg7uky6',
// 	name : 'alanSmith',
// })
// LL.append({
// 	_id: 'bg5trh67bf6reg65f68erg8',
// 	name : 'jhonDoe',
// })
// LL.append({
// 	_id: 'nhr6g65ezf68rth76kt65n3',
// 	name : 'janesmith',
// })
// LL.append({
// 	_id: 'bd79zv65sv65fd6fgn35bf3',
// 	name : 'mikepeterson',
// })

// LL.appendAt({
// 	_id: 'fg5g687eh58bd683rg7uky6',
// 	name : 'alanSmith',
// },{
// 	_id: 'bg54fgb4bfd24bfd24bd24b',
// 	name : 'walidbnd',
// });