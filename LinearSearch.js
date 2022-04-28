var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function search(value, arr) {
    for (var i = 0; i < arr.length; ++i) {
        // code...
        if (arr[i] == value) {
            return i;
        }
    }
    return null;
}
console.log(search(10, arr));
