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

	public insert(value:number): void {
		if (this.root === null) {
			this.root = new NodeTree(value);
		}else {
			this.add(value, this.root);
		}
	}

	public add(value: number, root: any): void {
		if (value < root.value) {
			if (root.left == null) {
				root.left = new NodeTree(value);
			}
			else {
				this.add(value, root.left);
			}
		}
		else if (value > root.value) {
			if (root.right == null) {
				root.right = new NodeTree(value);
			}
			else {
				this.add(value, root.right);
			}
		}
	}

	
	// DFS Depth First Search
	public print(order: 'preorder' | 'inorder' | 'postorder'): any {
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
	public preOrder(root: any): void {
		if (root) {
			console.log(root.value);
			this.preOrder(root.left);
			this.preOrder(root.right);
		}
	}
	public inOrder(root: any): void {
		if (root) {
			this.inOrder(root.left);
			console.log(root.value);
			this.inOrder(root.right);
		}
	}
	public postOrder(root: any): void {
		if (root) {
			this.postOrder(root.left);
			this.postOrder(root.right);
			console.log(root.value);
		}
	}


	// BFS (Breadthe First Search)
	public bfSearch(): void {
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
	public search(value: string): void {
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
	public min(): void {
		let current: any = this.root;

		while (current.left != null) {
			current = current.left;
		}

		console.log(current.value)
	}
	public max(): void {
		let current: any = this.root;

		while (current.right != null) {
			current = current.right;
		}

		console.log(current.value)
	}


	// Height
	public heightFrom(value: any) {
		this.heightFromNode(value, this.root);
	}
	public heightFromNode(value: number, root: any, count: number = 0): any {
		let countEdges: number = count;

		if (root) {
			countEdges++;
			console.log(countEdges)
			if (value < root.value) {
				this.heightFromNode(value, root.left, countEdges)
			}
			else if (value > root.value) {
				this.heightFromNode(value, root.right, countEdges)
			}

		}
		return countEdges;
	}
	public height(): void {
		
	}

	// Number of nodes
	public nodesCount(): void {
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

		console.log(nodesCount)
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
}


const T: any = new BinaryTree();
const bfs: string = 'postorder';


T.insert(100)
T.insert(200)
T.insert(50)
T.insert(45)
T.insert(10)
T.insert(300)
T.insert(400)
T.insert(500)

console.log(bfs)
T.print(bfs)

console.log('search value 300')
T.search(300)

console.log('BFS')
T.bfSearch();

console.log("Minimum value")
T.min();

console.log("Maximum value")
T.max();

console.log('Height from node 50')
T.heightFrom(10)

console.log('Nodes count')
T.nodesCount();

console.log('Invert Binary (BFS)')
T.bfSearch()

T.invert()
console.log('inverted')
T.bfSearch()


