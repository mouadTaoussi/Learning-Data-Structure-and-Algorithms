class TreeNode {
	public value: number;
	public left: any;
	public right: any;

	constructor(value:number,left:any = null, right:any = null){
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);

n1.right = n2;
n2.right = n3;
n3.right = n4;

function leftRotation(node: any) {
  const newParent = node.right; // e.g. 3
  const grandparent = node.parent; // e.g. 1

  // make 1 the parent of 3 (previously was the parent of 2)
  swapParentChild(node, newParent, grandparent);

  // do LL rotation
  newParent.left = node; // makes 2 the left child of 3
  node.right = undefined; // clean 2's right child

  return newParent; // 3 is the new parent (previously was 2)
}

function swapParentChild(oldChild: any, newChild: any, parent: any) {
  if (parent) {
    const side = oldChild.isParentRightChild ? 'right' : 'left';
    // this set parent child AND also
    parent[side] = newChild;
  } else {
    // no parent? so set it to null
    newChild.parent = null;
  }
}

const newParent = leftRotation(n2);
console.log(n3); // true
console.log(newParent); // true