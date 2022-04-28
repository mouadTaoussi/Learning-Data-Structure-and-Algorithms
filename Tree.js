var TreeNode = /** @class */ (function () {
    function TreeNode(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
        this.size = 0;
    }
    Tree.prototype.insert = function (value) {
        if (this.root == null) {
            this.root = new TreeNode(value);
        }
        else {
            this.add(value, this.root);
        }
    };
    ;
    Tree.prototype.add = function (value, root) {
        var left = root;
        var right = root;
        if (value < root.value) {
            if (root.left == null) {
                root.left = new TreeNode(value);
                this.size++;
            }
            else {
                this.add(value, left.left);
            }
        }
        else if (value > root.value) {
            if (root.right == null) {
                root.right = new TreeNode(value);
                this.size++;
            }
            else {
                this.add(value, right.right);
            }
        }
    };
    Tree.prototype.traverse = function (root) {
        var right = root;
        var left = root;
        if (root.left != null) {
            console.log(root.left.value);
            this.traverse(root.left);
        }
        if (root.right != null) {
            console.log(root.right.value);
            this.traverse(root.right);
        }
    };
    Tree.prototype.rightTraverse = function () {
        var right = this.root.right;
        while (right.right != null) {
            console.log(right.value);
            right = right.right;
        }
    };
    Tree.prototype.leftTraverse = function () {
        var left = this.root.left;
        while (left != null) {
            console.log(left.value);
            left = left.left;
        }
    };
    Tree.prototype.searchLeft = function (value, root) {
        var left = root;
        if (left != null) {
            if (value == left.value) {
                console.log(true);
            }
            else {
                this.searchLeft(value, left.left);
            }
        }
        else {
            console.log(false);
        }
    };
    Tree.prototype.searchRight = function (value, root) {
        var right = root;
        if (right != null) {
            if (value == right.value) {
                console.log(true);
            }
            else {
                this.searchLeft(value, right.right);
            }
        }
        else {
            console.log(false);
        }
    };
    Tree.prototype.contains = function (value) {
        if (this.root.value == value) {
            console.log(true);
        }
        else {
            this.searchLeft(value, this.root);
            this.searchRight(value, this.root);
        }
    };
    Tree.prototype.printElements = function () {
        this.traverse(this.root);
    };
    Tree.prototype.length = function () {
        console.log(this.size);
    };
    Tree.prototype.min = function () {
        var root = this.root.left;
        while (root.left != null) {
            root = root.left;
        }
        console.log(root.value);
    };
    Tree.prototype.max = function () {
        var root = this.root.right;
        while (root.right != null) {
            root = root.right;
        }
        console.log(root.value);
    };
    return Tree;
}());
var T = new Tree();
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
