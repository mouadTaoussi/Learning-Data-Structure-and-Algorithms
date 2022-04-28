var LLNode = /** @class */ (function () {
    function LLNode(value, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    return LLNode;
}());
var LinkedListDS = /** @class */ (function () {
    function LinkedListDS() {
    }
    LinkedListDS.prototype.insert = function (value) {
        if (this.tail == null) {
            this.head = new LLNode(value);
            this.tail = this.head;
        }
        else {
            // const prev = 
            this.tail.next = new LLNode(value, null, this.tail);
            this.tail = this.tail.next;
        }
        return value;
    };
    LinkedListDS.prototype.printIncreasingly = function () {
        var current = this.head;
        var values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    };
    LinkedListDS.prototype.printdecreasingly = function () {
        var current = this.tail;
        var values = [];
        while (current) {
            values.push(current.value);
            current = current.prev;
        }
        return values;
    };
    return LinkedListDS;
}());
var LL = new LinkedListDS();
LL.insert(100);
LL.insert(200);
LL.insert(300);
// console.log(LL.print())
console.log(LL.printIncreasingly());
console.log(LL.printdecreasingly());
