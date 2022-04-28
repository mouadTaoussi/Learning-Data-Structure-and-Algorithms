class TreeNode {
	private value: number;
	private left: any;
	private right: any;

	constructor(value: any, left:any = null,right:any = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

class Tree {
	private root: any = null;
	private size: number = 0;

	public insert(value: number): void {
		if (this.root == null ) {
			this.root = new TreeNode(value);
		}else {
			this.add(value, this.root);
		}
	};
	private add(value: number, root: any): void {
		let left = root;
		let right = root;

		if (value < root.value) {
			if (root.left == null ){
				root.left = new TreeNode(value);
				this.size++;
			} 
			else {
				this.add(value, left.left);
			}
		}
		else if (value > root.value) {
			if (root.right == null ){
				root.right = new TreeNode(value);
				this.size++;
			}
			else {
				this.add(value, right.right);
			}
		}
	}
	public traverse(root: any): void {
		let right: any  = root;
		let left: any  = root;

		if (root.left != null) {
			console.log(root.left.value);
			this.traverse(root.left);
		}
		if (root.right != null) {
			console.log(root.right.value);
			this.traverse(root.right);
		}
	}
	public rightTraverse(): void {
		let right: any = this.root.right;

		while (right.right != null) {
			console.log(right.value);

			right = right.right;
		}
	}
	public leftTraverse(): void {
		let left: any = this.root.left;

		while (left != null) {
			console.log(left.value);

			left = left.left;
		}
	}
	public searchLeft(value: number, root: any): void {
		let left: any = root;

		if (left != null) {
			if (value == left.value) {
				console.log(true);
			}
			else {
				this.searchLeft(value,left.left);
			}
		}
		else {
			console.log(false);
		}
	}
	public searchRight(value: number, root: any): void {
		let right: any = root;

		if (right != null) {
			if (value == right.value) {
				console.log(true);
			}
			else {
				this.searchLeft(value,right.right);
			}
		}
		else {
			console.log(false);
		}
	}
	public min(): void {
		let root: any = this.root.left;

		while (root.left != null) {
			root = root.left;
		}

		console.log(root.value)
	}
	public max(): void {
		let root: any = this.root.right;

		while (root.right != null) {
			root = root.right;
		}

		console.log(root.value)
	}
	public contains(value:number): void {
		if (this.root.value == value) {
			console.log(true);
		}else {
			this.searchLeft(value, this.root);
			this.searchRight(value, this.root);
		}
	}
	public printElements(): void {
		this.traverse(this.root);
	}
	public length(): void {
		console.log(this.size);
	}
}

const T = new Tree();



T.insert(100);
T.insert(90);
T.insert(80);
T.insert(70);
T.insert(300);
T.insert(400);
T.insert(500);
T.insert(250);
T.insert(420);
T.insert(600);
T.insert(700);
// console.log('PrintElements');
// T.printElements()
console.log('Left');
T.leftTraverse();
console.log('Right');
T.rightTraverse();
console.log('Size');
T.length();
console.log('Contains: 100');
T.contains(2540);
console.log('Minimum Value');
T.min();
console.log('Maximum Value');
T.max();
// console.log('recursive function');
// Temp
// this.root.left.left = new TreeNode(value);