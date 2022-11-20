// From: https://dev.to/igorok/javascript-avl-tree-20dg

class Tree {
    constructor() {
        this.root = undefined;
    }

    public rotateLeft(node: any): any {
        const root = node.right;

        const left = node;
        left.right = root.left;
        root.left = left;

        left.fixHeight();
        root.fixHeight();

        return root;
    }

    public rotateRight(node: any): any {
        const root = node.left;

        const right = node;
        right.left = root.right;
        root.right = right;

        right.fixHeight();
        root.fixHeight();

        return root;
    }

    public balance(node: any): any {
        node.fixHeight();

        if (node.getBalanceFactor() === 2 ) {
            if (node.right.getBalanceFactor() < 0) {
                node.right = this.rotateRight(node.right);
            }
            return this.rotateLeft(node);
        }

        if (node.getBalanceFactor() === -2) {
            if (node.left.getBalanceFactor() > 0) {
                node.left = this.rotateLeft(node.left);
            }
            return this.rotateRight(node);
        }

        return node;
    }

    public insert(node: any): any {
        if (! this.root) {
            this.root = node;
            return;
        }
        this.root = this._insert(this.root, node);
    }

    private _insert(vertex: any, node: any): any {
        if (node.key === vertex.key) {
            return vertex;
        }
        if (node.key < vertex.key) {
            if (! vertex.left) {
                vertex.left = node;
            } else {
                vertex.left = this._insert(vertex.left, node);
            }
        } else {
            if (! vertex.right) {
                vertex.right = node;
            } else {
                vertex.right = this._insert(vertex.right, node);
            }
        }

        return this.balance(vertex);
    }

    public findMin(node: any): any {
        return node.left ? this.findMin(node.left) : node;
    }

    public removeMin(node: any): any {
        if (! node.left) {
            return node.right;
        }
        node.left = this.removeMin(node.left);
        return this.balance(node);
    }

    public remove(k: any): any {
        this.root = this._remove(this.root, k);
        return this.root;
    }

    private _remove(node: any, k: any): any {
        if (! node) {
            return;
        }

        if (k < node.key) {
            node.left = this._remove(node.left, k);
        } else if (k > node.key) {
            node.right = this._remove(node.right, k);
        } else {
            const left = node.left;
            const right = node.right;

            if (! right) {
                return left;
            }

            const min = this.findMin(right);
            min.left = left;
            min.right = this.removeMin(right);

            node = this.balance(min);
        }

        return node;
    }

    public find(k: any, node: any): any {
        if (! node) {
            node = this.root;
        }

        if (k === node.key) {
            return node;
        } else if (k < node.key) {
            if (! node.left) {
                return;
            }
            return this.find(k, node.left);
        } else if (k > node.key) {
            if (! node.right) {
                return;
            }
            return this.find(k, node.right);
        }
    }
}