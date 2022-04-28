var totalSeconds = 0;
 setInterval(setTime, 100);

function seconds() {
  ++totalSeconds;
}
export function setTime(){
	console.log(totalSeconds)
}
export function stopTime() {
	// clearInterval(int);
	console.log(totalSeconds);
}