class Member {
	public data : number;
	public left : any;
	public right : any;

	constructor(data:number, left: any = null, right: any = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class Group {
	public root: any = null;


	public add(value:number): void {
		if (this.root == null) {
			this.root = new Member(value)
		}
		else {
			this.insertRec(value,this.root)
		}
	}
	private insertRec(value:number, r:any): void {
		let root: any = r;

		if (root.data > value){
			if (root.left == null) {
				root.left = new Member(value)
			}else{
				this.insertRec(value, root.left)
			}
		}else if (root.data < value){
			if (root.right == null) {
				root.right = new Member(value)
			}else{
				this.insertRec(value, root.right)
			}
		}
	}
	print(type:any) {
		if (type == "preorder") {
			this.preOrder(this.root)
		}
		if (type == "inorder") {
			this.inOrder(this.root)
		}
		if (type == "postorder") {
			this.postOrder(this.root)
		}
		if (type == "bfs") {
			this.bfs(this.root);
		}
	}
	preOrder(root: any){
		if (root) {
			console.log(root.data)
			this.preOrder(root.left)
			this.preOrder(root.right)
		}
	}
	inOrder(root: any){
		if (root) {
			this.inOrder(root.left)
			console.log(root.data)
			this.inOrder(root.right)
		}
	}
	postOrder(root: any){
		if (root) {
			this.postOrder(root.left)
			this.postOrder(root.right)
			console.log(root.data)
		}
	}

	bfs(root:any) {
		let queue: any = [this.root];

		while (queue.length > 0) {
			const current:any = queue.shift();

			console.log(current.data)

			if (current.left) {
				queue.push(current.left)
			}
			if (current.right) {
				queue.push(current.right)
			}
		}
	}

	search(value:number) {
		if (this.root.data == value) {
			console.log(this.root)
		}else {
			this.binarySearch(value, this.root);
		}
	}
	private binarySearch(value: number, root: any) {
		if (value < root.data) {
			this.binarySearch(value, root.left)
		} else if (value > root.data) {
			this.binarySearch(value, root.right)
		}else {
			console.log(root);
		}
	}
	height(value:number){
		let current: any = this.root;
		let count = 0;

		this.traverse(value, this.root, 0)
		// console.log("height from root to "+ value +" :"+ count)
	}

	private traverse(value:number, root:any, count:number) {
		let c = count;

		if (value < root.data) {
			c++;
			this.traverse(value, root.left, c)
		} else if (value > root.data) {
			c++;
			this.traverse(value, root.right, c)
		}else {
			console.log("height from root to "+ value +" :"+ c);
		}
	}
}


const BTS = new Group();


BTS.add(100);
BTS.add(200);
BTS.add(300);
BTS.add(400);
BTS.add(500);
BTS.add(10);
BTS.add(20);
BTS.add(30);
BTS.add(40);
BTS.add(50);
BTS.print('inorder');
BTS.search(300);
BTS.height(300);