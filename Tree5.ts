class TreeNodeDS {
	private value: any; 
	private subtrees :any = [];

	constructor(value: any, subtrees: any = []) {
		this.value = value;
		this.subtrees = subtrees;
	}
}


class TreeDS {
	private root: any;

	insert(value:any, parent: any = null) {
		const newNode: any = new TreeNodeDS(value);

		if (this.root == null) {
			this.root = newNode;
		}
		else {
			if (parent == this.root.value) { 
				this.root.subtrees.push(newNode);
			}

			const parentElement = this.findBFS(parent);

			parentElement.subtrees.push(newNode);

		}
	}
	findBFS(value: any) {
		let queue: any = [this.root];
		let searchedElement: any = null;

		while (queue.length > 0) {
			const current: any = queue.shift();

			if (current.value == value) {
				searchedElement = current;
				break
			}
			
			for (var i = 0; i < current.subtrees.length; ++i) {
				// code...
				queue.push(current.subtrees[i]);
			}
		}

		return searchedElement;

	}
	traverseBFS(value: any) {
		let queue: any = [this.root];
		let elements: any = [];

		while (queue.length > 0) {
			const current: any = queue.shift();

			elements.push(current.value);

			for (var i = 0; i < current.subtrees.length; ++i) {
				// code...
				queue.push(current.subtrees[i]);
			}
		}
		console.log(elements)
	}

	print() {
		console.log(this.root);
	}
}

const T: any = new TreeDS(); 


T.insert(100);

T.insert(200, 100);
T.insert(300, 100);
T.insert(400, 100);
T.insert(500, 100);
T.insert(600, 100);

T.insert(700, 200);
T.insert(800, 200);
T.insert(900, 200);
T.insert(1000, 200);
T.insert(1100, 200);

T.insert(1200, 300);
T.insert(1300, 300);
T.insert(1400, 300);
T.insert(1500, 300);
T.insert(1600, 300);



// T.print();
T.traverseBFS();