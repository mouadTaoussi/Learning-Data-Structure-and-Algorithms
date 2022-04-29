var TreeN = /** @class */ (function () {
    function TreeN(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return TreeN;
}());
var BinaryT = /** @class */ (function () {
    function BinaryT() {
        this.root = null;
    }
    BinaryT.prototype.insert = function (value) {
        if (this.root === null) {
            this.root = new TreeN(value);
        }
        else {
            this.add(value, this.root);
        }
    };
    BinaryT.prototype.add = function (value, root) {
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
    };
    // traverse
    BinaryT.prototype.leftTraverse = function (root) {
        if (root) {
            console.log(root.value);
            this.leftTraverse(root.left);
        }
    };
    BinaryT.prototype.rightTraverse = function (root) {
        if (root) {
            console.log(root.value);
            this.leftTraverse(root.right);
        }
    };
    // BFS
    BinaryT.prototype.bfSearch = function () {
        // let root = this.root; 
        var queue = [this.root];
        while (queue.length > 0) {
            var current = queue.shift();
            console.log(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    };
    // DFS
    // PreOrder root left right
    BinaryT.prototype.preOrder = function (root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    };
    // InOrder left root right
    BinaryT.prototype.inOrder = function (root) {
        if (root) {
            this.preOrder(root.left);
            console.log(root.value);
            this.preOrder(root.right);
        }
    };
    // PostOrder left right root
    BinaryT.prototype.postOrder = function (root) {
        if (root) {
            this.preOrder(root.left);
            this.preOrder(root.right);
            console.log(root.value);
        }
    };
    // Search
    BinaryT.prototype.print = function (order) {
        if (order == "preorder") {
            this.preOrder(this.root);
        }
        else if (order == "inorder") {
            this.inOrder(this.root);
        }
        else if (order == "postorder") {
            this.postOrder(this.root);
        }
        else if (order == "bfs") {
            this.bfSearch();
        }
        else {
            console.log(this.root);
        }
        // return this.root;
    };
    // Remove
    // Invert
    BinaryT.prototype.invertBT = function (root) {
        if (root) {
            var left = root.left;
            root.left = root.right;
            root.right = left;
            this.invertBT(root.left);
            this.invertBT(root.right);
        }
    };
    BinaryT.prototype.invert = function () {
        this.invertBT(this.root);
    };
    return BinaryT;
}());
var T = new BinaryT();
var bfs = 'postorder';
T.insert(100);
T.insert(200);
T.insert(50);
T.insert(45);
T.insert(10);
T.insert(300);
T.insert(400);
T.insert(500);
// T.print('preorder')
// T.print('inorder')
// T.print('postorder')
T.print('bfs');
T.invert();
T.print('bfs');
