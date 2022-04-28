"use strict";
exports.__esModule = true;
// Requiring the module
// const reader = require('xlsx')
var XLSX = require("xlsx");
// Reading our test file
var file = XLSX.readFile('./Classeur1.xlsx');
var data = [];
var sheets = file.SheetNames;
console.log(sheets);
for (var i = 0; i < sheets.length; i++) {
    var tabularDataJsoned = XLSX.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    tabularDataJsoned.forEach(function (res) {
        data.push(res);
    });
}
// Printing data
console.log(data);
// Sample data set
var student_data = [{
        Student: 'Nikhil',
        Age: 22,
        Branch: 'ISE',
        Marks: 70
    },
    {
        Student: 'Amitha',
        Age: 21,
        Branch: 'EC',
        Marks: 80
    }];
var ws = XLSX.utils.json_to_sheet(student_data);
XLSX.utils.book_append_sheet(file, ws, "Sheet3");
// Writing to our file
XLSX.writeFile(file, './test.xlsx');
