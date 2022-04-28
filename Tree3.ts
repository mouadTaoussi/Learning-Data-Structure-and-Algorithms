class TreeN {
	private value:  number;
	private left:  any;
	private right:  any;

	constructor(value: number, left: any = null, right: any = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

class BinaryT {
	private root: any = null;

	insert ( value: number ): void {

		if ( this.root === null ) {
			this.root = new TreeN(value)
		}
		else {
			this.add(value, this.root);

		}

	}
	
	add(value:number, root:any): any {
		if (value < root.value) {
			if (root.left == null) {
				root.left = new TreeN(value);
			}
			else {
				this.add(value, root.left);
			}
		}
		if (value > root.value) {
			if (root.right == null) {
				root.right = new TreeN(value);
			}
			else {
				this.add(value, root.right);
			}
		}
	}

	// traverse
	public leftTraverse(root: any) :void {
		if (root) {
			console.log(root.value)
			this.leftTraverse(root.left);
		}
	}
	public rightTraverse(root: any) :void {
		if (root) {
			console.log(root.value)
			this.leftTraverse(root.right);
		}
	}

	// BFS
	public bfSearch(): void {
		// let root = this.root; 
		let queue: any[] = [this.root];

		while(queue.length > 0) {

			const current: any = queue.shift();

			console.log(current.value);

			if (current.left) {
				queue.push(current.left);
			}
			if (current.right) {
				queue.push(current.right);
			}
		}
	}

	// DFS
		// PreOrder root left right
		public preOrder(root: any) {
			if (root) {
				console.log(root.value)
				this.preOrder(root.left)
				this.preOrder(root.right)
			}
		}
		// InOrder left root right
		public inOrder(root: any) {
			if (root) {
				this.preOrder(root.left)
				console.log(root.value)
				this.preOrder(root.right)
			}
		}
		// PostOrder left right root
		public postOrder(root: any) {
			if (root) {
				this.preOrder(root.left)
				this.preOrder(root.right)
				console.log(root.value)
			}
		}


	// Search
	public print(order: 'preorder' | 'inorder' | 'postorder' | 'bfs'): any {
		if (order == "preorder") {
			this.preOrder(this.root)
		}
		else if (order == "inorder") {
			this.inOrder(this.root)
		}
		else if (order == "postorder") {
			this.postOrder(this.root)
		}	
		else if (order == "bfs") {
			this.bfSearch()
		}	
		// return this.root;
	}
	

	// Remove
}

const T: any = new BinaryT();
const bfs: string = 'postorder';


T.insert(100)
T.insert(200)
T.insert(50)
T.insert(45)
T.insert(10)
T.insert(300)
T.insert(400)
T.insert(500)


T.print('bfs')

// T.print('preorder')
// T.print('inorder')
// T.print('postorder')