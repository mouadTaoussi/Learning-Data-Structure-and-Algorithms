class treeNode {
	private value: any;
	private subtrees: any = [];

	constructor(value: any,subtrees: any = []) {
		this.value = value;
		this.subtrees = subtrees;
	}
}


class treeDS {
	private root: any;

	insert(value: any, parent: any = null) {
		const newNode: any = new treeNode(value);

		if (this.root == null) {
			this.root = newNode;
		}
		else if (parent != null) {
			if (this.root.value == parent) {
				this.root.subtrees.push(newNode);
			}
			else {
				const parentNode = this.findBFS(parent);

				parentNode.subtrees.push(newNode);
			}
		}
	}

	findBFS(value: any) {
		let queue: any = [this.root];
		let element = null

		while(queue.length > 0) {
			const current: any = queue.shift();

			if (current.value == value) {
				element = current
			}
			else {
				for (var i = 0; current.subtrees.length > i; ++i) {
					// code...
					queue.push(current.subtrees[i]);
				}
			}

			
		}
		return element
	}
	print(){
		// console.log(this.root)
		this.traverse(this.root);
	}
	traverse(root: any) {

		if (root !== null) {

			for (var i = 0; root.subtrees.length > i; ++i) {
				// code...
				console.log(root.subtrees[i].value);
				this.traverse(root.subtrees[i])
			}

		}
	}
}


const T  = new treeDS();

T.insert(200)

T.insert(100,200)
T.insert(200,200)
T.insert(300,200)
T.insert(400,200)
T.insert(500,200)
T.insert(600,200)

T.insert(800,300)
T.insert(900,300)

T.insert(1000,100)



T.insert(700,500)

T.print()

