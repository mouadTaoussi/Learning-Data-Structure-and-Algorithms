class TreeeNodee {
	public value : any;
	public left: any;
	public right: any;

	constructor(value: any){
		this.value = value;
	}
}

class BT {

	public root: any = null;

	// constructor () {

	// }

	addNode(value: any): any {
		if (this.root == null) {
			this.root = new TreeeNodee(value);
		}
		else {
			this.addNodeRecurrsive(value, this.root)
		}
	}

	private addNodeRecurrsive(value: any, node: any): any {
		if (node.value > value ) {
			if (node.left == null) {
				node.left = new TreeeNodee(value)
			}else {
				this.addNodeRecurrsive(value, node.left)
			}
		}
		else if (node.value < value) {
			if (node.right == null) {
				node.right = new TreeeNodee(value)
			}else {
				this.addNodeRecurrsive(value, node.right)
			}
		}
	}

	public traverse(type : string)  : any {
		if (type == 'preorder') {
			this.preorder(this.root);
		}
		else if (type == 'inorder') {
			this.inorder(this.root);
		}
		else {
			this.postorder(this.root);
		}
	}

	public searchBfs(){
		let queue : number[] = [this.root];
		let current = null;
		
		while (queue.length > 0) {
			const current:any = queue.shift();

			console.log(current.value)

			if(current.left){
				queue.push(current.left);
			}

			if(current.right){
				queue.push(current.right);
			}

		}
	}


	public preorder(current:any){
		if (current) {
			console.log(current.value)
			this.preorder(current.left);
			this.preorder(current.right);
		}
	}
	public inorder(current:any){
		if (current) {
			this.inorder(current.left);
			console.log(current.value)
			this.inorder(current.right);
		}
	}
	public postorder(current:any){
		if (current) {
			this.postorder(current.left);
			this.postorder(current.right);
			console.log(current.value)
		}
	}
}

 const bt = new BT();

 bt.addNode(100)
 bt.addNode(200)
 bt.addNode(300)
 bt.addNode(400)
 bt.addNode(500)
 // bt.traverse('preorder');
 bt.searchBfs()
 // console.log(bt.root)