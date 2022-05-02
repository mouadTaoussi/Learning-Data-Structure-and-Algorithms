class NodeTree {
	private value: number;
	private left: any;
	private right: any;

	constructor(value:number,left:any = null, right:any = null){
		this.value = value;
		this.left = left;
		this.right = right;
	}
}



class BinaryTree {
	private root: any = null;
	private size: number = 0;

	public insert(value:number) {
		if (this.root === null) {
			this.root = new NodeTree(value);
		}else {
			this.add(value, this.root);
		}
	}

	public add(value: number, root: any) {
		if (value < root.value) {
			if (root.left == null) {
				root.left = new NodeTree(value);
			}
			else {
				this.add(value, root.left);
				// Rotation AVL
				const balanceFactor: number = this.getBalanceFactor();
				console.log('Balance factor - left: ' + balanceFactor)
				// if (balanceFactor > 1) {
				// 	console.log('You have surpassed the balance factor!!! at Left: ' + balanceFactor)
				// }
			}
		}
		else if (value > root.value) {
			if (root.right == null) {
				root.right = new NodeTree(value);
			}
			else {
				this.add(value, root.right);
				// Rotation AVL
				const balanceFactor: number = this.getBalanceFactor();
				console.log('Balance factor - right: ' + balanceFactor)
				// if (balanceFactor < -1) {
				// 	console.log('You have surpassed the balance factor!!! at Right: ' + balanceFactor)
				// }
			}
		}
	}

	
	// DFS Depth First Search
	public print(order: 'preorder' | 'inorder' | 'postorder') {
		if (order == "preorder") {
			this.preOrder(this.root)
		}
		else if (order == "inorder") {
			this.inOrder(this.root)
		}
		else if (order == "postorder") {
			this.postOrder(this.root)
		}		
		// return this.root;
	}
	public preOrder(root: any) {
		if (root) {
			console.log(root.value);
			this.preOrder(root.left);
			this.preOrder(root.right);
		}
	}
	public inOrder(root: any) {
		if (root) {
			this.inOrder(root.left);
			console.log(root.value);
			this.inOrder(root.right);
		}
	}
	public postOrder(root: any) {
		if (root) {
			this.postOrder(root.left);
			this.postOrder(root.right);
			console.log(root.value);
		}
	}


	// BFS (Breadthe First Search)
	public bfSearch() {
		let root: any = this.root;
		let queue: any[] = [this.root];

		while(queue.length > 0) {

			const current: any = queue.shift()

			console.log(current.value)

			if (current.left != null) {
				queue.push(current.left)
			}
			if (current.right != null) {
				queue.push(current.right)
			}

		}
	}


	// Binary Search
	public search(value: string) {
		this.searchTraverse(value, this.root);
	}
	public searchTraverse(value: any, root: any): any{
		if (value == root.value) {
			console.log(root.value);
			return;
		}
		else {
			if (value < root.value) {
				this.searchTraverse(value, root.left);
			}
			if (value > root.value) {
				this.searchTraverse(value, root.right);
			}
		}
	}


	// Min Max
	public min() {
		let current: any = this.root;

		while (current.left != null) {
			current = current.left;
		}

		return current.value
	}
	public max() {
		let current: any = this.root;

		while (current.right != null) {
			current = current.right;
		}

		return current.value
	}


	// Height
	public heightFromNodeRec(value: any) {
		this.heightFrom(value, this.root);
	}
	public heightFromNode(value: any) {
		let countEdges: number = 0;
		let current: any = this.root;

		while (current.left != null || current.right != null) {
			countEdges++;
			if (value < current.value) {
				current = current.left
			}
			if (value > current.value) {
				current = current.right
			}

		}

		return countEdges;
	}
	public heightFrom(value: any, root: any, count: number = 0) {
		let countEdges: number = count;

		if (root) {
			countEdges++;
			console.log(countEdges - 1)
			if (value < root.value) {
				this.heightFrom(value, root.left, countEdges)
			}
			else if (value > root.value) {
				this.heightFrom(value, root.right, countEdges)
			}

		}
	}
	public height() {
		
	}

	// Number of nodes
	public nodesCount() {
		let queue: any = [this.root];
		let nodesCount: number = 0;

		while(queue.length > 0){
			const currentElement: any = queue.shift();
			nodesCount++;

			if (currentElement.left != null){
				queue.push(currentElement.left);
			}
			if (currentElement.right != null) {
				queue.push(currentElement.right);
			}
		}

		console.log(nodesCount);
	}

	
	// Invert
	invertBT(root : any) {
		if (root) {
			const left = root.left;

			root.left = root.right;
			root.right = left;

			this.invertBT(root.left)
			this.invertBT(root.right)
		}
	}
	invert(){
		this.invertBT(this.root)
	}

	// AVL Tree
	public getBalanceFactor() : number {
		return this.heightFromNode(this.min()) - this.heightFromNode(this.max())
	}
	// LL
	// LR
	// RR
	// RL
}


const T: any = new BinaryTree();
const bfs: string = 'postorder';


T.insert(100)
T.insert(200)
T.insert(50)
T.insert(45)
T.insert(10)
// T.insert(300)
// T.insert(400)
// T.insert(500)
// Unbalanced binary tree
// T.insert(600)
// T.insert(700)

// console.log(bfs)
// T.print(bfs)

// console.log('search value 300')
// T.search(300)

// console.log('BFS')
// T.bfSearch();

console.log("Minimum value")
console.log(T.min());

console.log("Maximum value")
console.log(T.max());

console.log('Height from node 10')
// T.heightFromNodeRec(10)
console.log(T.heightFromNode(10))

console.log('Balance Factor')
console.log(T.getBalanceFactor())

// console.log('Nodes count')
// T.nodesCount();

// console.log('Invert Binary (BFS)')
// T.bfSearch()

// T.invert()
// console.log('inverted')
// T.bfSearch()


