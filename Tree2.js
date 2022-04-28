var NodeTree = /** @class */ (function () {
    function NodeTree(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return NodeTree;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.size = 0;
    }
    BinaryTree.prototype.insert = function (value) {
        if (this.root === null) {
            this.root = new NodeTree(value);
        }
        else {
            this.add(value, this.root);
        }
    };
    BinaryTree.prototype.add = function (value, root) {
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
    };
    // DFS Depth First Search
    BinaryTree.prototype.print = function (order) {
        if (order == "preorder") {
            this.preOrder(this.root);
        }
        else if (order == "inorder") {
            this.inOrder(this.root);
        }
        else if (order == "postorder") {
            this.postOrder(this.root);
        }
        // return this.root;
    };
    BinaryTree.prototype.preOrder = function (root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    };
    BinaryTree.prototype.inOrder = function (root) {
        if (root) {
            this.preOrder(root.left);
            console.log(root.value);
            this.preOrder(root.right);
        }
    };
    BinaryTree.prototype.postOrder = function (root) {
        if (root) {
            this.preOrder(root.left);
            this.preOrder(root.right);
            console.log(root.value);
        }
    };
    // BFS (Breadthe First Search)
    BinaryTree.prototype.bfSearch = function () {
        var root = this.root;
        var queue = [this.root];
        while (queue.length > 0) {
            var current = queue.shift();
            console.log(current.value);
            if (current.left != null) {
                queue.push(current.left);
            }
            if (current.right != null) {
                queue.push(current.right);
            }
        }
    };
    // Binary Search
    BinaryTree.prototype.search = function (value) {
        this.searchTraverse(value, this.root);
    };
    BinaryTree.prototype.searchTraverse = function (value, root) {
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
    };
    return BinaryTree;
}());
var T = new BinaryTree();
var bfs = 'postorder';
T.insert(100);
T.insert(200);
T.insert(50);
T.insert(45);
T.insert(10);
T.insert(300);
T.insert(400);
T.insert(500);
console.log(bfs);
T.print(bfs);
console.log('search');
T.search(300);
console.log('search');
T.bfSearch();
