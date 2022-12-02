class Node {
  data; 
  left;
  right;

  constructor(data, left = null, right = null ) {
    this.data  = data;
    this.left  = left;
    this.right  = right;
  } 
}

class BinaryTree {
  root = null;


  add(value) {
    if (this.root == null) {
      this.root = new Node(value);
    }
    else {
      this.insert(value, this.root)
    }
  }
  insert(value, node) {
    if (value < node.data) {
      if (node.left == null) {
        node.left  = new Node(value)
      }else {
        this.insert(value, node.left)
      }
    }
    else if (value > node.data) {
      if (node.right == null) {
        node.right  = new Node(value)
      }else {
        this.insert(value, node.right)
      }
    }
  }

  bfs () {
    let queue = [this.root]

    while (queue.length != 0) {
      const current = queue.shift();

			console.log(current.data)

      if (current.left) {
        current.left
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
  }
  invertBT() {
    this.invert(this.root);
  }
  invert(node) {
    if (node) {
      const temp = node.left;
      node.left = node.right
      node.right = temp;
      this.invert(node.left)
      this.invert(node.right)
    }
  }
  preorder(node) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left)
      this.preorder(node.right)      
    }
  }
  inorder(node) {
    if (node) {
      this.inorder(node.left)
      console.log(node.data);
      this.inorder(node.right)
    }
    
  }
  postorder(node) {
    if (node) {
      this.postorder(node.left)
      this.postorder(node.right)
      console.log(node.data); 
    }
  }
  print(type) {
    if (type == 'preorder') {
      this.preorder(this.root);
    }
    else if (type == 'inorder') {
      this.inorder(this.root);
    }
    else if (type == 'postorder') {
      this.postorder(this.root);
    }else {
      console.log(this.root)
    }
   }
  
}


const BT = new BinaryTree();

BT.add(100)
BT.add(200)
BT.add(300)
BT.add(500)
BT.invertBT();
BT.print()
// BT.bfs()