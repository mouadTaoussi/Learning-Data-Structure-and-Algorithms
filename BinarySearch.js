"use strict";
exports.__esModule = true;
var timecount_1 = require("./timecount");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function search(value, arr) {
    var low = 0;
    var high = arr.length - 1;
    while (low < high) {
        var middle = Math.floor(low + high / 2);
        if (arr[middle] == value) {
            return value;
        }
        else if (value > arr[middle]) {
            low = middle + 1;
        }
        else {
            high = middle - 1;
        }
    }
    return -1;
}
function main() {
    timecount_1.setTime();
    console.log(search(10, arr));
    timecount_1.stopTime();
}
main();
