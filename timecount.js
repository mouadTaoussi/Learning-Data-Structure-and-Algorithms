"use strict";
exports.__esModule = true;
exports.stopTime = exports.setTime = void 0;
var totalSeconds = 0;
setInterval(setTime, 100);
function seconds() {
    ++totalSeconds;
}
function setTime() {
    console.log(totalSeconds);
}
exports.setTime = setTime;
function stopTime() {
    // clearInterval(int);
    console.log(totalSeconds);
}
exports.stopTime = stopTime;
