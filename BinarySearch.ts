// import { setTime, stopTime } from './timecount'

const arr: number[] = [1,2,3,4,5,6,7,8,9,10];


function search(value :number,arr :number[]) :number | null {

	let low: number = 0;
	let high: number = arr.length - 1;

	while (low < high) {
		let middle = Math.floor(low + high / 2)

		if (arr[middle] == value) {
			return value
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


function main(): void {
	// setTime()
	console.log(search(10,arr))
	// stopTime()
}

main()