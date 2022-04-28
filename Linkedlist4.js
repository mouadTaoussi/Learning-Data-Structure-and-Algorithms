var LLNode = /** @class */ (function () {
    function LLNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
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
        }
        else {
            while (current.next != null) {
                current = current.next;
            }
            current.next = new LLNode(value);
        }
        // if linked list is circular
        return value;
    };
    LinkedListDS.prototype.remove = function (value) {
        var current = this.head;
        var previous = null;
        while (current != null) {
            if (current.value == value) {
                previous.next = current.next;
            }
            previous = current;
            current = current.next;
        }
        // if linked list is circular
        return value;
    };
    LinkedListDS.prototype.update = function (value, newValue) {
        var current = this.head;
        var previous = null;
        while (current) {
            if (value != current.value) {
                previous = current;
                current = current.next;
            }
            else if (value == current.value) {
                previous.next = new LLNode(newValue, current.next);
                break;
            }
        }
        // if linked list is circular
        return newValue;
    };
    LinkedListDS.prototype.print = function () {
        var current = this.head;
        var values = [];
        while (current.next != this.head) {
            values.push(current.value);
            current = current.next;
        }
        // console.log(this.head.next.next.next)
        return values;
    };
    LinkedListDS.prototype.enableCircular = function () {
        var current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = this.head;
    };
    LinkedListDS.prototype.disableCircular = function () {
        var current = this.head;
        while (current.next.value != this.head.value) {
            current = current.next;
        }
        current.next = null;
    };
    return LinkedListDS;
}());
var LL = new LinkedListDS();
LL.insert(100);
LL.insert(200);
LL.insert(300);
LL.insert(400);
LL.insert(500);
// LL.remove(200);
LL.update(300, 600);
LL.enableCircular();
// LL.disableCircular();
console.log(LL.print());
