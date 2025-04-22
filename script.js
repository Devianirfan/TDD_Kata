// FizzBuzz program

function fizzBuzz(n) {
  let result = "";

  // Count occurrences of "Fizz" (divisible by 3 and contains 3)
  if (n % 3 === 0) {
    result += "Fizz";
  }
  result += n.toString().split("").filter((digit) => digit === "3").map(() => "Fizz").join("");

  // Count occurrences of "Buzz" (divisible by 5 and contains 5)
  if (n % 5 === 0) {
    result += "Buzz";
  }
  result += n.toString().split("").filter((digit) => digit === "5").map(() => "Buzz").join("");

  // Return the result or the number if no Fizz/Buzz
  return result || n;

}

// Export the function for testing
module.exports = fizzBuzz;

// Uncomment this to run the program manually
// for (let i = 1; i <= 100; i++) {
//   console.log(fizzBuzz(i));
// }