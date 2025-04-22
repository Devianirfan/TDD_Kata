// FizzBuzz program

function fizzBuzz(n) {
  let result = "";

  if (n % 3 === 0) {
    result += "Fizz";
  }
  result += n.toString().split("").filter((num) => num === "3").map(() => "Fizz").join("");

  if (n % 5 === 0) {
    result += "Buzz";
  }
  result += n.toString().split("").filter((num) => num === "5").map(() => "Buzz").join("");

  return result || n;

}

module.exports = fizzBuzz;

// for (let i = 1; i <= 100; i++) {
//   console.log(fizzBuzz(i));
// }