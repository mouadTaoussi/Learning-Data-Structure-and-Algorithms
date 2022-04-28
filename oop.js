"use strict";
exports.__esModule = true;
exports.MainOne = void 0;
var Person = /** @class */ (function () {
    function Person(data, next) {
        this.data = data;
        this.next = next;
    }
    return Person;
}());
var MainOne = /** @class */ (function () {
    function MainOne(current, size) {
        this.current = current;
        this.size = size;
    }
    MainOne.prototype.append = function (data) {
        if (!this.current)
            this.current = new Person(data, null);
        this.current = new Person(data, this.current);
    };
    // getOne(): {name: string, age:number} {
    // 	return { name: this.name, age: this.age }
    // }	
    MainOne.prototype.print = function () {
        console.log(this.current);
    };
    return MainOne;
}());
exports.MainOne = MainOne;
