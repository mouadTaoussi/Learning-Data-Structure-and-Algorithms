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

console.log('search')
T.search(300)

console.log('search')
T.bfSearch();
