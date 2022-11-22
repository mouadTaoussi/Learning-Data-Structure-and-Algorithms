let array: number[] = [ 2, 5, 3, 8, 6, 4, 1];


function  selectionSort( arr: number[]): number[] {

	let current = 0;
	const length = arr.length-1;

	while (current != length) {

		for (var i = current; i < arr.length; i++) {
			// code...

			if( arr[current] > arr[i]) {
				const greater = arr[current];
				const smaller = arr[i];

				arr[current] = smaller;
				arr[i] = greater;
				// console.log(current+ ' ' +length)
			}
		}
		current++;
	}

	console.log(arr)
	return arr;
}
selectionSort(array);