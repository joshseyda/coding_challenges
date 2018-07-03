// Using a for loop, compute the sum of the numbers in the array named prices; storing the result in the sum variable.
var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;

// Your code here
for (let i = 0; prices[i] > prices.length; i++) {
    sum += prices[i];
}
console.log("The sum is: ", sum);