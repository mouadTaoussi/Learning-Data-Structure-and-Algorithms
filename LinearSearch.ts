// import { setTime, stopTime } from './timecount'

const arr: number[] = [1,2,3,4,5,6,7,8,9,10]


function search(value :number,arr :number[]) :number | null {

	for (var i = 0; i < arr.length; ++i) {
		// code...
		if(arr[i] == value ) {
			return value
		}
	}
	return null
}


function main(): void {
	// setTime()
	console.log(search(10,arr))
	// stopTime()
}

main()