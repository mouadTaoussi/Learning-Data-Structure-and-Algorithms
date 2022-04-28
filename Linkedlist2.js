var Nodee = /** @class */ (function () {
    function Nodee(data, next) {
        this.data = data;
        this.next = next;
    }
    return Nodee;
}());
var LinkedLists = /** @class */ (function () {
    function LinkedLists() {
        this.head = null;
        this.size = 0;
    }
    LinkedLists.prototype.append = function (value) {
        var current = this.head;
        if (this.head == null) {
            this.head = new Nodee(value, null);
            return value;
        }
        while (current.next != null) {
            // Step forward
            current = current.next;
        }
        if (current.next == null) {
            current.next = new Nodee(value, null);
            return value;
        }
        return -1;
    };
    LinkedLists.prototype.appendAt = function (value, after) {
        var current = this.head;
        while (current.next != null) {
            if (current.data == after) {
                var oldNext = current.next;
                var newNext = new Nodee(value, oldNext);
                current.next = newNext;
                return value;
            }
            // Step forward
            current = current.next;
        }
        return -1;
    };
    LinkedLists.prototype.update = function (value, newValue) {
        var current = this.head;
        var previous = null;
        if (this.head.next == null && this.head.data == value) {
            this.head.data = newValue;
            return newValue;
        }
        else {
            while (current.data != value) {
                previous = current;
                // Step forward
                current = current.next;
            }
        }
        previous.next = new Nodee(newValue, current.next);
        return newValue;
    };
    LinkedLists.prototype.remove = function (value) {
        var current = this.head;
        var previous;
        if (this.head.next == null) {
            this.head = null;
        }
        while (current.data !== value) {
            if (current.data !== value) {
                previous = current;
            }
            // Step Forward
            current = current.next;
        }
        previous.next = current.next;
    };
    LinkedLists.prototype.print = function () {
        var current = this.head;
        var values = [];
        while (current) {
            values.push(current.data);
            // Step forward
            current = current.next;
        }
        return values;
    };
    // Not 
    LinkedLists.prototype.invert = function () {
        var current = this.head;
        var previous = null;
        var temp = null;
        // 100 > 200 > 300 > 400 > 500
        // 500 > 400 > 300 > 200 > 100
        while (true) {
            if (current.next != null) {
                temp = current.next;
                current.next = previous;
                // current = temp
                previous = current;
            }
            // Step Forward
            current = temp;
            break;
        }
    };
    return LinkedLists;
}());
var LL = new LinkedLists();
LL.append(100);
LL.append(200);
LL.append(300);
LL.append(400);
LL.append(500);
LL.appendAt(600, 100);
LL.update(200, 700);
LL.remove(300);
console.log(LL.print());
LL.invert();
console.log(LL.print());
// LL.append({
// 	_id: 'hht54th65g3bfd35fbd3sg3',
// 	name : 'mouadTaoussi',
// })
// LL.append({
// 	_id: 'fg5g687eh58bd683rg7uky6',
// 	name : 'alanSmith',
// })
// LL.append({
// 	_id: 'bg5trh67bf6reg65f68erg8',
// 	name : 'jhonDoe',
// })
// LL.append({
// 	_id: 'nhr6g65ezf68rth76kt65n3',
// 	name : 'janesmith',
// })
// LL.append({
// 	_id: 'bd79zv65sv65fd6fgn35bf3',
// 	name : 'mikepeterson',
// })
// LL.appendAt({
// 	_id: 'fg5g687eh58bd683rg7uky6',
// 	name : 'alanSmith',
// },{
// 	_id: 'bg54fgb4bfd24bfd24bd24b',
// 	name : 'walidbnd',
// });
