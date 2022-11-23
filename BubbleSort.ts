let array_of_unsorted_nums: number[] = [ 2, 5, 3, 8, 6, 4, 1];

function  bubbleSort(arr: number[]): number[] {

	for (var i = 0; i < arr.length; ++i) {
		// code...
		for (var j = 0; j < (arr.length - i - 1); ++j) {
			// code...
			if (arr[j] > arr[j+1]) {
				// swap
				const first = arr[j];
				const second = arr[j+1];

				arr[j] = second;
				arr[j+1] = first;
			}
		}
	}
	console.log(arr)
	return arr;
}

bubbleSort(array_of_unsorted_nums);