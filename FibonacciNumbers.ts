function fibonacci(n){
  if(n == 1) return 0;  // Return value for n=1
  if(n == 2) return 1;  // Return value for n=2
  
  // Recursive call
  return fibonacci(n-1) + fibonacci(n-2); 
}
// console.log(fibonacci(6))
const n = 10;
  
// Create a new array of size 'n'
var series = new Array(n); 

// Fills all places in array with 0
series.fill(0);   
  
for(let i = 1; i <= n; i++) {

    // Store i-th Fibonacci number
    series[i-1] = fibonacci(i); 
}

// Print the series
console.log(series);