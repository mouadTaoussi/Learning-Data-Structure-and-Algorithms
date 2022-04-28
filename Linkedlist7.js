"use strict";
exports.__esModule = true;
var moment = require("moment");
var Block = /** @class */ (function () {
    function Block(data, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
    return Block;
}());
var Data = /** @class */ (function () {
    function Data(data) {
        this.index = data.index;
        this.name = data.name;
        this.lastname = data.lastname;
        this.walletAmount = data.walletAmount;
        this.spent = data.spent;
        this.currency = data.currency;
        this.updated = data.updated;
    }
    return Data;
}());
var BlockChain = /** @class */ (function () {
    function BlockChain() {
        this.length = 0;
    }
    BlockChain.prototype.insertNode = function (data) {
        var block_data = new Data(data);
        // Set the index of the current Block
        block_data.index = this.length + 1;
        block_data.updated = false;
        if (this.head == null) {
            // Add new Block
            this.head = new Block(block_data);
            this.tail = this.head;
            // Length increased
            this.length++;
        }
        else {
            this.tail.next = new Block(block_data, null, this.tail);
            this.tail = this.tail.next;
            // Length increased
            this.length++;
            ;
        }
    };
    BlockChain.prototype.updateNode = function (index, data) {
        var current = this.head;
        var previous = null;
        var block_data = new Data(data);
        // Set the updated of the current Block
        block_data.updated = moment().format();
        if (index == this.head.data.index) {
            // Keep the current index
            var index_1 = current.data.index;
            block_data.index = index_1;
            // Save Changes
            this.head = new Block(block_data, this.head.next, null);
        }
        else {
            while (current) {
                if (current.data.index != index) {
                    previous = current;
                    current = current.next;
                }
                else {
                    // Keep the current index
                    var index_2 = previous.next.data.index;
                    block_data.index = index_2;
                    // Save Changes
                    previous.next = new Block(block_data, current.next, previous);
                    break;
                }
            }
        }
    };
    BlockChain.prototype.insertNodeAfter = function (index, data) {
        var current = this.head;
        var previous = 0;
        var block_data = new Data(data);
        // Set the index of the current Block
        while (current) {
            if (current.data.index != index) {
                previous = current;
                current = current.next;
            }
            else {
                var oldNextNode = current.next;
                var oldPrevNode = current.next.prev;
                block_data.index = current.next.data.index;
                // console.log(previous.next)
                // console.log(current)
                // current.next = new Block(block_data, current.next, previous);
                // current.next.next.prev = new Block(block_data, current.next, previous);
                current.next = new Block(block_data, current.next, current);
                current.next.next.prev = new Block(block_data, current.next, current);
                this.length++;
                break;
            }
        }
    };
    BlockChain.prototype.removerNode = function (index) {
        var current = this.head;
        var previous = null;
        if (index == 1) {
            this.head = this.head.next;
        }
        else {
            while (current != null) {
                if (current.data.index != index) {
                    console.log(index);
                    previous = current;
                    current = current.next;
                }
                else {
                    previous.next = current.next;
                    current.next.prev = previous;
                    break;
                }
            }
        }
    };
    BlockChain.prototype.blocks = function () {
        var current = this.head;
        var blocks = [];
        while (current) {
            blocks.push(current.data);
            current = current.next;
        }
        return blocks;
    };
    return BlockChain;
}());
var BlockChainInstance = new BlockChain();
BlockChainInstance.insertNode({
    name: "Mouad",
    lastname: "Taoussi",
    walletAmount: 5544,
    spent: 274,
    currency: "MAD"
});
BlockChainInstance.insertNode({
    name: "Alan",
    lastname: "Smith",
    walletAmount: 4542,
    spent: 422,
    currency: "USD"
});
BlockChainInstance.insertNode({
    name: "Walid",
    lastname: "Bendaou",
    walletAmount: 7868,
    spent: 397,
    currency: "MAD"
});
BlockChainInstance.insertNode({
    name: "Mike",
    lastname: "Traversy",
    walletAmount: -7577,
    spent: 8985,
    currency: "GBP"
});
BlockChainInstance.insertNode({
    name: "Jhone",
    lastname: "Doe",
    walletAmount: 7545,
    spent: 788,
    currency: "CHYW"
});
BlockChainInstance.insertNode({
    name: "Will",
    lastname: "Cave",
    walletAmount: 5877,
    spent: 211,
    currency: "JY"
});
BlockChainInstance.updateNode(1, {
    name: "Json",
    lastname: "Cave",
    walletAmount: 5877,
    spent: 211,
    currency: "AUD"
});
BlockChainInstance.insertNodeAfter(3, {
    name: "diguheriugejgoirjgeoigeroijg",
    lastname: "Cave",
    walletAmount: 5877,
    spent: 211,
    currency: "AUD"
});
BlockChainInstance.removerNode(2);
// BlockChainInstance.removerNode(2)
// BlockChainInstance.removerNode(3)
// BlockChainInstance.removerNode(4)
// BlockChainInstance.removerNode(5)
// BlockChainInstance.removerNode(6)
console.log(BlockChainInstance.blocks());
