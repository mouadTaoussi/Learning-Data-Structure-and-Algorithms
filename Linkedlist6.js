var LLNode = /** @class */ (function () {
    function LLNode(value, /*prev: any = null,*/ next) {
        if (next === void 0) { next = null; }
        this.value = value;
        // this.prev = prev;
        this.next = next;
    }
    return LLNode;
}());
var LinkedListDS = /** @class */ (function () {
    function LinkedListDS() {
    }
    LinkedListDS.prototype.insert = function (value) {
        var current = this.head;
        if (this.head == null) {
            this.head = new LLNode(value);
            this.tail = this.head;
        }
        else {
            // prev pointer should be here
            this.tail.next = new LLNode(value);
            this.tail = this.tail.next;
        }
        return value;
    };
    LinkedListDS.prototype.insertAt = function (value, newValue) {
        var current = this.head;
        var previous = null;
        while (current) {
            if (current.value != value) {
                previous = current;
                current = current.next;
            }
            else {
                current.next = new LLNode(newValue, current.next);
                break;
            }
        }
        return newValue;
    };
    LinkedListDS.prototype.update = function (value, newValue) {
        var current = this.head;
        var previous = null;
        while (current) {
            if (current.value != value) {
                previous = current;
                current = current.next;
            }
            else {
                previous.next = new LLNode(newValue, current.next);
                break;
            }
        }
        return newValue;
    };
    LinkedListDS.prototype.remove = function (value) {
        var current = this.head;
        var previous = null;
        while (current) {
            if (current.value != value) {
                previous = current;
                current = current.next;
            }
            else {
                previous.next = current.next;
                break;
            }
        }
        return value;
    };
    LinkedListDS.prototype.print = function () {
        var current = this.head;
        var values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(this.head);
        return values;
    };
    return LinkedListDS;
}());
var LL = new LinkedListDS();
LL.insert(100);
LL.insert(200);
LL.insert(300);
LL.insert(400);
LL.insertAt(200, 700);
LL.remove(200);
LL.update(300, 600);
console.log(LL.print());
