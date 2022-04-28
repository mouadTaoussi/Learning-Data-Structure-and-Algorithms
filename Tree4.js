var treeNode = /** @class */ (function () {
    function treeNode(value, subtrees) {
        if (subtrees === void 0) { subtrees = []; }
        this.subtrees = [];
        this.value = value;
        this.subtrees = subtrees;
    }
    return treeNode;
}());
var treeDS = /** @class */ (function () {
    function treeDS() {
    }
    treeDS.prototype.insert = function (value, parent) {
        if (parent === void 0) { parent = null; }
        var newNode = new treeNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
        else if (parent != null) {
            if (this.root.value == parent) {
                this.root.subtrees.push(newNode);
            }
            else {
                var parentNode = this.findBFS(parent);
                parentNode.subtrees.push(newNode);
            }
        }
    };
    treeDS.prototype.findBFS = function (value) {
        var queue = [this.root];
        var element = null;
        while (queue.length > 0) {
            var current = queue.shift();
            if (current.value == value) {
                element = current;
            }
            else {
                for (var i = 0; current.subtrees.length > i; ++i) {
                    // code...
                    queue.push(current.subtrees[i]);
                }
            }
        }
        return element;
    };
    treeDS.prototype.print = function () {
        // console.log(this.root)
        this.traverse(this.root);
    };
    treeDS.prototype.traverse = function (root) {
        if (root !== null) {
            for (var i = 0; root.subtrees.length > i; ++i) {
                // code...
                console.log(root.subtrees[i].value);
                this.traverse(root.subtrees[i]);
            }
        }
    };
    return treeDS;
}());
var T = new treeDS();
T.insert(200);
T.insert(100, 200);
T.insert(200, 200);
T.insert(300, 200);
T.insert(400, 200);
T.insert(500, 200);
T.insert(600, 200);
T.insert(800, 300);
T.insert(900, 300);
T.insert(1000, 100);
T.insert(700, 500);
T.print();
